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
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  tag?: string;
  image: string;
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
  { title: string; description: string; image: string }
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
    image: "/HomeBanner/item4.png",
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
  },
  cabinet: {
    title: "Cabinet Type Power Supply",
    description:
      "Modular cabinet energy storage and power supply systems for commercial and industrial applications.",
    image: "/HomeBanner/commercial.png",
  },
  container: {
    title: "Container Type Power Supply",
    description:
      "Utility‑scale containerized BESS and hybrid power systems ready for rapid deployment.",
    image: "/HomeBanner/container.png",
  },
};

// Based on Absen Energy products layout, adapted to VoltHub
// Reference: `https://www.absenenergy.com/en/product/`
export const products: Product[] = [
  // EV Charging Station products
  {
    id: "ev-charging-53",
    name: "DC EV Charger Single Gun",
    subtitle: "Advanced EV charging solution for commercial and public use",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/53.png",
  },
  {
    id: "ev-charging-59",
    name: "AC EV Charger 7kW",
    subtitle: "High-performance EV charging system",
    category: "ev-charging",
    tag: " Single-gun AC Charging Pile",
    image: "/Product/EV/59.png",
  },
  {
    id: "ev-charging-64",
    name: "DC EV Charger Single Gun",
    subtitle: "Fast and reliable EV charging solution",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/64.png",
  },
  {
    id: "ev-charging-89",
    name: "DC EV Charger Dual Gun",
    subtitle: "Premium EV charging station for fleets and public sites",
    category: "ev-charging",
    tag: " Dual-gun DC Charging Pile ",
    image: "/Product/EV/89.png",
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
    description: "Advanced DC fast charging station with dual-gun capability, designed for commercial and public use. Features smart monitoring, payment integration, and remote management capabilities.",
    variations: [
      { name: "Power Output", value: "50kW / 120kW / 150kW" },
      { name: "Connector Type", value: "CCS, CHAdeMO" },
      { name: "Gun Type", value: "Dual-gun DC Charging Pile" },
    ],
    specifications: [
      { label: "Rated Power", value: "50-150kW" },
      { label: "Input Voltage", value: "380V AC" },
      { label: "Output Voltage", value: "200-750V DC" },
      { label: "Efficiency", value: "≥95%" },
      { label: "Protection Level", value: "IP54" },
      { label: "Warranty", value: "3 Years" },
    ],
    features: [
      "Dual-gun simultaneous charging",
      "OCPP 2.0 compatible",
      "RFID and mobile app payment",
      "Remote monitoring and diagnostics",
      "Load balancing technology",
      "Weather-resistant design",
    ],
  },
  "ev-charging-59": {
    description: "Compact AC charging solution perfect for residential and workplace installations. Easy to install and operate with smart connectivity features.",
    variations: [
      { name: "Power Output", value: "7kW / 11kW / 22kW" },
      { name: "Connector Type", value: "Type 2 (IEC 62196)" },
      { name: "Gun Type", value: "Single-gun AC Charging Pile" },
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
};

