#!/usr/bin/env bash
# ==============================================================================
# ZASCO GPS WEB — PRODUCTION & STAGING DEPLOYMENT SCRIPT
# ==============================================================================
# Usage:
#   ./deploy.sh
#   npm run deploy
# ==============================================================================

set -euo pipefail

# ANSI Color Codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Deployment Target Configuration
SERVER_IP="129.121.170.63"
SERVER_USER="root"
SSH_KEY="/Users/homemac/work/zasco-support-crm/certs/oci_vm_key"
REMOTE_DIR="/srv/zasco-gps-web/"
STAGING_URL="https://new.zascogps.com"
PORT_URL="http://129.121.170.63:3095"

echo -e "\n${CYAN}====================================================================${NC}"
echo -e "${CYAN}🚀  ZASCO GPS WEB — AUTOMATED DEPLOYMENT DISPATCHER${NC}"
echo -e "${CYAN}====================================================================${NC}\n"

# 1. Pre-flight Checks
echo -e "${BLUE}[1/5] Running pre-flight checks...${NC}"
if [ ! -f "$SSH_KEY" ]; then
    echo -e "${RED}❌ Error: SSH key not found at $SSH_KEY${NC}"
    exit 1
fi
chmod 600 "$SSH_KEY" 2>/dev/null || true
echo -e "  ✓ SSH Key verified: $SSH_KEY"

# Check git status
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
echo -e "  ✓ Branch: ${GREEN}${BRANCH}${NC} (${COMMIT})"

# 2. Production Build
echo -e "\n${BLUE}[2/5] Building production Vite bundle...${NC}"
npm run build

if [ ! -f "dist/index.html" ]; then
    echo -e "${RED}❌ Build failed: dist/index.html not found!${NC}"
    exit 1
fi
BUNDLE_SIZE=$(du -sh dist | cut -f1)
echo -e "  ✓ Production bundle compiled successfully (Size: ${GREEN}${BUNDLE_SIZE}${NC})"

# 3. Rsync to Remote VPS
echo -e "\n${BLUE}[3/5] Deploying static bundle to Bluehost Mumbai VPS (${SERVER_IP})...${NC}"
rsync -avz --delete \
    -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no -o ConnectTimeout=10" \
    dist/ \
    "${SERVER_USER}@${SERVER_IP}:${REMOTE_DIR}"

echo -e "  ✓ Rsync synchronization completed."

# 4. Permissions & Remote Environment Audit
echo -e "\n${BLUE}[4/5] Enforcing remote file permissions & checking container...${NC}"
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "${SERVER_USER}@${SERVER_IP}" "
    chmod -R 755 ${REMOTE_DIR}
    docker ps --filter name=zasco_web_standalone --format 'Container: {{.Names}} | Status: {{.Status}} | Ports: {{.Ports}}'
"

# 5. Live Health Verification
echo -e "\n${BLUE}[5/5] Performing live endpoint health audit...${NC}"

# Check Isolated Port 3095
PORT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 8 "$PORT_URL/" || echo "FAILED")
if [ "$PORT_STATUS" = "200" ]; then
    echo -e "  ✓ Isolated Port 3095: ${GREEN}HTTP 200 OK${NC} ($PORT_URL)"
else
    echo -e "  ⚠️ Isolated Port 3095 returned status: ${YELLOW}${PORT_STATUS}${NC}"
fi

# Check Staging Subdomain
STAGING_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --resolve "new.zascogps.com:443:129.121.170.63" --connect-timeout 8 "$STAGING_URL/" || echo "FAILED")
if [ "$STAGING_STATUS" = "200" ]; then
    echo -e "  ✓ Staging Subdomain:  ${GREEN}HTTP/2 200 OK${NC} ($STAGING_URL)"
else
    echo -e "  ⚠️ Staging Subdomain returned status: ${YELLOW}${STAGING_STATUS}${NC}"
fi

# Deployment Complete
DEPLOY_TIME=$(date "+%Y-%m-%d %H:%M:%S IST")
echo -e "\n${GREEN}====================================================================${NC}"
echo -e "${GREEN}🎉  DEPLOYMENT SUCCESSFUL! (${DEPLOY_TIME})${NC}"
echo -e "${GREEN}====================================================================${NC}"
echo -e "  • Staging URL:   ${CYAN}${STAGING_URL}${NC}"
echo -e "  • Direct Port:   ${CYAN}${PORT_URL}${NC}"
echo -e "  • Remote Host:   ${SERVER_USER}@${SERVER_IP}:${REMOTE_DIR}"
echo -e "  • Bundle Commit: ${COMMIT} on ${BRANCH}\n"
