export interface SolutionDetail {
  slug: string;
  route: string;
  title: string;
  badge: string;
  subtitle: string;
  heroImage: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: { title: string; desc: string; icon: string }[];
  capabilities: string[];
  advantages: string[];
  industries: { name: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  'school-bus': {
    slug: 'school-bus',
    route: '/solutions/school-bus',
    title: 'School Tracking Management',
    badge: 'Student & Fleet Safety',
    subtitle: 'Comprehensive Student Transport Safety, Live Parent ETA App, and RFID Boarding Telematics',
    heroImage: '/images/vehicle-tracking-solution-banner-300x126.jpg',
    problemStatement: "A child's safety and security is the topmost priority for any parent and school administration. Parents endure constant anxiety during morning pick-ups and afternoon drops, while school transport managers struggle with unverified halts, overspeeding drivers, and hundreds of incoming telephone inquiries inquiring about bus delay status.",
    solutionOverview: "ZASCO GPS provides a complete end-to-end 'Pick and Drop' school tracking ecosystem. Parents receive automated SMS and smartphone push notifications when the school bus approaches their home stop. Integrated RFID tap cards record the exact second and GPS coordinate when a student enters or exits the bus, while speed governors ensure drivers adhere to school zone limits.",
    keyFeatures: [
      {
        title: 'RFID Boarding Attendance',
        desc: 'Instant student tap-in and tap-out notification sent directly to parents’ smartphones.',
        icon: 'UserCheck',
      },
      {
        title: 'Real-Time Live Parent App',
        desc: 'Parents track the moving bus on Google Maps with accurate ETA countdown clocks.',
        icon: 'MapPin',
      },
      {
        title: 'Route Deviation Alarms',
        desc: 'Instant alerts trigger if the driver deviates from the designated school route.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Speed Governor & Halt Auditing',
        desc: 'Detect unauthorized prolonged stops, harsh braking, and overspeeding in school zones.',
        icon: 'Gauge',
      },
      {
        title: 'Built-in CCTV Camera Support',
        desc: 'Stream live in-cabin visuals to verify student safety and driver alertness.',
        icon: 'Video',
      },
      {
        title: 'Admin Broadcast Messaging',
        desc: 'School authorities can send instant emergency broadcast alerts to all parents.',
        icon: 'BellRing',
      },
    ],
    capabilities: [
      'Real-time regular monitoring of buses to prevent delays in arrival time',
      'Reminders and geofence triggers for pick up and drop off stops',
      'RFID swipe attendance records matching student roster with assigned bus',
      'Tracking students and driver cabin behavior using connected video cameras',
      'Emergency SOS button for drivers with instant dispatch to school dispatch center',
      'Control fuel and maintenance expenses by curbing engine idling and speeding',
    ],
    advantages: [
      'Zero manual phone calls to school reception inquiring about bus delays',
      'Complete peace of mind for working parents with real-time bus visibility',
      'Automated trip sheet generation saving hours of administrative manual logging',
      'Strict compliance with government school transport safety guidelines',
    ],
    industries: [
      { name: 'K-12 Private Schools', desc: 'Full fleet routing, parent apps, and multi-branch bus management.' },
      { name: 'Colleges & Universities', desc: 'Inter-campus shuttles, RFID staff tracking, and scheduled transit.' },
      { name: 'Private Child Daycares', desc: 'Hyper-secure micro-van tracking with verified caretaker handoffs.' },
    ],
    faqs: [
      {
        question: 'How do parents access the tracking portal?',
        answer: 'Parents download the free ZASCO GPS Pick & Drop App (iOS & Android) and sign in using their registered mobile phone number. They receive instant live location, arrival estimates, and push notifications.',
      },
      {
        question: 'Does the system require special wiring in school buses?',
        answer: 'Our AIS-140 and standard vehicle trackers install discreetly under the dashboard with quick harness couplings, completely safe and compliant with vehicle electrical warranties.',
      },
    ],
  },

  'employee': {
    slug: 'employee',
    route: '/solutions/employee',
    title: 'Employee Management & Workforce Telematics',
    badge: 'Enterprise Field Force',
    subtitle: 'Real-Time Field Sales Tracking, Geofenced Client Visits, and Automated Dwell-Time Verification',
    heroImage: '/images/EMPLOYEE-MANAGEMENTB-BANNER.jpg',
    problemStatement: 'Large organizations—particularly pharmaceutical, FMCG, banking, and field service companies—deploy massive on-field sales and service teams. Managers often have zero visibility into actual field visits, face inflated travel expense claims, and cannot verify whether client consultations actually occurred.',
    solutionOverview: 'ZASCO GPS Employee Tracking transforms smartphones and company vehicles into intelligent workforce telemetry nodes. Automatically log meeting start and end times via geofences, track actual travel paths to prevent duplicate expense claims, and provide field staff with SOS safety triggers during late-night returns.',
    keyFeatures: [
      {
        title: 'Real-Time Location & Pathing',
        desc: 'Know the exact live location and historical breadcrumb path traversed by each field representative.',
        icon: 'Navigation',
      },
      {
        title: 'Geofenced Client Check-Ins',
        desc: 'Auto-verify when an executive arrives at a hospital, doctor clinic, retail distributor, or ATM site.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Dwell Time & Meeting Duration',
        desc: 'Measure exact time spent inside client premises to accurately evaluate sales performance.',
        icon: 'Clock',
      },
      {
        title: 'Automated Visit Logs & Reports',
        desc: 'Count total client visits per day, week, and month with exportable Excel/PDF audit logs.',
        icon: 'FileSpreadsheet',
      },
      {
        title: 'Expense & Distance Verification',
        desc: 'Eliminate bogus travel bills by cross-checking submitted odometer claims against GPS distance.',
        icon: 'CheckCircle2',
      },
      {
        title: 'Employee SOS & Lone Worker Safety',
        desc: 'Instant panic triggers with location broadcast for staff operating in remote or night shifts.',
        icon: 'LifeBuoy',
      },
    ],
    capabilities: [
      'Continuous real-time tracking of employee movements during working hours',
      'Dynamic geofencing around customer clinics, retail stores, and warehouse facilities',
      'Detailed log of client meetings, start times, departure timestamps, and frequency',
      'Battery-optimized mobile app consuming less than 4% smartphone battery across an 8-hour shift',
      'Privacy controls enabling tracking exclusively during approved shift work schedules',
      'Custom API export into corporate ERP, SAP, Zoho CRM, and payroll software',
    ],
    advantages: [
      'Boost field sales productivity and client call counts by over 30%',
      'Slash fraudulent conveyance and fuel reimbursement claims by up to 40%',
      'Instant verification of emergency service technician attendance',
      'Complete safety monitoring for late-shift and female employees',
    ],
    industries: [
      { name: 'Pharmaceutical Sales & MRs', desc: 'Monitor doctor visits, sample distribution, and medical conferences.' },
      { name: 'FMCG & Retail Distribution', desc: 'Ensure daily beat coverage across kirana stores and modern trade.' },
      { name: 'Field Service Engineers', desc: 'Dispatch nearest technician for elevator, HVAC, and solar maintenance.' },
      { name: 'BPO & Night Staff Transport', desc: 'Safe drop verification for corporate cab fleets.' },
    ],
    faqs: [
      {
        question: 'Does the employee app infringe on personal privacy after work hours?',
        answer: 'Not at all. The Zasco workforce tracking client respects operational hours. Telemetry automatically turns off when the employee marks shift end, protecting employee personal privacy.',
      },
      {
        question: 'Can managers view all field reps on a single dashboard?',
        answer: 'Yes. The web dispatch platform provides a live bird’s-eye map displaying all field reps categorized by territory, division, and active/idle status.',
      },
    ],
  },

  'analytics': {
    slug: 'analytics',
    route: '/solutions/analytics',
    title: 'Location Based Analytics',
    badge: 'Big Data Fleet Intelligence',
    subtitle: 'Fleet Utilization Metrics, Idling Cost Heatmaps, Dwell-Time Analysis, and Operational KPIs',
    heroImage: '/images/ON-TOP-PAGE.jpg',
    problemStatement: 'Modern fleet operators generate millions of telemetry data points every day, yet remain blind to deep operational bottlenecks. Unproductive idling drains thousands of liters of fuel, vehicles sit unutilized in yards, and turnaround times at loading docks degrade customer satisfaction.',
    solutionOverview: 'ZASCO Location-Based Analytics translates raw GPS coordinates into actionable executive intelligence. Through high-density heatmaps, trip cycle analytics, weighment bypass monitors, and automated KPI scorecards, enterprise operators identify inefficiencies and maximize fleet asset yield.',
    keyFeatures: [
      {
        title: 'Fleet Utilization Heatmaps',
        desc: 'Identify geographic dead zones, congestion corridors, and unutilized vehicle clusters in real time.',
        icon: 'Flame',
      },
      {
        title: 'Trip Cycle & Turnaround Analytics',
        desc: 'Analyze loading, transit, weighbridge, and unloading durations to eliminate bottleneck delays.',
        icon: 'Hourglass',
      },
      {
        title: 'Excessive Idling Cost Audit',
        desc: 'Calculate exact liters of fuel burnt while vehicles run engines stationary with AC on.',
        icon: 'Coins',
      },
      {
        title: 'Weighment & Bypass Detection',
        desc: 'Flag default vehicles that bypass mandatory weighment scales or miss assigned delivery dumps.',
        icon: 'Scale',
      },
      {
        title: 'Driver Safety & Eco-Scorecard',
        desc: 'Rank drivers by harsh braking, sharp cornering, overspeed instances, and fuel economy.',
        icon: 'Award',
      },
      {
        title: 'Executive PDF & Excel Reporting',
        desc: 'Automated daily, weekly, and monthly PDF digests delivered directly to fleet executives.',
        icon: 'FileText',
      },
    ],
    capabilities: [
      'Comprehensive cycle tracking: Origin → Waypoints → Weighbridge → Destination',
      'Idling duration thresholds triggering immediate supervisor mobile push alarms',
      'Historical 90-day trip replay with speed curves and elevation telemetry',
      'Load haul frequency auditing tracking total trips completed per vehicle shift',
      'Fleet readiness indexing identifying vehicles pending service or insurance renewal',
    ],
    advantages: [
      'Increase overall fleet vehicle utilization by up to 25%',
      'Curb unproductive engine idling and reduce company fuel waste',
      'Eliminate driver billing disputes with indisputable timestamp proof of arrival',
      'Enhance turnaround speed across warehouses and intermodal freight terminals',
    ],
    industries: [
      { name: 'Mining & Heavy Haulage', desc: 'Monitor dumper trucks between loading quarries, weighment pits, and crushers.' },
      { name: 'Passenger Bus Networks', desc: 'KPI tracking on scheduled route delays, headway times, and passenger safety.' },
      { name: 'Municipal Waste Management', desc: 'Track garbage compactor bin coverage, landfill dump cycles, and route hygiene.' },
      { name: 'Intermodal Supply Chains', desc: 'Port-to-warehouse container tracking with automated gate-in/gate-out logs.' },
    ],
    faqs: [
      {
        question: 'Can analytics reports be scheduled to send automatically via email?',
        answer: 'Yes! You can configure automated daily morning summaries and weekly operational audits sent to logistics directors and fleet supervisors in PDF and Excel formats.',
      },
    ],
  },

  'route': {
    slug: 'route',
    route: '/solutions/route',
    title: 'Route Optimization & Journey Management',
    badge: 'Smart Logistics Routing',
    subtitle: 'Multi-Stop Delivery Routing, Real-Time Deviation Alarms, and Restricted Corridor Enforcement',
    heroImage: '/images/ROAD-ROUTE-1.jpg',
    problemStatement: 'Deliveries arriving late, drivers taking unauthorized personal detours, entry into restricted city zones during no-entry hours, and lack of real-time progress visibility create customer friction and escalate operational delivery expenses.',
    solutionOverview: 'The ZASCO GPS Route Management Module provides an intelligent single-pane dispatcher command center. Create predefined corridors, optimize multiple delivery waypoints, and receive instant SMS/email alarms the very moment a driver strays from the permitted route or enters prohibited roads.',
    keyFeatures: [
      {
        title: 'Multi-Stop Route Dispatcher',
        desc: 'Order delivery drop-offs sequentially to minimize mileage, transit time, and toll expenditures.',
        icon: 'GitFork',
      },
      {
        title: 'Real-Time Route Progress & ETA',
        desc: 'Live tracking of origin, destination, current speed, distance remaining, and estimated arrival.',
        icon: 'Timer',
      },
      {
        title: 'Route Deviation Alarms',
        desc: 'Immediate notifications whenever a transport driver veers off the assigned delivery corridor.',
        icon: 'AlertOctagon',
      },
      {
        title: 'Restricted Zone Enforcement',
        desc: 'Block heavy commercial vehicles from entering municipal no-entry zones during prohibited hours.',
        icon: 'Ban',
      },
      {
        title: 'Proof of Delivery Geofencing',
        desc: 'Auto-record arrival timestamp and dwell duration at customer premises for zero billing dispute.',
        icon: 'CheckSquare',
      },
      {
        title: 'Driver Turn-by-Turn Mobile Nav',
        desc: 'Dedicated driver mobile application providing voice navigation along approved fleet routes.',
        icon: 'Compass',
      },
    ],
    capabilities: [
      'Add, edit, clone, and archive standard operational transport routes with flexible tolerances',
      'Set corridor boundary buffers (e.g. 100 meters) triggering alerts on perimeter breaches',
      'Comprehensive route deviation audit reports highlighting exact deviation coordinates and duration',
      'Restricted corridor blacklisting to prevent hefty municipal traffic police fines',
      'Integration with dispatch systems for automated consignment assignment',
    ],
    advantages: [
      'Slash total delivery distance travelled by 15-20% through intelligent sequencing',
      'Eliminate driver moonlighting and unauthorized vehicle personal usage',
      'Ensure on-time customer deliveries with real-time ETA sharing links',
      'Prevent costly penalties from entering city limits during no-entry truck time slots',
    ],
    industries: [
      { name: 'Last-Mile E-Commerce Courier', desc: 'High-density multi-stop urban delivery scheduling.' },
      { name: 'Cash-in-Transit (CIT) Armored Vans', desc: 'Ultra-strict corridor compliance with instant bank alarms.' },
      { name: 'Petroleum & Gas Tankers', desc: 'Hazardous materials route enforcement avoiding residential clusters.' },
      { name: 'Industrial Equipment Haulers', desc: 'Oversize cargo routing avoiding low-clearance bridges and flyovers.' },
    ],
    faqs: [
      {
        question: 'Can we share a live tracking link with end customers without giving them system login?',
        answer: 'Yes! ZASCO Route allows generating temporary, expirable public tracking links that can be sent to consignees via SMS or WhatsApp, showing live vehicle progress without exposing login credentials.',
      },
    ],
  },

  'temperature': {
    slug: 'temperature',
    route: '/solutions/temperature',
    title: 'Temperature & Cold Chain Telematics',
    badge: 'Cold Chain Assurance',
    subtitle: 'Reefer Monitoring, Wireless BLE Temperature Probes, Defrost Cycle Tracking, and Excursion Alarms',
    heroImage: '/images/temperature-banner.jpg',
    problemStatement: 'Transporting temperature-sensitive perishables, dairy, frozen foods, and vaccines requires continuous thermal precision. A faulty reefer compressor, improper defrost cycle, or unauthorized opening of freezer doors can spoil entire container loads worth millions within hours.',
    solutionOverview: 'ZASCO Temperature Telematics delivers end-to-end refrigerated transport assurance. Using rugged IP68 digital temperature sensors and wireless Bluetooth LE thermal probes, our system continuously samples chamber temperatures, monitors reefer battery voltage, and triggers instant SMS alarms the second temperatures cross safe thresholds.',
    keyFeatures: [
      {
        title: 'Precision Digital Thermal Sensors',
        desc: 'Calibrated digital probes with ±0.3°C accuracy covering ranges from deep freeze (-40°C) to +85°C.',
        icon: 'ThermometerSnowflake',
      },
      {
        title: 'Instant Excursion Alerts',
        desc: 'Immediate SMS, email, and siren alerts when cabin temperatures rise or fall outside set limits.',
        icon: 'Flame',
      },
      {
        title: 'Multi-Zone Chamber Monitoring',
        desc: 'Monitor multi-temperature compartmentalized reefers (e.g. frozen ice cream and chilled dairy simultaneously).',
        icon: 'Split',
      },
      {
        title: 'Door Open/Close Sensor Sync',
        desc: 'Correlate thermal spikes with door open events to detect unnecessary cold-air loss and theft.',
        icon: 'DoorOpen',
      },
      {
        title: 'Continuous Offline Data Logging',
        desc: 'Internal memory records thermal readings during cellular dead zones and synchronizes on reconnect.',
        icon: 'HardDrive',
      },
      {
        title: 'Pharma & HACCP Compliance Reports',
        desc: 'Audit-ready temperature graph certificates required by food safety and pharmaceutical inspectors.',
        icon: 'FileCheck',
      },
    ],
    capabilities: [
      'Real-time temperature sampling transmitted every 30 seconds to the cloud',
      'Defrost cycle recognition distinguishing deliberate refrigeration cycles from equipment failures',
      'Reefer compressor run-hour metering for preventative maintenance scheduling',
      'Tamper-evident probe cabling and anti-disconnect telemetry alarms',
      'Exportable temperature-over-time graphs and CSV compliance records',
    ],
    advantages: [
      'Eliminate 100% of perishable cargo spoilage claims due to unnoticed cooling failures',
      'Provide indisputable HACCP and FDA thermal audit trails to consignees at offloading',
      'Prevent drivers from turning off cooling compressors at night to siphon diesel',
      'Protect high-value pharmaceutical biotics, plasma, and vaccines in transit',
    ],
    industries: [
      { name: 'Pharmaceuticals & Biologics', desc: 'Strict +2°C to +8°C cold chain compliance for life-saving therapeutics.' },
      { name: 'Dairy & Ice Cream Logistics', desc: 'Sub-zero frozen transport ensuring zero product melting or texture damage.' },
      { name: 'Fresh Fruits, Vegetables & Floriculture', desc: 'Controlled atmosphere cold storage transport from farms to retail.' },
      { name: 'Meat & Seafood Export Reefers', desc: 'Deep-freeze container telematics for domestic and maritime export.' },
    ],
    faqs: [
      {
        question: 'Are the sensors wireless or wired?',
        answer: 'ZASCO supports both. We provide hardwired 1-Wire digital probes for industrial trucks and long-battery-life (3-year) wireless BLE sensors for easy container mounting with zero drilling.',
      },
    ],
  },

  'sensor': {
    slug: 'sensor',
    route: '/solutions/sensor',
    title: 'Sensor Telemetry & Machine Monitoring',
    badge: 'Industrial IoT Telematics',
    subtitle: 'AC Detection, Cement Mixer Rotation, Hydraulic PTO Engagement, and Heavy Machinery Telematics',
    heroImage: '/images/sensor-banner-300x126.jpg',
    problemStatement: 'Heavy commercial vehicles and specialized off-highway machinery are subjected to continuous unauthorized misuse: commercial cab drivers running air conditioning for hours while sleeping on duty, cement mixer operators reversing drum rotation to siphon concrete, or crane operators running unauthorized side jobs.',
    solutionOverview: 'The ZASCO Sensor Telemetry suite interfaces directly with vehicle analog, digital, and CAN bus inputs. Receive real-time telemetry on air conditioning status, engine RPM, PTO engagement, hydraulic lift state, seatbelt clicks, and container door security with instantaneous alerts on abnormal operation.',
    keyFeatures: [
      {
        title: 'AC On/Off Sensor Detection',
        desc: 'Detect unauthorized vehicle cabin air conditioning usage when vehicle is parked or idling.',
        icon: 'Wind',
      },
      {
        title: 'Cement Mixer Drum Rotation',
        desc: 'Monitor rotation direction (clockwise for mixing, counter-clockwise for pouring) to stop concrete theft.',
        icon: 'RotateCw',
      },
      {
        title: 'Hydraulic PTO Engagement',
        desc: 'Verify exact operation hours and locations for tipper beds, crane booms, and tow winches.',
        icon: 'Wrench',
      },
      {
        title: 'Container Door Sensor Security',
        desc: 'Magnetic reed switches alert instantly if cargo doors are opened outside designated warehouses.',
        icon: 'Lock',
      },
      {
        title: 'Seatbelt & Safety Telemetry',
        desc: 'Enforce driver safety compliance by alerting supervisors when vehicle moves without seatbelts.',
        icon: 'Shield',
      },
      {
        title: 'Heavy Equipment Working Hours',
        desc: 'Accurately bill customers based on true engine run hours on JCBs, excavators, and generators.',
        icon: 'Cpu',
      },
    ],
    capabilities: [
      'Digital inputs supporting positive and negative trigger sensors (door, ignition, SOS, AC)',
      'Analog inputs (0-10V / 0-5V) for pressure transducers, load cells, and angle sensors',
      '1-Wire bus supporting multiple cascaded temperature and Dallas iButton driver ID keys',
      'RS-232 and RS-485 serial communication for integration with advanced onboard computers',
      'Engine hour collation calculating productive working hours vs unproductive idle hours',
    ],
    advantages: [
      'Stop unauthorized AC usage in rental fleets, slashing auxiliary fuel burn by 20%',
      'Eliminate illegal concrete dumping and adulteration in ready-mix transport',
      'Accurate machine rental billing for heavy earthmoving and construction machinery',
      'Bolster cargo protection against transit theft and unauthorized container tampering',
    ],
    industries: [
      { name: 'Ready-Mix Concrete (RMC)', desc: 'Drum rotation sensors monitoring transit mixing vs site unloading.' },
      { name: 'Car Rentals & Executive Cabs', desc: 'AC usage detection and unauthorized night passenger transport.' },
      { name: 'Construction & Earthmoving (JCB/Poclain)', desc: 'Engine run-hour metering, hydraulic pump pressure, and site security.' },
      { name: 'Municipal Dump Trucks & Compactors', desc: 'PTO tipper sensor verifying garbage bin emptying cycles.' },
    ],
    faqs: [
      {
        question: 'Can sensor status be tracked in real-time on mobile apps?',
        answer: 'Yes! The Zasco mobile application displays the live state of all connected sensors (AC status, drum direction, door state, PTO) right on the vehicle dashboard.',
      },
    ],
  },

  'fuel': {
    slug: 'fuel',
    route: '/solutions/fuel',
    title: 'Fuel Level Monitoring & Anti-Theft Telematics',
    badge: 'Flagship ROI Solution',
    subtitle: 'High-Precision Capacitive Fuel Sensors (Model ZT-22), Real-Time Drain Alarms, and Fuel In/Out Auditing',
    heroImage: '/images/real-time-fuel-monitoring.png',
    problemStatement: 'In commercial transport operations, fuel expenses account for 32% to 45% of total operating overhead. Unmonitored trucks fall victim to rampant en-route diesel siphoning, fuel receipt fraud, and driver collusion at roadside dhabas—costing fleet operators tens of thousands of rupees per truck each month.',
    solutionOverview: 'The ZASCO Fuel Tracking System (Model ZT-22) is India’s premier commercial fuel telematics solution. Utilizing industrial-grade capacitive fuel level rods calibrated to 98% accuracy, the system logs fuel levels in real time. The moment an unexpected diesel drop occurs, an immediate SMS and push notification alert sounds, catching thieves in the act.',
    keyFeatures: [
      {
        title: 'Model ZT-22 Capacitive Sensor',
        desc: 'Advanced digital capacitive sensor probe cut to custom tank depth with zero moving parts.',
        icon: 'Fuel',
      },
      {
        title: 'Instant Theft & Drain Alarms',
        desc: 'High-sensitivity algorithm detects rapid fuel level drop and sends SMS alert with exact location within 10 seconds.',
        icon: 'Siren',
      },
      {
        title: 'Refueling Verification & Auditing',
        desc: 'Record exact refuel liters, time, and petrol pump location to cross-examine driver fuel vouchers.',
        icon: 'CheckCheck',
      },
      {
        title: '98% Multi-Level Calibration',
        desc: 'Tank-specific calibration curve compensates for tank geometry, vehicle slope, and fuel slosh.',
        icon: 'Sliders',
      },
      {
        title: 'Mileage & Fuel Efficiency Analytics',
        desc: 'Correlate kilometers traversed with fuel consumed to accurately calculate km/liter mileage performance.',
        icon: 'TrendingUp',
      },
      {
        title: 'Dual Tank Interfacing',
        desc: 'Support primary and secondary saddle tanks on heavy multi-axle freight haulers with unified reporting.',
        icon: 'Layers',
      },
    ],
    capabilities: [
      'Digital RS-485 / Analog output offering high signal noise immunity and millimeter resolution',
      'Dynamic fuel slosh damping filters preventing false theft alarms while driving on uneven roads',
      'Automatic refueling receipts logged with volume, timestamp, and nearby petrol pump identification',
      'Driver efficiency ranking showing which drivers waste fuel through harsh acceleration and speeding',
      'Support for diesel tanks up to 1,500 liters across trucks, buses, generators, and storage tanks',
    ],
    advantages: [
      'Achieve 10% to 25% direct reduction in monthly fleet fuel expenditures',
      'Pay for the entire hardware and sensor installation within 60 to 90 days',
      'Eliminate manipulated driver paper fuel receipts and pump collusion',
      'Deter drivers from leaving engines idling all night with AC running',
    ],
    industries: [
      { name: 'Long-Haul Multi-Axle Trucks', desc: 'Over-the-road freight haulers vulnerable to midnight fuel theft on highways.' },
      { name: 'Mining Dumpers & Quarry Haulers', desc: 'Heavy off-highway haulers burning hundreds of liters of diesel per shift.' },
      { name: 'Backup Diesel Generators (DG Sets)', desc: 'Commercial real estate and hospital generators monitoring fuel levels and refills.' },
      { name: 'Interstate Passenger Luxury Buses', desc: 'Cross-state Volvo and Scania sleeper coaches optimizing route fuel burn.' },
    ],
    faqs: [
      {
        question: 'How accurate is the Zasco ZT-22 Fuel Sensor?',
        answer: 'Our digital capacitive fuel rods achieve up to 98% laboratory accuracy when calibrated using our multi-step volumetric filling procedure.',
      },
      {
        question: 'Will fuel sloshing on bumpy roads cause false theft alarms?',
        answer: 'No. The ZT-22 uses advanced mathematical smoothing algorithms and hardware baffles that filter out rapid road sloshing vibrations, triggering alarms only upon genuine fuel extraction.',
      },
      {
        question: 'How fast do I receive an alert if someone siphons diesel?',
        answer: 'Within 10 to 15 seconds! The unit detects the abnormal rapid drop, captures GPS coordinates, and immediately fires an SMS alert and high-priority app alarm to the fleet manager.',
      },
    ],
  },
};
