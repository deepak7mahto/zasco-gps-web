import os
import json
import urllib.request
import urllib.parse
from playwright.sync_api import sync_playwright

BASE_DIR = "/Users/homemac/work/zasco-gps-web"
CRAWLER_DIR = os.path.join(BASE_DIR, "crawler")
SCREENSHOTS_DIR = os.path.join(CRAWLER_DIR, "screenshots")
CONTENT_DIR = os.path.join(CRAWLER_DIR, "content")
ASSETS_DIR = os.path.join(CRAWLER_DIR, "assets")
DOCS_DIR = os.path.join(BASE_DIR, "docs")

for d in [SCREENSHOTS_DIR, CONTENT_DIR, ASSETS_DIR, DOCS_DIR]:
    os.makedirs(d, exist_ok=True)

PAGES_TO_CRAWL = [
    {"slug": "home", "url": "https://zascogps.com/", "title": "Home"},
    {"slug": "business-model", "url": "https://zascogps.com/business-model/", "title": "Business Model"},
    {"slug": "distribution", "url": "https://zascogps.com/distribution/", "title": "Distribution"},
    {"slug": "white-label", "url": "https://zascogps.com/white-label/", "title": "White Label"},
    {"slug": "zasco-franchising", "url": "https://zascogps.com/zasco-franchising/", "title": "Franchising"},
    {"slug": "supported-devices", "url": "https://zascogps.com/?page_id=3976", "title": "Supported Devices"},
    {"slug": "software", "url": "https://zascogps.com/software/", "title": "Software"},
    {"slug": "solutions", "url": "https://zascogps.com/solution-2/", "title": "Solutions Overview"},
    {"slug": "school-tracking", "url": "https://zascogps.com/school-tracking-management/", "title": "School Tracking"},
    {"slug": "employee-management", "url": "https://zascogps.com/employee-management-2/", "title": "Employee Management"},
    {"slug": "location-analytics", "url": "https://zascogps.com/location-based-analytics/", "title": "Location Analytics"},
    {"slug": "route", "url": "https://zascogps.com/route-2/", "title": "Route Optimization"},
    {"slug": "temperature", "url": "https://zascogps.com/temperature-2/", "title": "Temperature Monitoring"},
    {"slug": "sensor", "url": "https://zascogps.com/sensor/", "title": "Sensors"},
    {"slug": "fuel", "url": "https://zascogps.com/fuel-2/", "title": "Fuel Monitoring"},
    {"slug": "about-us", "url": "https://zascogps.com/about-us/", "title": "About Us"},
    {"slug": "contact", "url": "https://zascogps.com/contact/", "title": "Contact Us"},
    {"slug": "privacy-policy", "url": "https://zascogps.com/privacy-and-policy/", "title": "Privacy Policy"},
    {"slug": "terms-and-conditions", "url": "https://zascogps.com/terms-and-conditions/", "title": "Terms & Conditions"},
    {"slug": "return-refund", "url": "https://zascogps.com/return-and-refund-policy/", "title": "Return & Refund Policy"}
]

print(f"Starting crawl for {len(PAGES_TO_CRAWL)} pages...")

downloaded_assets = {}
manifest = []

