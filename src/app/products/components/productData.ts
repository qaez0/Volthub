export type ProductCategory =
  | "all"
  | "ev-charging"
  | "solar-street"
  | "smart-home"
  | "cabinet"
  | "container";

export type ProductVariation = {
  name: string;
  value: string;
  description?: string;
  price?: string; // Optional price for this variation
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  tag?: string;
  image: string;
  images?: string[]; // Additional images for gallery
  price?: string; // Product price
  description?: string;
  variations?: ProductVariation[];
  specifications?: { label: string; value: string }[];
  features?: string[];
};

export const categories: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "ev-charging", label: "EV Charging Station" },
  { id: "solar-street", label: "Solar Street Lights" },
  { id: "smart-home", label: "Smart Home IPS" },
  { id: "cabinet", label: "Cabinet Type Power Supply" },
  { id: "container", label: "Container Type Power Supply" },
];

export const categoryBanner: Record<
  ProductCategory,
  { title: string; description: string; image: string; video?: string }
> = {
  all: {
    title: "Energy Storage & Power Products",
    description:
      "From EV charging to smart home backup and utility-scale storage, VoltHub delivers trusted, safe and efficient power for every scenario.",
    image: "/HomeBanner/banner3.jpg",
  },
  "ev-charging": {
    title: "EV Charging Station Solutions",
    description:
      "Fast, reliable EV charging systems for homes, fleets and public sites, with smart monitoring and billing.",
    image: "/Product/evpb.jpg",
  },
  "solar-street": {
    title: "Solar Street Lighting Systems",
    description:
      "High‑efficiency solar street lights with intelligent control, built for streets, campuses and industrial parks.",
    image: "/aboutimages/solarstreetlight.jpg",
  },
  "smart-home": {
    title: "Smart Home IPS Backup",
    description:
      "Compact indoor power systems that keep your essential loads running during grid outages.",
    image: "/HomeBanner/homebatt.png",
    video: "/Product/SMVB.mp4",
  },
  cabinet: {
    title: "Cabinet Type Power Supply",
    description:
      "Modular cabinet energy storage and power supply systems for commercial and industrial applications.",
    image: "/HomeBanner/commercial.png",
    video: "/Product/CNvB.mp4",
  },
  container: {
    title: "Container Type Power Supply",
    description:
      "Utility‑scale containerized BESS and hybrid power systems ready for rapid deployment.",
    image: "/HomeBanner/container.png",
    video: "/Product/CBMB.mp4",
  },
};

