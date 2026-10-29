import asyncio
import os
import sys
from playwright.async_api import async_playwright

BASE_URL = "http://127.0.0.1:4173"
SCREENSHOT_DIR = "verification_screenshots"

ROUTES = [
    ("/", "Home"),
    ("/business-model", "Business Model"),
    ("/distribution", "Distribution"),
    ("/white-label", "White Label"),
    ("/zasco-franchising", "Franchising"),
    ("/supported-devices", "Supported Devices"),
    ("/software", "Software"),
    ("/solutions", "Solutions Hub"),
    ("/solutions/school-bus", "School Bus"),
    ("/solutions/employee", "Employee Management"),
    ("/solutions/analytics", "Location Analytics"),
    ("/solutions/route", "Route Optimization"),
    ("/solutions/temperature", "Temperature"),
    ("/solutions/sensor", "Sensor Telemetry"),
    ("/solutions/fuel", "Fuel Monitoring"),
    ("/about-us", "About Us"),
    ("/contact", "Contact Us"),
    ("/privacy-policy", "Privacy Policy"),
    ("/terms-and-conditions", "Terms and Conditions"),
    ("/refund-policy", "Refund Policy"),
]

async def verify_routes():
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        print(f"🚀 Starting verification of {len(ROUTES)} routes against {BASE_URL}...")
        results = []

        for route, name in ROUTES:
            full_url = f"{BASE_URL}{route}"
            try:
                response = await page.goto(full_url, wait_until="networkidle", timeout=10000)
                status = response.status if response else 0
                title = await page.title()
                
                # Check for an h1 or h2
                heading = await page.eval_on_selector("h1, h2", "el => el.textContent") if await page.query_selector("h1, h2") else "No heading found"
                
                # Check if images loaded without broken src
                broken_images = await page.eval_on_selector_all(
                    "img",
                    "imgs => imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src)"
                )

                safe_name = name.lower().replace(" ", "_")
                shot_path = os.path.join(SCREENSHOT_DIR, f"{safe_name}.png")
                await page.screenshot(path=shot_path, full_page=False)

                results.append({
                    "route": route,
                    "name": name,
                    "status": status,
                    "heading": heading.strip() if heading else "",
                    "broken_images": len(broken_images),
                    "broken_image_urls": broken_images,
                    "ok": status == 200 and len(broken_images) == 0
                })
                print(f"  ✓ [{status}] {route:25} | Heading: {heading.strip()[:40]:40} | Broken Imgs: {len(broken_images)}")

            except Exception as e:
                print(f"  ✗ FAILED {route}: {e}")
                results.append({
                    "route": route,
                    "name": name,
                    "status": 500,
                    "error": str(e),
                    "ok": False
                })

        await browser.close()

        passed = sum(1 for r in results if r.get("ok"))
        print(f"\n==========================================")
        print(f"Verification Complete: {passed}/{len(ROUTES)} routes verified successfully.")
        if console_errors:
            print(f"Console errors captured ({len(console_errors)}):")
            for err in console_errors[:5]:
                print(f"  - {err}")
        else:
            print("Zero console errors detected.")
        print(f"Screenshots saved to: {SCREENSHOT_DIR}/")

        if passed != len(ROUTES):
            sys.exit(1)

if __name__ == "__main__":
    asyncio.run(verify_routes())
