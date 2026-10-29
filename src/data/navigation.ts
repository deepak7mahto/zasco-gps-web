export interface NavItem {
  label: string;
  href: string;
  description?: string;
  iconName?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  href?: string;
  items: NavItem[];
}

export const SOLUTIONS_NAV: NavItem[] = [
  {
    label: 'School Tracking Management',
    href: '/solutions/school-bus',
    description: 'RFID student tap-in, real-time parent app, camera feed, and overspeed alerts.',
    iconName: 'Bus',
    badge: 'Popular',
  },
  {
    label: 'Employee Management',
    href: '/solutions/employee',
    description: 'Field sales force tracking, geofence check-ins, client visit logs, and SOS alerts.',
    iconName: 'Users',
  },
  {
    label: 'Location Based Analytics',
    href: '/solutions/analytics',
    description: 'Mining, passenger bus, waste management, and supply chain telemetry insights.',
    iconName: 'BarChart3',
  },
  {
    label: 'Route Optimization',
    href: '/solutions/route',
    description: 'Turnaround time reduction, multi-stop deviation alarms, and restricted zone alerts.',
    iconName: 'Route',
  },
  {
    label: 'Temperature Monitoring',
    href: '/solutions/temperature',
    description: 'Cold chain perishable goods monitoring, BLE probes, and instant excursion alerts.',
    iconName: 'Thermometer',
    badge: 'Pharma / Food',
  },
  {
    label: 'Sensor Telemetry',
    href: '/solutions/sensor',
    description: 'AC on/off, cement mixer rotation, PTO engagement, and generator runtime telemetry.',
    iconName: 'Cpu',
  },
  {
    label: 'Fuel Monitoring',
    href: '/solutions/fuel',
    description: 'Capacitive fuel rods, 98% accuracy, real-time drain/theft SMS alerts.',
    iconName: 'Fuel',
    badge: 'High ROI',
  },
];

export const BUSINESS_MODEL_NAV: NavItem[] = [
  {
    label: 'Distribution',
    href: '/distribution',
    description: 'Wholesale hardware pricing, marketing materials, and certified partner tier.',
    iconName: 'Truck',
  },
  {
    label: 'White Label Platform',
    href: '/white-label',
    description: 'Your brand, your custom Android & iOS apps, custom domain, and dedicated server.',
    iconName: 'Layers',
    badge: 'Fast Setup',
  },
  {
    label: 'Zasco Franchising',
    href: '/zasco-franchising',
    description: 'All-inclusive franchise model with showroom specs, CRM module, and renewal revenue.',
    iconName: 'Store',
    badge: 'Turnkey',
  },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Platform & Software',
    links: [
      { label: 'Fleet Tracking Software', href: '/software' },
      { label: 'Supported Devices (650+)', href: '/supported-devices' },
      { label: 'Live E-Commerce Shop', href: 'https://shop.zascogps.com', isExternal: true },
      { label: 'Mobile GPS Tracker App', href: '/software#mobile-apps' },
      { label: 'AIS-140 Certified Hardware', href: '/supported-devices' },
    ],
  },
  {
    title: 'Solutions & Verticals',
    links: [
      { label: 'School Bus Tracking', href: '/solutions/school-bus' },
      { label: 'Employee Force Tracking', href: '/solutions/employee' },
      { label: 'Fuel Thefts & Monitoring', href: '/solutions/fuel' },
      { label: 'Cold Chain Temperature', href: '/solutions/temperature' },
      { label: 'Route & Deviation Alerts', href: '/solutions/route' },
      { label: 'IoT & Telemetry Sensors', href: '/solutions/sensor' },
      { label: 'Location Analytics', href: '/solutions/analytics' },
    ],
  },
  {
    title: 'Business Models',
    links: [
      { label: 'Business Model Overview', href: '/business-model' },
      { label: 'Dealer Distribution', href: '/distribution' },
      { label: 'White Label System', href: '/white-label' },
      { label: 'Zasco Franchise Program', href: '/zasco-franchising' },
      { label: 'Partner Inquiry', href: '/contact' },
    ],
  },
  {
    title: 'Company & Policies',
    links: [
      { label: 'About Zasco GPS', href: '/about-us' },
      { label: 'Contact & Offices', href: '/contact' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Privacy & Policy', href: '/privacy-policy' },
      { label: 'Return & Refund Policy', href: '/refund-policy' },
    ],
  },
];
