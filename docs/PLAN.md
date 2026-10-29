# Zasco GPS Web Platform — Architecture & Recreation Implementation Plan

> **Domain:** [`https://zascogps.com`](https://zascogps.com)  
> **Repository:** `/Users/homemac/work/zasco-gps-web`  
> **Tech Stack:** React 18, Vite 6, TypeScript, Tailwind CSS v3, Radix UI / shadcn/ui, Lucide Icons  
> **Theme:** Clean Professional Enterprise White Theme (Crisp white background, modern slate typography, Zasco signature emerald & cobalt accents)  
> **Primary Objective:** Complete 1:1 headless static recreation of the legacy WordPress site (`zascogps.com`) with sub-second page loads, zero plugin bloat, full mobile responsiveness, and direct integration into the Zasco E-Commerce store and CRM.

---

## 1. Executive Summary & Recreation Rationale

The live WordPress deployment of **`zascogps.com`** suffers from classic CMS degradations: slow initial server response times, broken template scripts, erratic mobile rendering, and vulnerable plugin dependencies. 

This project rebuilds `zascogps.com` from scratch as a high-performance **React + Vite static web application** using:
1. **Automated Headless Chrome Crawl Pipeline:** Full-page visual baselines, extracted DOM text blocks, typography scales, and high-resolution asset downloads saved locally in `/Users/homemac/work/zasco-gps-web/crawler/`.
2. **Componentized Architecture:** Replacing monolithic WordPress shortcodes with modular, typed React components using **Radix UI** and **Tailwind CSS**.
3. **E-Commerce Unification:** Decommissioning legacy WooCommerce by linking `/shop` directly to the production-grade [`zasco-ecommerce-store`](file:///Users/homemac/work/zasco-ecommerce-store) (`https://shop.zascogps.com`).
4. **CRM & Lead Automation:** Native integration of the floating support chat widget, Visitor Radar, and Lead Log Book from [`zasco-support-crm`](file:///Users/homemac/work/zasco-support-crm).

---

## 2. Information Architecture & Complete Route Map

Every single navigation menu item, dropdown option, product page, and policy document from the live site is mapped into dedicated typed React routes:

```
Navigation Header:
├── [HOME] (/)
├── [BUSINESS MODEL] (/business-model)
│   ├── Distribution (/distribution)
│   ├── White Label (/white-label)
│   └── Franchising (/zasco-franchising)
├── [SUPPORTED DEVICES] (/supported-devices)
├── [SOFTWARE] (/software)
├── [SOLUTIONS] (Dropdown)
│   ├── School Tracking Management (/solutions/school-bus)
│   ├── Employee Management (/solutions/employee)
│   ├── Location Based Analytics (/solutions/analytics)
│   ├── Route Optimization (/solutions/route)
│   ├── Temperature Monitoring (/solutions/temperature)
│   ├── Sensor Telemetry (/solutions/sensor)
│   └── Fuel Monitoring (/solutions/fuel)
├── [ABOUT US] (/about-us)
├── [CONTACT US] (/contact)
└── [BUY NOW / SHOP] (/shop) -> Routed/linked to shop.zascogps.com
```

### Route & Content Specifications

| Route Path | Original WP Slug | Content Scope & Key Modules |
| :--- | :--- | :--- |
| `/` | `home` | Hero carousel, core metrics (100k+ vehicles), live platform preview, solution cards, AIS-140 compliance callout, customer trust logos, quick lead form. |
| `/business-model` | `business-model` | Three-tier business overview: Dealer Distribution, White-Label Software, and Regional Franchising. Margin breakdown and partner benefits. |
| `/distribution` | `distribution` | Dealer onboarding criteria, wholesale hardware rates, marketing assistance, protected territory rules, application form. |
| `/white-label` | `white-label` | Custom branded mobile apps (Android/iOS), custom domain tracking server, custom SMS gateway integration, dedicated technical support. |
| `/zasco-franchising` | `zasco-franchising` | Full Zasco franchise model, showroom/godown setup guidelines, recurring revenue share on device renewals. |
| `/supported-devices` | `page_id=3976` | Searchable directory of certified hardware (AIS-140, OBD-II, 4G Wire-in, Magnetic portable, Fuel sensors, Dashcams). |
| `/software` | `software` | Deep dive into Zasco Fleet Web & Mobile app capabilities (real-time telemetry, geofence, engine kill, replay, maintenance alerts). |
| `/solutions/school-bus` | `school-tracking-management` | Student RFID card tap-in/tap-out, live parent app notifications, automated route ETA alerts, speed governor compliance. |
| `/solutions/employee` | `employee-management-2` | Staff transport automation, roster scheduling, safe drop verification, SOS panic triggers. |
| `/solutions/analytics` | `location-based-analytics` | Heatmaps, dwell time analysis, fleet utilization rates, idling cost calculators. |
| `/solutions/route` | `route-2` | Multi-stop delivery routing, deviation alerts, turnaround time optimization. |
| `/solutions/temperature` | `temperature-2` | Cold chain logistics, real-time BLE/digital temperature probes, defrost cycle tracking, breach alarms. |
| `/solutions/sensor` | `sensor` | Door open/close sensors, PTO sensors, load cell integration, seatbelt indicators. |
| `/solutions/fuel` | `fuel-2` | Capacitive fuel rod monitoring, instant fuel drain/theft SMS alerts, mileage discrepancy reports. |
| `/about-us` | `about-us` | Zasco brand story, mission, ISO & AIS certifications, leadership, office network across Delhi NCR, UP, Haryana, and Bangalore. |
| `/contact` | `contact` | Corporate office coordinates, 24/7 support hotline, email desk, interactive Google Map, direct inquiry form. |
| `/privacy-policy` | `privacy-and-policy` | Data handling, location data retention, GDPR/Indian IT Act compliance. |
| `/terms-and-conditions` | `terms-and-conditions` | Hardware warranty, SLA commitments, subscription renewal terms. |
| `/refund-policy` | `return-and-refund-policy` | 7-day replacement policy, subscription cancellation rules. |

---

## 3. Design System & Visual Aesthetics (Enterprise White Theme)

* **Design Foundation:** High-contrast, clean enterprise aesthetic inspired by modern telematics leaders (Samsara, Geotab, Motive).
* **Color Hierarchy:**
  * `Primary Background`: Pure White (`#FFFFFF`) with secondary section containers in Light Slate (`#F8FAFC`).
  * `Primary Accent`: Zasco Emerald (`#10B981` / `#059669`) for positive CTAs, live indicators, and badges.
  * `Secondary Accent`: Tech Navy (`#0F172A` / `#1E293B`) for high-impact headlines and dark contrast cards.
  * `Borders & Separators`: Subtle Slate borders (`#E2E8F0` / `#CBD5E1`) for card boundaries and data tables.
  * `Typography`: Modern grotesque sans-serif (`Inter` or `Plus Jakarta Sans`) with tight tracking on headings and clear line-height on descriptions.
* **Component Library (Radix UI / shadcn):**
  * `DropdownMenu`: Seamless hover-enabled mega menus for Solutions and Business Model.
  * `Dialog / Sheet`: Fast lead capture and quick inquiry modals.
  * `Tabs`: Clean switching between Device categories (AIS-140 vs OBD vs Asset trackers) and Solutions.
  * `Accordion`: Interactive FAQs on contact, distribution, and software pages.

---

## 4. Crawled Asset Extraction & Local Storage Architecture

All assets from the crawling process are organized systematically:

```
zasco-gps-web/
├── crawler/
│   ├── assets/                  # 100+ raw downloaded images, logos, banners, diagrams
│   ├── content/                 # JSON dumps of page headings, paragraphs, and metadata
│   │   ├── home.json
│   │   ├── business-model.json
│   │   ├── distribution.json
│   │   └── ... (20 page json records)
│   └── screenshots/             # Full-page PNG visual baselines for 1:1 fidelity matching
│       ├── home.png
│       ├── business-model.png
│       └── ...
├── docs/
│   ├── PLAN.md                  # This implementation masterplan
│   └── CRAWL_MANIFEST.json      # Structured index of all crawled pages and assets
├── public/
│   ├── logo.svg                 # Optimized Zasco GPS vector logo
│   └── images/                  # Cleaned WebP assets mapped from crawler/assets/
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Sticky topbar with mega-menus and Phone/Shop CTAs
    │   │   ├── MobileNav.tsx    # Responsive slide-over drawer
    │   │   └── Footer.tsx       # Multi-column footer with all deep links & policies
    │   ├── home/
    │   │   ├── HeroBanner.tsx   # Dynamic hero with hardware & software highlights
    │   │   ├── TrustMetrics.tsx # 100,000+ Vehicles, 99.9% Uptime, 500+ Dealers
    │   │   ├── SolutionsGrid.tsx# School, Fuel, Route, Cold Chain interactive cards
    │   │   ├── HardwareShowcase.tsx # Top GPS models with specs
    │   │   └── AppDownload.tsx  # QR codes & store links for iOS/Android
    │   ├── common/
    │   │   ├── LeadForm.tsx     # High-conversion lead form with phone verification
    │   │   ├── DeviceCard.tsx   # Reusable hardware item card
    │   │   └── PageHeader.tsx   # Breadcrumb and title banner for subpages
    │   └── ui/                  # Radix UI / shadcn primitives (Button, Input, Dialog, etc.)
    ├── pages/                   # Typed page routes matching the route map
    └── lib/
        ├── crm.ts               # Lead dispatch to support.zascogps.com
        └── utils.ts             # Tailwind class merging
```

---

## 5. Integrations & Live Ecosystem Hooks

1. **E-Commerce Linking (`/shop`):**
   * The `"BUY NOW"` and `"Shop"` buttons route directly to [`https://shop.zascogps.com`](https://shop.zascogps.com) (or seamlessly iframe / deep-link into [`zasco-ecommerce-store`](file:///Users/homemac/work/zasco-ecommerce-store)).
2. **Zasco Support CRM Integration:**
   * Embedded live chat and visitor tracking widget:
     ```html
     <script src="https://support.zascogps.com/widget.js" async></script>
     ```
   * All form inquiries from Contact, Distribution, and Franchising sync directly to the CRM's **Lead Log Book** for instant sales outreach.
3. **Facebook Pixel & WhatsApp Direct Connect:**
   * Instant WhatsApp chat button targeting Mohamad Ali (`+91 97164 67527`) with dynamic product context.

---

## 6. Execution Milestones

* **Milestone 1: Crawl Completion & Asset Cataloging (Done)**
  * Full-page screenshots and DOM content captured in `/crawler`.
* **Milestone 2: Vite Scaffolding & Design System Setup**
  * Initialize Vite 6 + React + TypeScript + Tailwind + Radix UI.
* **Milestone 3: Core Layout & Navigation Engineering**
  * Build sticky Navbar with mega-menus, Mobile Drawer, and Footer with all routes.
* **Milestone 4: Page Construction (1:1 Text & Visual Matching)**
  * Recreate Home, Business Model, Distribution, Software, Supported Devices, and all 7 Solutions pages using exact crawled text and assets.
* **Milestone 5: Lead Piping & Production Deployment**
  * Wire up the CRM widget and lead endpoints, configure Caddy reverse proxy for zero-downtime cutover.
