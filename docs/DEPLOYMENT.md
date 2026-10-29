# Zasco GPS Web — Deployment & Operations Guide

This guide documents the server architecture, deployment workflows, and cutover procedures for the new Zasco GPS web application.

---

## 🌐 Deployment Overview & Target Endpoints

The new Zasco GPS web application is deployed on the **Bluehost Mumbai VPS** (`129.121.170.63`), running in parallel with existing mission-critical production services without interference.

| Channel | URL | Target | Description |
|---|---|---|---|
| **Staging Subdomain** | [https://new.zascogps.com](https://new.zascogps.com) | Caddy $\rightarrow$ `:3095` | Production-grade TLS, HTTP/2, auto Let's Encrypt |
| **Isolated Direct Port** | [http://129.121.170.63:3095](http://129.121.170.63:3095) | Nginx Container | Dedicated bypass port, SPA routing enabled |
| **Live Support CRM** | [https://support.zascogps.com](https://support.zascogps.com) | TrackMe CRM | Untouched & isolated (active customer support) |
| **E-Commerce Store** | [https://shop.zascogps.com](https://shop.zascogps.com) | Zasco Store | Untouched & isolated |
| **Legacy Site** | [https://zascogps.com](https://zascogps.com) | Hostinger VPS (`89.117.188.71`) | Current legacy WordPress site (pending final cutover) |

---

## 🏗 Server Architecture

```
Internet (User Requests)
   │
   ├─► https://new.zascogps.com ──┐
   ├─► https://support.zascogps.com ─┼─► Caddy Reverse Proxy (:80 / :443)
   ├─► https://shop.zascogps.com ────┘   (Auto TLS with Let's Encrypt)
   │                                     │
   │                                     ├─► zasco_web_standalone (:3095)
   │                                     ├─► trackme-backend (:8080)
   │                                     ├─► trackme-frontend (:3000)
   │                                     └─► shop_web & shop_api
   │
   └─► http://129.121.170.63:3095 ────────► zasco_web_standalone (Nginx:alpine)
                                            (Serves /srv/zasco-gps-web)
```

### VPS Host Details
- **IP Address:** `129.121.170.63`
- **Location:** Mumbai, India
- **OS:** Ubuntu 24.04 LTS
- **SSH Key:** `/Users/homemac/work/zasco-support-crm/certs/oci_vm_key`
- **User:** `root`

### Container Configuration
- **Container Name:** `zasco_web_standalone`
- **Image:** `nginx:alpine`
- **Port Mapping:** `0.0.0.0:3095->80/tcp`
- **Firewall:** Port `3095/tcp` allowed in `ufw`
- **Mounted Volumes:**
  - Host `/srv/zasco-gps-web` $\rightarrow$ Container `/usr/share/nginx/html:ro`
  - Host `/srv/zasco-web-nginx/nginx.conf` $\rightarrow$ Container `/etc/nginx/conf.d/default.conf:ro`

---

## 📦 Host File Structure

```
/srv/
├── zasco-gps-web/            # Production static build files (index.html, assets, images)
│   ├── index.html
│   ├── assets/
│   │   ├── index-*.js
│   │   └── index-*.css
│   └── images/
│       └── ... (103 brand and product assets)
│
└── zasco-web-nginx/
    └── nginx.conf            # Nginx SPA fallback configuration (try_files $uri $uri/ /index.html)

/root/trackme-crm/docker/
└── Caddyfile.prod            # Production Caddy proxy configuration
```

### Remote Nginx Configuration (`/srv/zasco-web-nginx/nginx.conf`)
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static asset caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

### Caddyfile Configuration (`/root/trackme-crm/docker/Caddyfile.prod`)
```caddy
new.zascogps.com {
    encode gzip zstd
    reverse_proxy 129.121.170.63:3095
}
```

---

## 🚀 How to Deploy Updates

To push a new version of the frontend to production:

```bash
# 1. Build locally
npm run build

# 2. Rsync the compiled bundle to the remote server
rsync -avz --delete dist/ \
  -e "ssh -i /Users/homemac/work/zasco-support-crm/certs/oci_vm_key" \
  root@129.121.170.63:/srv/zasco-gps-web/

# 3. Ensure permissions are correct
ssh -i /Users/homemac/work/zasco-support-crm/certs/oci_vm_key root@129.121.170.63 \
  "chmod -R 755 /srv/zasco-gps-web"
```
Because the container mounts `/srv/zasco-gps-web` directly, changes are instantly live across both `http://129.121.170.63:3095` and `https://new.zascogps.com` without needing a container restart.

---

## 🔄 Final Production Cutover (Switching `zascogps.com`)

When the client approves the staging site on `new.zascogps.com` and is ready to switch `zascogps.com` over from WordPress:

### Step 1: DNS Configuration
Point the apex domain and www subdomain in the DNS management portal:
- `A` record for `@` (`zascogps.com`) $\rightarrow$ `129.121.170.63`
- `A` record for `www` (`www.zascogps.com`) $\rightarrow$ `129.121.170.63`

### Step 2: Update Caddyfile on VPS
Edit `/root/trackme-crm/docker/Caddyfile.prod` to include the production domain:

```caddy
zascogps.com, www.zascogps.com, new.zascogps.com {
    encode gzip zstd
    reverse_proxy 129.121.170.63:3095
}
```

### Step 3: Reload Caddy
```bash
ssh -i /Users/homemac/work/zasco-support-crm/certs/oci_vm_key root@129.121.170.63 \
  "docker exec trackme-caddy caddy reload --config /etc/caddy/Caddyfile"
```
Caddy will automatically provision Let's Encrypt certificates for `zascogps.com` and `www.zascogps.com` with zero downtime.

---

## 🔍 Verification & Health Audit Commands

Run these commands to verify all services on the VPS:

```bash
# 1. Verify New Web Staging Subdomain
curl -I https://new.zascogps.com/

# 2. Verify Isolated Port 3095
curl -I http://129.121.170.63:3095/

# 3. Verify CRM App & Backend Health
curl -I https://support.zascogps.com/
curl -s https://support.zascogps.com/api/health

# 4. Verify E-Commerce Store
curl -I https://shop.zascogps.com/

# 5. Check Docker Container Status
ssh -i /Users/homemac/work/zasco-support-crm/certs/oci_vm_key root@129.121.170.63 \
  "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"
```
