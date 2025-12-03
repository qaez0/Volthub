export type ProductCategory =
  | "all"
  | "ev-charging"
  | "solar-street"
  | "smart-home"
  | "cabinet"
  | "container";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  tag?: string;
  image: string;
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

