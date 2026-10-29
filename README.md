# Zasco GPS Web (zascogps.com)

A high-performance, 1:1 headless static recreation of the **Zasco GPS** corporate website ([zascogps.com](https://zascogps.com)), replacing the legacy WordPress website with a modern, ultra-fast React 18 + Vite 6 Single-Page Application (SPA).

---

## 🚀 Live Endpoints

- **Live Staging Subdomain:** [https://new.zascogps.com](https://new.zascogps.com) *(Caddy TLS, HTTP/2)*
- **Direct Isolated Port:** [http://129.121.170.63:3095](http://129.121.170.63:3095) *(Nginx Standalone Container)*
- **Production E-Commerce:** [https://shop.zascogps.com](https://shop.zascogps.com)
- **Live Support & CRM:** [https://support.zascogps.com](https://support.zascogps.com)

---

## 🛠 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/) (Dialog, Dropdown Menu, Tabs, Accordion) + `clsx` + `tailwind-merge`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/) (Browser router with instant page transition)
- **Theme:** Clean Professional Enterprise White Theme (Clean white `#FFFFFF`, subtle slate `#F8FAFC`, Zasco signature emerald `#10B981` and navy `#0F172A`).

---

## 📑 1:1 Route Architecture

All 20 legacy WordPress routes are faithfully recreated with identical content, headings, metrics, and optimized high-resolution crawled assets:

| Route | Page Name | Description & Key Features |
|---|---|---|
| `/` | **Home** | Hero slider, live metrics (100k+ tracked vehicles, 99.9% uptime), core pillars, trust badges, quick quote calculator |
| `/business-model` | **Business Models** | Comprehensive breakdown of Distribution, White-Label SaaS, and Franchise opportunities |
| `/distribution` | **Distribution** | Dealer & distributor criteria, tiered pricing slabs, territory exclusivity, dealer inquiry form |
| `/white-label` | **White Label** | Turnkey GPS tracking platform branding, custom Android/iOS apps, branded web portal, dedicated IP/domain |
| `/zasco-franchising` | **Franchising** | City & state franchise models, showroom/godown specs, margin breakdown, ROI calculator |
| `/supported-devices` | **Supported Devices** | Interactive catalog of 650+ supported GPS trackers (AIS-140, OBD-II, 4G, Magnetic, Asset trackers) |
| `/software` | **Software Platform** | Web platform & mobile app breakdown (geofencing, engine immobilizer, historical playback, fuel telemetry) |
| `/solutions` | **Solutions Hub** | Enterprise telematics directory across school, corporate, fleet, and cold-chain logistics |
| `/solutions/school-bus` | **School Bus Tracking** | RFID student attendance, parent live ETA notification, geofenced alerts, SOS integration |
| `/solutions/employee` | **Employee Transport** | Corporate cab roster optimization, safe-drop OTP confirmation, escort compliance, panic alerts |
| `/solutions/analytics` | **Fleet Analytics** | Idling reports, harsh acceleration/braking driver scoring, route efficiency, scheduled maintenance |
| `/solutions/route` | **Route Optimization** | Dynamic waypoint dispatching, turn-by-turn guidance, toll vs. time optimization, SLA adherence |
| `/solutions/temperature` | **Cold Chain Monitoring** | Multi-zone BLE temperature probes, real-time threshold excursion alarms, pharma/perishable audit logs |
| `/solutions/sensor` | **Sensor Telemetry** | Fuel float, door magnetic contact, load cell, PTO sensor, temperature, and camera integration |
| `/solutions/fuel` | **Fuel Monitoring** | Capacitive fuel rod probes, instant drain/theft SMS alerts, refuel validation, mileage benchmarks |
| `/about-us` | **About Zasco** | Company history, mission, leadership, ISO certifications, infrastructure scale |
| `/contact` | **Contact Us** | Office location, hotline (`+91 97164 67527`), support email, interactive inquiry form |
| `/privacy-policy` | **Privacy Policy** | Telematics data protection, GDPR & Indian IT Act compliance |
| `/terms-and-conditions` | **Terms & Conditions** | SaaS SLA, device warranty, billing cycles, liability |
| `/refund-policy` | **Refund Policy** | Hardware return terms, subscription cancellation terms |
| `/shop` | **Shop Redirect** | Seamless client-side redirect to the official store at `https://shop.zascogps.com` |

---

## ⚡ Production Integrations

1. **Zasco Support CRM Widget:**
   - Pre-loaded via `<script src="https://support.zascogps.com/widget.js" async></script>` in `index.html`.
   - Floats unobtrusively in the bottom-right corner for live agent chat, WhatsApp bridge, and visitor radar.
2. **Direct Lead Capture:**
   - Contact and quote forms submit directly to `https://support.zascogps.com/api/client/visitor/lead`.
   - Includes automatic WhatsApp click-to-chat fallback with pre-filled message text.
3. **E-Commerce Store:**
   - Header navigation CTA and product links route directly to `https://shop.zascogps.com`.

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm 9+ or pnpm

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/deepak7mahto/zasco-gps-web.git
cd zasco-gps-web

# Install dependencies
npm install

# Start Vite development server
npm run dev
# Server starts at http://localhost:5173
```

### Production Build & Preview
```bash
# Type-check and build production bundle
npm run build

# Preview production bundle locally
npm run preview
```

---

## 🧪 Automated Testing & Verification

A Playwright-driven test harness is included in `scripts/verify_site.py` to systematically crawl all 20 routes, assert HTTP 200 OK, check for console errors, and verify that 0 images are broken:

```bash
# Run headless verification test suite
python3 scripts/verify_site.py
```

All 20 routes pass with 100% success and 0 missing assets.

---

## 🚢 Deployment

Detailed deployment architecture and instructions for the Bluehost Mumbai VPS (`129.121.170.63`) are documented in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## 📄 License

Proprietary © 2026 Zasco GPS. All rights reserved.