def download_image(img_url, base_url):
    if not img_url:
        return None
    full_url = urllib.parse.urljoin(base_url, img_url)
    if full_url in downloaded_assets:
        return downloaded_assets[full_url]
    
    parsed = urllib.parse.urlparse(full_url)
    basename = os.path.basename(parsed.path)
    if not basename or "." not in basename:
        basename = f"asset_{len(downloaded_assets)}.png"
    
    # Clean filename
    clean_name = "".join(c for c in basename if c.isalnum() or c in ".-_")
    local_path = os.path.join(ASSETS_DIR, clean_name)
    
    # Avoid collisions
    counter = 1
    base_stem, ext = os.path.splitext(clean_name)
    while os.path.exists(local_path):
        clean_name = f"{base_stem}_{counter}{ext}"
        local_path = os.path.join(ASSETS_DIR, clean_name)
        counter += 1
        
    try:
        req = urllib.request.Request(full_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as resp, open(local_path, "wb") as f:
            f.write(resp.read())
        downloaded_assets[full_url] = clean_name
        return clean_name
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")
        return None

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()

    for item in PAGES_TO_CRAWL:
        slug = item["slug"]
        url = item["url"]
        title_hint = item["title"]
        print(f"\n--- Crawling: {slug} ({url}) ---")
        
        try:
            resp = page.goto(url, wait_until="networkidle", timeout=30000)
            status = resp.status if resp else 0
            page_title = page.title()
            
            # Screenshot
            shot_file = f"{slug}.png"
            shot_path = os.path.join(SCREENSHOTS_DIR, shot_file)
            page.screenshot(path=shot_path, full_page=True)
            print(f"  [✓] Screenshot saved: {shot_file}")
            
            # Extract DOM elements, text, headings, images
            data = page.evaluate('''() => {
                const getHeadings = () => {
                    const headings = [];
                    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
                        headings.push({ tag: h.tagName.toLowerCase(), text: h.innerText.trim() });
                    });
                    return headings;
                };
                
                const getImages = () => {
                    const imgs = [];
                    document.querySelectorAll('img').forEach(img => {
                        if (img.src && !img.src.startsWith('data:')) {
                            imgs.push({ src: img.src, alt: img.alt || '', width: img.naturalWidth, height: img.naturalHeight });
                        }
                    });
                    return imgs;
                };
                
                const getMeta = () => {
                    const desc = document.querySelector('meta[name="description"]');
                    return {
                        description: desc ? desc.content : ''
                    };
                };
                
                // Get main body text paragraphs
                const paragraphs = [];
                document.querySelectorAll('p, li, blockquote').forEach(p => {
                    const t = p.innerText.trim();
                    if (t.length > 10) paragraphs.push(t);
                });

                return {
                    title: document.title,
                    meta: getMeta(),
                    headings: getHeadings(),
                    images: getImages(),
                    paragraphs: paragraphs
                };
            }''')
            
            # Download images
            saved_images = []
            for img in data.get("images", []):
                local_file = download_image(img.get("src"), url)
                if local_file:
                    saved_images.append({
                        "original_src": img["src"],
                        "local_file": local_file,
                        "alt": img.get("alt", "")
                    })
            
            # Save page content json
            content_record = {
                "slug": slug,
                "url": url,
                "title": page_title,
                "status": status,
                "screenshot": shot_file,
                "meta": data.get("meta", {}),
                "headings": data.get("headings", []),
                "images": saved_images,
                "paragraphs": data.get("paragraphs", [])
            }
            
            content_json_path = os.path.join(CONTENT_DIR, f"{slug}.json")
            with open(content_json_path, "w", encoding="utf-8") as f:
                json.dump(content_record, f, indent=2, ensure_ascii=False)
            print(f"  [✓] Content JSON saved: {slug}.json ({len(data.get('paragraphs', []))} text blocks, {len(saved_images)} images)")
            
            manifest.append({
                "slug": slug,
                "title": page_title,
                "url": url,
                "screenshot": shot_file,
                "text_block_count": len(data.get("paragraphs", [])),
                "image_count": len(saved_images)
            })

        except Exception as e:
            print(f"  [!] Error crawling {url}: {e}")

    browser.close()

manifest_path = os.path.join(DOCS_DIR, "CRAWL_MANIFEST.json")
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump({
        "crawl_timestamp": "2026-10-29",
        "total_pages": len(manifest),
        "total_assets_downloaded": len(downloaded_assets),
        "pages": manifest
    }, f, indent=2)

print(f"\n==========================================")
print(f"Crawl finished!")
print(f"Total pages successfully crawled: {len(manifest)}")
print(f"Total image assets captured: {len(downloaded_assets)}")
print(f"Manifest written to: {manifest_path}")
print(f"==========================================")