// Based on Absen Energy products layout, adapted to VoltHub
// Reference: `https://www.absenenergy.com/en/product/`
export const products: Product[] = [
  // EV Charging Station products
  {
    id: "ev-charging-53",
    name: "DC EV Charger Dual Gun",
    subtitle: "Advanced EV charging solution for commercial and public use",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/53.png",
    images: ["/Product/EV/53.png", "/Product/EV/yellow/110.png", "/Product/EV/yellow/197.jpg"],
    price: "P573,750.00",
    description: "DPEV-160K - 160 kW Dual-Gun DC high-power fast charger. Ideal for premium charging hubs, expressway service areas, and sites serving EVs that support higher charging power. Faster sessions, future-proof for newer EVs.",
  },
  {
    id: "ev-charging-59",
    name: "AC EV Charger 7kW",
    subtitle: "High-performance EV charging system",
    category: "ev-charging",
    tag: " Single-gun AC Charging Pile",
    image: "/Product/EV/59.png",
    images: [
      "/Product/EV/59.png",
      "/Product/EV/small/82.png",
      "/Product/EV/small/173.jpg",
      "/Product/EV/small/192.jpg",
    ],
    price: "₱18,062.50",
  },
  {
    id: "ev-charging-64",
    name: "DC EV Charger Single Gun",
    subtitle: "Fast and reliable EV charging solution",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/64.png",
    images: [
      "/Product/EV/64.png",
      "/Product/EV/red/69.jpg",
      "/Product/EV/red/111.png",
    ],
  },
  {
    id: "ev-charging-89",
    name: "DC EV Charger Dual Gun",
    subtitle: "Premium EV charging station for fleets and public sites",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/89.png",
    images: [
      "/Product/EV/89.png",
      "/Product/EV/green/58.png",
      "/Product/EV/green/106.jpg",
      "/Product/EV/green/161.jpg",
      "/Product/EV/green/162.jpg",
      "/Product/EV/green/163.jpg",
    ],
    price: "₱1,030,625.00",
    description: "DPEV-400K - 400 kW Dual-Gun DC ultra-fast charger. For vehicles that can accept >200 kW, allows very short charging stops. Strong marketing value with ultra-fast charging up to 400 kW. Ideal for flagship highway stations and bus/truck depots needing very high power.",
  },
  // Solar Street Lights products
//   {
//     id: "solar-street-f1l",
//     name: "F1L Solar Street Light",
//     subtitle: "High-efficiency solar street lighting system",
//     category: "solar-street",
//     tag: "Integrated Light",
//     image: "/Product/StreetLamp/F1L.png",
//   },
  {
    id: "solar-street-f2l",
    name: "Integrated Lamp F2 Series",
    subtitle: "The Light of Energy, Crefted with Ingenuity",
    category: "solar-street",
    tag: "Integrated Light",
    image: "/Product/StreetLamp/F2L.png",
    price: "₱45,164.50",
    images: [
      "/Product/StreetLamp/f2/disc1.png",
      "/Product/StreetLamp/f2/disc2.png",
      "/Product/StreetLamp/f2/disc3.png",
      "/Product/StreetLamp/f2/disc4.png",
      "/Product/StreetLamp/f2/disc5.png",
      "/Product/StreetLamp/f2/disc6.png",
    ],
  },
  {
    id: "solar-street-rklv02",
    name: "Road King-LV02",
    subtitle: "Compact solar street lighting system",
    category: "solar-street",
    tag: "Split Street Light",
    image: "/Product/StreetLamp/RKlv02.png",
    price: "₱17,346.00",
    images: [
      "/Product/StreetLamp/lvq2/disc1.png",
      "/Product/StreetLamp/lvq2/disc2.png",
      "/Product/StreetLamp/lvq2/disc3.png",
      "/Product/StreetLamp/lvq2/disc4.png",
      "/Product/StreetLamp/lvq2/disc5.png",
      "/Product/StreetLamp/lvq2/disc6.png",
      "/Product/StreetLamp/lvq2/disc7.png",
    ],
  },
  {
    id: "solar-street-rks",
    name: "Solar Road King Series LVXC2",
    subtitle: "Premium solar street lighting solution",
    category: "solar-street",
    tag: "All in Two Light",
    image: "/Product/StreetLamp/RKS.png",
    price: "₱17,036.25",
    images: [
      "/Product/StreetLamp/lvxc2/disc1.png",
      "/Product/StreetLamp/lvxc2/disc2.png",
      "/Product/StreetLamp/lvxc2/disc3.png",
      "/Product/StreetLamp/lvxc2/disc4.png",
      "/Product/StreetLamp/lvxc2/disc5.png",
      "/Product/StreetLamp/lvxc2/disc6.png",
      "/Product/StreetLamp/lvxc2/disc7.png",
      "/Product/StreetLamp/lvxc2/disc8.png",
    ],
  },
  {
    id: "solar-street-lvxc",
    name: "Solar Road King Series LVXC3",
    subtitle: "High-performance solar street lighting system",
    category: "solar-street",
    tag: "All in Two Light",
    image: "/Product/StreetLamp/LVXC.png",
    price: "₱17,036.25",
    images: [
      "/Product/StreetLamp/lvxc3/disc1.png",
      "/Product/StreetLamp/lvxc3/disc2.png",
      "/Product/StreetLamp/lvxc3/disc3.png",
      "/Product/StreetLamp/lvxc3/disc4.png",
      "/Product/StreetLamp/lvxc3/disc5.png",
      "/Product/StreetLamp/lvxc3/disc6.png",
      "/Product/StreetLamp/lvxc3/disc7.png",
      "/Product/StreetLamp/lvxc3/disc8.png",
    ],
  },
  // Smart Home IPS products
  {
    id: "smart-home-smp2",
    name: "Smart Home IPS 5kWh",
    subtitle: "Residential Smart Home Power System",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP2.png",
  },
  {
    id: "smart-home-smp3",
    name: "Smart Home IPS 10kWh",
    subtitle: "Advanced Smart Home Power System",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP3.png",
  },
  {
    id: "smart-home-smp4",
    name: "Smart Home IPS 15kWh",
    subtitle: "Compact Smart Home Power Solution",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP4.png",
  },
  {
    id: "smart-home-smp5",
    name: "Smart Home IPS 20kWh",
    subtitle: "Premium Smart Home Power System",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP5.png",
  },
  {
    id: "smart-home-smp6",
    name: "Smart Home IPS 25kWh",
    subtitle: "High-Capacity Smart Home Power System",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP6.png",
  },
  {
    id: "smart-home-smp7",
    name: "Smart Home IPS 30kWh",
    subtitle: "Enterprise Smart Home Power Solution",
    category: "smart-home",
    tag: "Mobile Energy Storage Power",
    image: "/Product/SmartHome/SMP7.png",
  },
  // Cabinet Type Power Supply products
  {
    id: "cabinet-14",
    name: "Cabinet Type Power Supply 40kWh",
    subtitle: "Modular cabinet energy storage and power supply system",
    category: "cabinet",
    tag: "Off-Grid Power Generation System",
    image: "/Product/cabinet/14.png",
  },
  {
    id: "cabinet-15",
    name: "Cabinet Type Power Supply 233kWh",
    subtitle: "Advanced cabinet energy storage solution",
    category: "cabinet",
    tag: "Off-Grid Power Generation System",
    image: "/Product/cabinet/15.png",
  },
  {
    id: "cabinet-16",
    name: "Cabinet Type Power Supply 522kWh",
    subtitle: "High-performance cabinet power supply system",
    category: "cabinet",
    tag: "Off-Grid Power Generation System",
    image: "/Product/cabinet/16.png",
  },
  {
    id: "cabinet-item4",
    name: "Cabinet Type Power Supply 783kWh",
    subtitle: "Premium cabinet energy storage and power supply system",
    category: "cabinet",
    tag: "Off-Grid Power Generation System",
    image: "/Product/cabinet/item4.png",
  },
  // Container Type Power Supply products
  {
    id: "container-con1",
    name: "Container Type Power Supply",
    subtitle: "Utility-scale containerized BESS and hybrid power system",
    category: "container",
    tag: "Off-Grid Power Generation System",
    image: "/Product/containertype/con1.png",
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// Extended product details (can be expanded with more details)
export const productDetails: Record<string, {
  description: string;
  variations: ProductVariation[];
  specifications: { label: string; value: string }[];
  features: string[];
}> = {
  "ev-charging-53": {
    description: "DPEV-160K - 160 kW Dual-Gun DC high-power fast charger. Advanced DC fast charging station with dual-gun capability, designed for commercial and public use. Features smart monitoring, payment integration, and remote management capabilities. Ideal for premium charging hubs, expressway service areas, and sites serving EVs that support higher charging power. Faster sessions, future-proof for newer EVs.",
    variations: [
      { name: "Model", value: "DPEV-160K", description: "160 kW Dual-Gun DC Charger" },
      { name: "Type", value: "High-power fast charger" },
      { name: "Power Output", value: "50kW / 120kW / 150kW / 160kW" },
      { name: "Connector Type", value: "CCS, CHAdeMO" },
      { name: "Gun Type", value: "Dual-gun DC Charging Pile" },
      { name: "Use Cases", value: "Premium charging hubs, Expressway service areas, Sites serving EVs that support higher charging power" },
    ],
    specifications: [
      { label: "Model Code", value: "DPEV-160K" },
      { label: "Rated Power", value: "50-160kW" },
      { label: "Maximum Power", value: "160kW" },
      { label: "Input Voltage", value: "380V AC" },
      { label: "Output Voltage", value: "200-750V DC" },
      { label: "Efficiency", value: "≥95%" },
      { label: "Protection Level", value: "IP54" },
      { label: "Warranty", value: "3 Years" },
    ],
    features: [
      "Dual-gun simultaneous charging",
      "High-power fast charging (up to 160kW)",
      "Future-proof for newer EVs",
      "Faster charging sessions",
      "OCPP 2.0 compatible",
      "RFID and mobile app payment",
      "Remote monitoring and diagnostics",
      "Load balancing technology",
      "Weather-resistant design",
      "Ideal for premium charging hubs and expressway service areas",
    ],
  },
  "ev-charging-59": {
    description:
      "Home smart AC charging station - The household intelligent AC charging station is a core device designed in response to the popularization of new energy vehicles, to meet the daily charging needs of individual users. It can provide a safe, convenient and economical charging experience at home. Through intelligent technology, it realizes the intelligent connection among people, vehicles and charging stations, making charging an integral part of daily life. DPEV-7K – 7 kW Single-Gun AC \"slow\" charger designed as a reliable, everyday AC charging solution. Ideal for locations where vehicles remain parked for longer periods, such as residential, office and hotel parking. Offers dependable performance with low installation cost, making it an excellent choice as a basic amenity charger.",
    variations: [
      { name: "Model", value: "DPEV-7A / DPEV-11A / DPEV-14A / DPEV-21A" },
      { name: "Power Output", value: "7kW / 11kW / 14kW / 21kW" },
      { name: "Connector Type", value: "Type 2 (IEC 62196) - GBT Standard" },
      { name: "Gun Type", value: "Single-gun AC Charging Pile" },
      { name: "Gun Line Length", value: "5m (standard configuration)" },
      { name: "Type", value: "AC \"slow\" charger" },
      {
        name: "Use Cases",
        value:
          "Apartment parking spaces, Enterprise parking spaces, Private parking spaces; Residential, office, hotel parking; locations where cars stay parked for many hours",
      },
      {
        name: "Selling Point",
        value:
          "Low installation cost, suitable as a \"basic amenity\" charger for long-stay parking. Multiple protections, easy to use, intelligent and convenient with 4G connectivity",
      },
    ],
    specifications: [
      { label: "Equipment Dimensions", value: "368×254×100mm (excluding stand column)" },
      { label: "Gun Line Standard", value: "GBT" },
      { label: "Gun Line Length", value: "5m (standard)" },
      { label: "Rated Power", value: "7kW (DPEV-7A) / 11kW (DPEV-11A) / 14kW (DPEV-14A) / 21kW (DPEV-21A)" },
      { label: "Input Voltage", value: "220V±20% (7A/14A) / 380V±20% (11A/21A)" },
      { label: "Input Current", value: "Single-phase 32A (7A) / Three-phase 16A (11A) / Single-phase 32A×2 (14A) / Three-phase 32A (21A)" },
      { label: "Input Frequency", value: "45~55Hz" },
      { label: "Output Voltage", value: "220V±20% (7A/14A) / 380V±20% (11A/21A)" },
      { label: "Output Current", value: "32A (7A) / 16A (11A) / 32A×2 (14A) / 32A (21A)" },
      { label: "Display Mode", value: "4.3-inch touch screen" },
      { label: "Charging Mode", value: "RFID card swiping, password charging, mobile phone scanning code (optional)" },
      { label: "Installation Mode", value: "Wall-mounted, floor-standing" },
      { label: "Networking Mode", value: "4G" },
      { label: "Maximum Efficiency", value: "≥95%" },
      { label: "Power Factor", value: "≥99%" },
      { label: "Operating Temperature", value: "-25~+50°C" },
      { label: "Storage Temperature", value: "-40~+70°C" },
      { label: "Relative Humidity", value: "≤95%" },
      { label: "Atmospheric Pressure", value: "70~106kPa" },
      { label: "Altitude", value: "≤2000m" },
      { label: "Protection Level", value: "IP55 (dustproof and waterproof)" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "Multiple protections: Electrical protections (overvoltage, undervoltage, overtemperature, short circuit), complying with national and industry safety standards",
      "High-strength flame-retardant material casing with IP55 protection level",
      "Wall-mounted installation, compact structure, saves space",
      "National standard AC charging interface, compatible with mainstream new energy vehicle brands",
      "4G network connection with various start-up methods (card swiping, code scanning)",
      "Color touch screen display with user-friendly indicator lights",
      "Makes full use of off-peak electricity at night to reduce vehicle operating costs",
      "Remote control and intelligent management",
      "Comprehensive safety protection for personnel, vehicles, and power grid",
      "Suitable for apartment, enterprise, and private parking spaces",
    ],
  },
  "ev-charging-64": {
    description:
      "DC EV Charger Single Gun fast-charging solution designed for commercial sites, fleet depots and urban charging stations. Delivers reliable DC power through a single connector, ideal for locations that need dependable fast charging without the complexity of multi-gun systems.",
    variations: [
      {
        name: "Type",
        value: "Single-gun DC fast charger",
      },
      {
        name: "Power Output",
        value: "Up to 120kW (configurable by project)",
      },
      {
        name: "Connector Type",
        value: "CCS (optional CHAdeMO depending on configuration)",
      },
      {
        name: "Use Cases",
        value:
          "Commercial parking, fleet depots, workplace charging, urban DC fast-charging sites",
      },
      {
        name: "Selling Point",
        value:
          "Fast and reliable DC charging in a compact footprint — ideal where one dedicated high‑power outlet per parking bay is preferred.",
      },
    ],
    specifications: [
      { label: "Charger Type", value: "Single-gun DC fast charger" },
      { label: "Configuration", value: "Project‑dependent up to 120kW" },
      { label: "Input Voltage", value: "380V AC (three‑phase)" },
      { label: "Output Voltage", value: "200–750V DC (typical range)" },
      { label: "Protection Level", value: "IP54 or higher (outdoor‑ready)" },
      { label: "Installation", value: "Floor‑mounted cabinet" },
      { label: "Warranty", value: "3 Years (extendable)" },
    ],
    features: [
      "Fast DC charging with single-gun simplicity",
      "Ideal for dedicated fleet or assigned parking bays",
      "Compact cabinet design for tight urban sites",
      "Remote monitoring and diagnostics (OCPP‑ready)",
      "Multiple protection layers for safe operation",
      "Low noise and high‑reliability power modules",
    ],
  },
  "solar-street-f2l": {
    description: "Integrated solar street light featuring all-in-one design with high-efficiency monocrystalline solar panel, intelligent LED lighting, and advanced battery management system. Available in four models (F2-050, F2-080, F2-100, F2-120) with varying power outputs and pole heights to suit different lighting requirements.",
    variations: [
      { name: "Light Type", value: "Integrated Light" },
      {
        name: "F2-050 Model",
        value: "50W LED, 100W Solar Panel",
        price: "₱45,164.50",
        description: "LED: 50W | Size: 1319×460×60mm | Battery: 12.8V 45Ah | Solar Panel: 100W | Pole Height: 8m",
      },
      {
        name: "F2-080 Model",
        value: "80W LED, 160W Solar Panel",
        price: "₱62,717.00",
        description: "LED: 80W | Size: 1490×640×60mm | Battery: 25.6V 45Ah | Solar Panel: 160W | Pole Height: 9m",
      },
      {
        name: "F2-100 Model",
        value: "100W LED, 200W Solar Panel",
        price: "₱71,803.00",
        description: "LED: 100W | Size: 1490×730×60mm | Battery: 25.6V 52Ah | Solar Panel: 200W | Pole Height: 10m",
      },
      {
        name: "F2-120 Model",
        value: "120W LED, 240W Solar Panel",
        price: "₱81,228.25",
        description: "LED: 120W | Size: 1650×830×60mm | Battery: 25.6V 60Ah | Solar Panel: 240W | Pole Height: 12m",
      },
      { name: "LED Power", value: "50W (F2-050) / 80W (F2-080) / 100W (F2-100) / 120W (F2-120)" },
      { name: "Solar Panel", value: "100W (F2-050) / 160W (F2-080) / 200W (F2-100) / 240W (F2-120)" },
      { name: "Battery Capacity", value: "12.8V 45Ah (F2-050) / 25.6V 45Ah (F2-080) / 25.6V 52Ah (F2-100) / 25.6V 60Ah (F2-120)" },
      { name: "Pole Height", value: "8m (F2-050) / 9m (F2-080) / 10m (F2-100) / 12m (F2-120)" },
    ],
    specifications: [
      { label: "Item No.", value: "F2-050 / F2-080 / F2-100 / F2-120" },
      { label: "LED Power", value: "50W / 80W / 100W / 120W" },
      { label: "LED Efficiency", value: "≥160lm/W" },
      { label: "Solar Panel Power", value: "100W / 160W / 200W / 240W" },
      { label: "Solar Panel Type", value: "Monocrystalline" },
      { label: "Battery Type", value: "Lithium (LiFePO4)" },
      { label: "Battery Voltage & Capacity", value: "12.8V 45Ah (F2-050) / 25.6V 45Ah (F2-080) / 25.6V 52Ah (F2-100) / 25.6V 60Ah (F2-120)" },
      { label: "Equipment Size", value: "1319×460×60mm (F2-050) / 1490×640×60mm (F2-080) / 1490×730×60mm (F2-100) / 1650×830×60mm (F2-120)" },
      { label: "Pole Height", value: "8m / 9m / 10m / 12m" },
      { label: "Working Time", value: "All night lighting, 365 days per year (3-5 rainy days backup)" },
      { label: "Protection Level", value: "IP67 (Super waterproof design)" },
      { label: "Battery Material", value: "LFP high-temperature resistant material" },
      { label: "Optical Lens", value: "Polycarbonate (PC) outdoor optical lenses" },
      { label: "Safety Protection", value: "Two hardware protections + one software protection" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "Precision grade high-quality aluminum alloy die-casting, patented private molds",
      "Integrated design, modular production, and one click installation",
      "Easy installation, no need for wiring, and no worries about power outages and restrictions",
      "LiFePo4 Lithium battery adopted, with reliable quality and long service life",
      "Adopting high-efficiency LED, with a long service life",
      "All night lighting, resistant to high and low temperatures",
      "Using polycarbonate (PC) outdoor optical lenses - High light transmittance, high temperature resistance, aging resistance, no deformation",
      "LFP high-temperature resistant material, with strong safety performance",
      "New material system, ultra long service life",
      "Two hardware protections + one software protection",
      "Protection level IP67, super waterproof design",
      "Integrated PACK process",
      "Anti rainy, with lights on every night for 365 days",
      "Four power variants: 50W, 80W, 100W, 120W LED",
      "High-efficiency monocrystalline solar panels",
      "Intelligent light control (PIR sensor)",
      "Auto dimming function",
    ],
  },
  "smart-home-smp2": {
    description: "Compact 5kWh residential energy storage system designed for home backup power. Perfect for keeping essential loads running during grid outages.",
    variations: [
      { name: "Capacity", value: "5kWh" },
      { name: "Power Output", value: "3kW / 5kW" },
      { name: "Type", value: "Mobile Energy Storage Power" },
    ],
    specifications: [
      { label: "Battery Capacity", value: "5kWh" },
      { label: "Rated Power", value: "3-5kW" },
      { label: "Battery Type", value: "LiFePO4" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "Warranty", value: "10 Years" },
    ],
    features: [
      "Wall-mounted or floor-standing",
      "App-based monitoring",
      "Grid-tie and off-grid modes",
      "Backup power for essential loads",
      "Quiet operation",
      "Compact design",
    ],
  },
  "cabinet-14": {
    description: "Modular 40kWh cabinet-type energy storage system for commercial and industrial applications. Scalable design allows for easy expansion.",
    variations: [
      { name: "Capacity", value: "40kWh" },
      { name: "Power Output", value: "20kW / 40kW" },
      { name: "Type", value: "Off-Grid Power Generation System" },
    ],
    specifications: [
      { label: "Battery Capacity", value: "40kWh" },
      { label: "Rated Power", value: "20-40kW" },
      { label: "Battery Type", value: "LiFePO4" },
      { label: "Cooling System", value: "Air Cooling" },
      { label: "Protection Level", value: "IP54" },
      { label: "Warranty", value: "10 Years" },
    ],
    features: [
      "Modular cabinet design",
      "Scalable capacity",
      "Remote monitoring",
      "Grid-tie and off-grid compatible",
      "Industrial-grade components",
      "Easy maintenance",
    ],
  },
  "ev-charging-89": {
    description: "DPEV-400K - 400 kW Dual-Gun DC ultra-fast charger. For vehicles that can accept >200 kW, allows very short charging stops. Strong marketing value with ultra-fast charging up to 400 kW. Ideal for flagship highway stations and bus/truck depots needing very high power. Available in multiple power variants: DPEV-60K (60kW), DPEV-80K (80kW), DPEV-120K (120kW), and DPEV-400K (400kW) to suit different charging needs.",
    variations: [
      {
        name: "Model",
        value: "DPEV-400K",
        description: "400 kW Dual-Gun DC Charger (ultra-fast flagship model)",
        price: "₱1,030,625.00",
      },
      { name: "Type", value: "Ultra-fast DC charger" },
      { name: "Power Output", value: "60kW / 80kW / 120kW / 400kW" },
      { name: "Connector Type", value: "CCS, CHAdeMO" },
      { name: "Gun Type", value: "Dual-gun DC Charging Pile" },
      { name: "Gun Line Standard", value: "GBT" },
      { name: "Gun Line Length", value: "5m (standard configuration)" },
      {
        name: "Available Variants",
        value: "DPEV-60K / DPEV-80K / DPEV-120K / DPEV-400K",
        description:
          "60kW, 80kW, and 120kW cabinets for everyday and highway fast charging, 400kW for flagship ultra-fast highway stations",
      },
      {
        name: "DPEV-60K – 60 kW Dual-Gun DC",
        value: "Entry-level DC fast charger",
        price: "₱361,250.00",
        description:
          "Type: Entry-level DC fast charger. Use: Malls, supermarkets, city public charging; Medium-sized fleets (delivery vans, taxis). Selling point: Good balance of cost and speed; can support 1–2 vehicles at a time.",
      },
      {
        name: "DPEV-80K – 80 kW Dual-Gun DC",
        value: "Mid-range DC fast charger",
        description:
          "Balanced power solution for commercial and public charging applications with enhanced charging speed.",
      },
      {
        name: "DPEV-120K – 120 kW Dual-Gun DC",
        value: "Standard fast charger",
        price: "₱446,250.00",
        description:
          "Type: Standard fast charger. Use: Highway rest stops; Big commercial centers; Fleet depots with higher turnover. Selling point: Fast top-up within a coffee break; attractive for inter-city travel.",
      },
      {
        name: "Use Cases",
        value:
          "Flagship highway stations, Bus/truck depots needing very high power, Malls, supermarkets, city public charging, Medium-sized fleets (delivery vans, taxis), Highway rest stops, Big commercial centers, Fleet depots with higher turnover",
      },
      {
        name: "Selling Point",
        value:
          "For vehicles that can accept >200 kW, allows very short charging stops; strong marketing value (ultra-fast charging up to 400 kW). DPEV-60K: Good balance of cost and speed; can support 1–2 vehicles at a time. DPEV-120K: Fast top-up within a coffee break; attractive for inter-city travel.",
      },
    ],
    specifications: [
      { label: "Model Code", value: "DPEV-60K / DPEV-80K / DPEV-120K / DPEV-400K" },
      { label: "Equipment Dimensions", value: "660×330×1535mm (60K/80K) / 1650×750×575mm (120K)" },
      { label: "Gun Line Standard", value: "GBT" },
      { label: "Gun Line Length", value: "5m (standard)" },
      { label: "Rated Power", value: "60kW (DPEV-60K) / 80kW (DPEV-80K) / 120kW (DPEV-120K) / 400kW (DPEV-400K)" },
      { label: "Input Voltage", value: "380Vac±15% (A, B, C, N, PE)" },
      { label: "Input Current", value: "< 120A (60K) / < 160A (80K) / < 240A (120K)" },
      { label: "Input Frequency", value: "45~55Hz" },
      { label: "Output Voltage", value: "150V ~ 1000V" },
      { label: "Maximum Output Current", value: "125A (60K) / 200A (80K) / 250A (120K)" },
      { label: "Display Mode", value: "7-inch touch screen" },
      { label: "Charging Method", value: "RFID card swiping, password charging, mobile QR code scanning (optional), VIN recognition (optional)" },
      { label: "Installation Method", value: "Integrated" },
      { label: "Networking Method", value: "4G, Ethernet (choose one)" },
      { label: "Maximum Efficiency", value: "≥95%" },
      { label: "Power Factor", value: "≥99%" },
      { label: "Voltage Regulation Precision", value: "≤±0.5%" },
      { label: "Current Regulation Precision", value: "≤±1%" },
      { label: "Ripple Coefficient", value: "≤1% (peak value)" },
      { label: "Output Mode", value: "Single-gun power, dual-gun current sharing" },
      { label: "Operating Temperature", value: "-25~+50°C" },
      { label: "Storage Temperature", value: "-40~+70°C" },
      { label: "Relative Humidity", value: "≤95%" },
      { label: "Atmospheric Pressure", value: "70~106kPa" },
      { label: "Altitude", value: "≤2000m" },
      { label: "Cooling Method", value: "Forced air cooling" },
      { label: "Protection Grade", value: "IP55" },
      { label: "Acoustic Noise", value: "≤65dB" },
      { label: "Protection Functions", value: "Over-voltage, under-voltage, over-current, short-circuit, leakage, emergency stop, grounding continuity, relay over-temperature protection" },
      { label: "Warranty", value: "3 Years" },
    ],
    features: [
      "Ultra-fast charging up to 400kW (DPEV-400K)",
      "Multiple power variants: 60kW, 80kW, 120kW, 400kW",
      "Dual-gun simultaneous charging with current sharing",
      "7-inch touch screen display",
      "Multiple charging methods: RFID, password, QR code, VIN recognition",
      "4G and Ethernet networking options",
      "High efficiency (≥95%) and power factor (≥99%)",
      "Precise voltage and current regulation",
      "Comprehensive protection functions",
      "Forced air cooling system",
      "IP55 protection grade for outdoor use",
      "Low acoustic noise (≤65dB)",
      "Ideal for flagship highway stations",
      "Perfect for bus/truck depots",
      "Suitable for malls, supermarkets, and city public charging",
      "OCPP 2.0 compatible",
      "Remote monitoring and diagnostics",
      "Weather-resistant design",
    ],
  },
  "solar-street-rklv02": {
    description: "Road King-LV02 compact solar street lighting system featuring split design with separate solar panel and LED fixture. Available in multiple models with varying power outputs, pole heights, and battery capacities to suit different lighting requirements. Includes both Split Street Light and All in Two Light configurations.",
    variations: [
      { name: "Light Type", value: "Split Street Light / All in Two Light" },
      {
        name: "LVQ2-080 Model",
        value: "80W LED, 200W Solar Panel",
        price: "₱54,088.25",
        description: "LED: 80W | Size: 935×415×210mm | Battery: 12.8V 90Ah | Solar Panel: 200W | Pole Height: 9m",
      },
      {
        name: "LVQ2-100 Model",
        value: "100W LED, 250W Solar Panel",
        price: "₱60,224.25",
        description: "LED: 100W | Size: 935×415×210mm | Battery: 25.6V 48Ah | Solar Panel: 250W | Pole Height: 10m",
      },
      {
        name: "LVQ2-120 Model",
        value: "120W LED, 300W Solar Panel",
        price: "₱70,003.50",
        description: "LED: 120W | Size: 935×415×210mm | Battery: 25.6V 60Ah | Solar Panel: 300W | Pole Height: 12m",
      },
      {
        name: "LVXC-120 Model",
        value: "20W LED, 70W Solar Panel",
        price: "₱17,346.00",
        description: "LED: 20W | Size: 495×205×80mm | Battery: 3.2V 65Ah | Solar Panel: 70W | Pole Height: 5m",
      },
      {
        name: "LVXC-130 Model",
        value: "30W LED, 70W Solar Panel",
        price: "₱19,661.75",
        description: "LED: 30W | Size: 550×240×100mm | Battery: 3.2V 80Ah | Solar Panel: 70W | Pole Height: 6m",
      },
      { name: "LED Power", value: "80W (LVQ2-080) / 100W (LVQ2-100) / 120W (LVQ2-120) / 20W (LVXC-120) / 30W (LVXC-130)" },
      { name: "Solar Panel", value: "200W (LVQ2-080) / 250W (LVQ2-100) / 300W (LVQ2-120) / 70W (LVXC-120/130)" },
      { name: "Battery Capacity", value: "12.8V 90Ah (LVQ2-080) / 25.6V 48Ah (LVQ2-100) / 25.6V 60Ah (LVQ2-120) / 3.2V 65Ah (LVXC-120) / 3.2V 80Ah (LVXC-130)" },
      { name: "Pole Height", value: "9m (LVQ2-080) / 10m (LVQ2-100) / 12m (LVQ2-120) / 5m (LVXC-120) / 6m (LVXC-130)" },
    ],
    specifications: [
      { label: "Item No.", value: "LVQ2-080 / LVQ2-100 / LVQ2-120 / LVXC-120 / LVXC-130" },
      { label: "LED Power", value: "80W / 100W / 120W (Split) / 20W / 30W (All in Two)" },
      { label: "LED Efficiency", value: "≥160lm/W" },
      { label: "Solar Panel Power", value: "200W / 250W / 300W (Split) / 70W (All in Two)" },
      { label: "Solar Panel Type", value: "Monocrystalline" },
      { label: "Battery Type", value: "Lithium (LiFePO4)" },
      { label: "Battery Voltage & Capacity", value: "12.8V 90Ah (LVQ2-080) / 25.6V 48Ah (LVQ2-100) / 25.6V 60Ah (LVQ2-120) / 3.2V 65Ah (LVXC-120) / 3.2V 80Ah (LVXC-130)" },
      { label: "Equipment Size", value: "935×415×210mm (LVQ2 series) / 495×205×80mm (LVXC-120) / 550×240×100mm (LVXC-130)" },
      { label: "Pole Height", value: "9m / 10m / 12m (Split) / 5m / 6m (All in Two)" },
      { label: "Working Time", value: "12+ hours (3-5 rainy days backup)" },
      { label: "Protection Level", value: "IP65" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "Split Street Light design with separate solar panel and LED fixture",
      "All in Two Light integrated design option",
      "Multiple power variants: 20W, 30W, 80W, 100W, 120W LED",
      "High-efficiency monocrystalline solar panels",
      "Lithium battery with advanced management system",
      "Intelligent light control (PIR sensor)",
      "Auto dimming function",
      "Weather-resistant construction (IP65)",
      "Easy installation with recommended pole heights",
      "Maintenance-free operation",
      "Long working time with 3-5 rainy days backup",
    ],
  },
  "solar-street-rks": {
    description: "Solar Road King Series LVXC2 premium solar street lighting solution featuring all-in-two design with integrated solar panel and LED fixture. Available in two models (LVXC-320, LVXC-330) with varying power outputs and pole heights to suit different lighting requirements.",
    variations: [
      { name: "Light Type", value: "All in Two Light" },
      {
        name: "LVXC-320 Model",
        value: "20W LED, 70W Solar Panel",
        price: "₱17,036.25",
        description: "LED: 20W | Size: 650×300×130mm | Battery: 3.2V 65Ah | Solar Panel: 70W | Pole Height: 5m",
      },
      {
        name: "LVXC-330 Model",
        value: "30W LED, 70W Solar Panel",
        price: "₱18,939.00",
        description: "LED: 30W | Size: 650×300×130mm | Battery: 3.2V 80Ah | Solar Panel: 70W | Pole Height: 6m",
      },
      { name: "LED Power", value: "20W (LVXC-320) / 30W (LVXC-330)" },
      { name: "Solar Panel", value: "70W (LVXC-320/330)" },
      { name: "Battery Capacity", value: "3.2V 65Ah (LVXC-320) / 3.2V 80Ah (LVXC-330)" },
      { name: "Pole Height", value: "5m (LVXC-320) / 6m (LVXC-330)" },
    ],
    specifications: [
      { label: "Item No.", value: "LVXC-320 / LVXC-330" },
      { label: "LED Power", value: "20W / 30W" },
      { label: "LED Efficiency", value: "≥160lm/W" },
      { label: "Solar Panel Power", value: "70W" },
      { label: "Solar Panel Type", value: "Monocrystalline" },
      { label: "Battery Type", value: "Lithium (LiFePO4)" },
      { label: "Battery Voltage & Capacity", value: "3.2V 65Ah (LVXC-320) / 3.2V 80Ah (LVXC-330)" },
      { label: "Equipment Size", value: "650×300×130mm" },
      { label: "Pole Height", value: "5m / 6m" },
      { label: "Working Time", value: "12+ hours (3-5 rainy days backup)" },
      { label: "Protection Level", value: "IP65" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "All in Two Light integrated design",
      "Two power variants: 20W and 30W LED",
      "High-efficiency monocrystalline solar panels (70W)",
      "Lithium battery with advanced management system",
      "Intelligent light control (PIR sensor)",
      "Auto dimming function",
      "Weather-resistant construction (IP65)",
      "Easy installation with recommended pole heights (5m/6m)",
      "Maintenance-free operation",
      "Long working time with 3-5 rainy days backup",
      "Compact size: 650×300×130mm",
    ],
  },
  "solar-street-lvxc": {
    description: "Solar Road King Series LVXC3 high-performance solar street lighting system featuring all-in-two design with integrated solar panel and LED fixture. Available in two models (LVXC-320, LVXC-330) with varying power outputs and pole heights to suit different lighting requirements.",
    variations: [
      { name: "Light Type", value: "All in Two Light" },
      {
        name: "LVXC-320 Model",
        value: "20W LED, 70W Solar Panel",
        price: "₱17,036.25",
        description: "LED: 20W | Size: 650×300×130mm | Battery: 3.2V 65Ah | Solar Panel: 70W | Pole Height: 5m",
      },
      {
        name: "LVXC-330 Model",
        value: "30W LED, 70W Solar Panel",
        price: "₱18,939.00",
        description: "LED: 30W | Size: 650×300×130mm | Battery: 3.2V 80Ah | Solar Panel: 70W | Pole Height: 6m",
      },
      { name: "LED Power", value: "20W (LVXC-320) / 30W (LVXC-330)" },
      { name: "Solar Panel", value: "70W (LVXC-320/330)" },
      { name: "Battery Capacity", value: "3.2V 65Ah (LVXC-320) / 3.2V 80Ah (LVXC-330)" },
      { name: "Pole Height", value: "5m (LVXC-320) / 6m (LVXC-330)" },
    ],
    specifications: [
      { label: "Item No.", value: "LVXC-320 / LVXC-330" },
      { label: "LED Power", value: "20W / 30W" },
      { label: "LED Efficiency", value: "≥160lm/W" },
      { label: "Solar Panel Power", value: "70W" },
      { label: "Solar Panel Type", value: "Monocrystalline" },
      { label: "Battery Type", value: "Lithium (LiFePO4)" },
      { label: "Battery Voltage & Capacity", value: "3.2V 65Ah (LVXC-320) / 3.2V 80Ah (LVXC-330)" },
      { label: "Equipment Size", value: "650×300×130mm" },
      { label: "Pole Height", value: "5m / 6m" },
      { label: "Working Time", value: "12+ hours (3-5 rainy days backup)" },
      { label: "Protection Level", value: "IP65" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "All in Two Light integrated design",
      "Two power variants: 20W and 30W LED",
      "High-efficiency monocrystalline solar panels (70W)",
      "Lithium battery with advanced management system",
      "Intelligent light control (PIR sensor)",
      "Auto dimming function",
      "Weather-resistant construction (IP65)",
      "Easy installation with recommended pole heights (5m/6m)",
      "Maintenance-free operation",
      "Long working time with 3-5 rainy days backup",
      "Compact size: 650×300×130mm",
    ],
  },
};

