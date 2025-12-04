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
  },
  {
    id: "solar-street-rklv02",
    name: "Road King-LV02",
    subtitle: "Compact solar street lighting system",
    category: "solar-street",
    tag: "Split Street Light",
    image: "/Product/StreetLamp/RKlv02.png",
  },
  {
    id: "solar-street-rks",
    name: "Solar Road King Series LVXC2",
    subtitle: "Premium solar street lighting solution",
    category: "solar-street",
    tag: "All in Two Light",
    image: "/Product/StreetLamp/RKS.png",
  },
  {
    id: "solar-street-lvxc",
    name: "Solar Road King Series LVXC3",
    subtitle: "High-performance solar street lighting system",
    category: "solar-street",
    tag: "All in Two Light",
    image: "/Product/StreetLamp/LVXC.png",
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
      "DPEV-7K – 7 kW Single-Gun AC “slow” charger designed as a reliable, everyday AC charging solution. Ideal for locations where vehicles remain parked for longer periods, such as residential, office and hotel parking. Offers dependable performance with low installation cost, making it an excellent choice as a basic amenity charger.",
    variations: [
      { name: "Power Output", value: "7kW / 11kW / 22kW" },
      { name: "Connector Type", value: "Type 2 (IEC 62196)" },
      { name: "Gun Type", value: "Single-gun AC Charging Pile" },
      { name: "Type", value: "AC “slow” charger" },
      {
        name: "Use Cases",
        value:
          "Residential, office, hotel parking; locations where cars stay parked for many hours",
      },
      {
        name: "Selling Point",
        value:
          "Low installation cost, suitable as a “basic amenity” charger for long-stay parking",
      },
    ],
    specifications: [
      { label: "Rated Power", value: "7-22kW" },
      { label: "Input Voltage", value: "230V / 400V AC" },
      { label: "Output Current", value: "32A" },
      { label: "Protection Level", value: "IP65" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "WiFi and 4G connectivity",
      "Mobile app control",
      "Scheduled charging",
      "Energy consumption tracking",
      "Compact wall-mounted design",
      "Easy installation",
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
    description: "Integrated solar street light featuring all-in-one design with high-efficiency monocrystalline solar panel, intelligent LED lighting, and advanced battery management system.",
    variations: [
      { name: "LED Power", value: "30W / 50W / 80W / 100W" },
      { name: "Solar Panel", value: "50W / 80W / 120W / 150W" },
      { name: "Battery Capacity", value: "50Ah / 80Ah / 100Ah / 150Ah" },
      { name: "Light Type", value: "Integrated Light" },
    ],
    specifications: [
      { label: "LED Efficiency", value: "≥160lm/W" },
      { label: "Working Time", value: "12+ hours (3-5 rainy days backup)" },
      { label: "Solar Panel Type", value: "Monocrystalline" },
      { label: "Battery Type", value: "LiFePO4" },
      { label: "Protection Level", value: "IP65" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "All-in-one integrated design",
      "Intelligent light control (PIR sensor)",
      "Auto dimming function",
      "Weather-resistant construction",
      "Easy installation",
      "Maintenance-free operation",
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
    description: "DPEV-400K - 400 kW Dual-Gun DC ultra-fast charger. For vehicles that can accept >200 kW, allows very short charging stops. Strong marketing value with ultra-fast charging up to 400 kW. Ideal for flagship highway stations and bus/truck depots needing very high power.",
    variations: [
      {
        name: "Model",
        value: "DPEV-400K",
        description: "400 kW Dual-Gun DC Charger (ultra-fast flagship model)",
        price: "₱1,030,625.00",
      },
      { name: "Type", value: "Ultra-fast DC charger" },
      { name: "Power Output", value: "Up to 400kW" },
      { name: "Connector Type", value: "CCS, CHAdeMO" },
      { name: "Gun Type", value: "Dual-gun DC Charging Pile" },
      {
        name: "Available Variants",
        value: "DPEV-60K / DPEV-120K / DPEV-400K",
        description:
          "60kW and 120kW cabinets for everyday and highway fast charging, 400kW for flagship ultra-fast highway stations",
      },
      {
        name: "DPEV-60K – 60 kW Dual-Gun DC",
        value: "Entry-level DC fast charger",
        price: "₱361,250.00",
        description:
          "Ideal for malls, supermarkets, city public charging and medium-sized fleets (delivery vans, taxis). Good balance of cost and speed; can support 1–2 vehicles at a time.",
      },
      {
        name: "DPEV-120K – 120 kW Dual-Gun DC",
        value: "Standard fast charger",
        price: "₱446,250.00",
        description:
          "Designed for highway rest stops, big commercial centers and fleet depots with higher turnover. Enables “fast top-up within a coffee break” and is attractive for inter-city travel.",
      },
      {
        name: "Use Cases",
        value:
          "Flagship highway stations, Bus/truck depots needing very high power",
      },
      {
        name: "Selling Point",
        value:
          "For vehicles that can accept >200 kW, allows very short charging stops; strong marketing value (ultra-fast charging up to 400 kW)",
      },
    ],
    specifications: [
      { label: "Model Code", value: "DPEV-400K" },
      { label: "Rated Power", value: "Up to 400kW" },
      { label: "Maximum Power", value: "400kW" },
      { label: "Input Voltage", value: "380V AC" },
      { label: "Output Voltage", value: "200-750V DC" },
      { label: "Efficiency", value: "≥95%" },
      { label: "Protection Level", value: "IP54" },
      { label: "Warranty", value: "3 Years" },
    ],
    features: [
      "Ultra-fast charging up to 400kW",
      "Dual-gun simultaneous charging",
      "Very short charging stops for high-power vehicles",
      "Ideal for flagship highway stations",
      "Perfect for bus/truck depots",
      "Strong marketing value",
      "OCPP 2.0 compatible",
      "Remote monitoring and diagnostics",
      "Weather-resistant design",
    ],
  },
};

