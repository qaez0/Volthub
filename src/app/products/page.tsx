"use client";

import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import {
  RiArrowRightSLine,
  RiHome2Line,
  RiBatteryChargeLine,
  RiChargingPile2Line,
  RiHomeGearLine,
} from "react-icons/ri";
import { useState } from "react";

type ProductCategory =
  | "all"
  | "ev-charging"
  | "solar-street"
  | "smart-home"
  | "cabinet"
  | "container";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  tag?: string;
  image: string;
};

const categories: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "ev-charging", label: "EV Charging Station" },
  { id: "solar-street", label: "Solar Street Lights" },
  { id: "smart-home", label: "Smart Home IPS" },
  { id: "cabinet", label: "Cabinet Type Power Supply" },
  { id: "container", label: "Container Type Power Supply" },
];

const categoryBanner: Record<
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
const products: Product[] = [
  {
    id: "cabinet-item4",
    name: "Cabinet Type Power Supply",
    subtitle: "Modular cabinet energy storage and power supply system",
    category: "cabinet",
    tag: "Cabinet Type",
    image: "/Product/cabinet/item4.png",
  },
  {
    id: "smart-home-smp2",
    name: "Smart Home IPS SMP2",
    subtitle: "Residential Smart Home Power System",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP2.png",
  },
  {
    id: "container-con1",
    name: "Container Type Power Supply",
    subtitle: "Utility-scale containerized BESS and hybrid power system",
    category: "container",
    tag: "Container Type",
    image: "/Product/containertype/con1.png",
  },
  {
    id: "smart-home-smp3",
    name: "Smart Home IPS SMP3",
    subtitle: "Advanced Smart Home Power System",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP3.png",
  },
  {
    id: "smart-home-smp4",
    name: "Smart Home IPS SMP4",
    subtitle: "Compact Smart Home Power Solution",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP4.png",
  },
  {
    id: "smart-home-smp5",
    name: "Smart Home IPS SMP5",
    subtitle: "Premium Smart Home Power System",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP5.png",
  },
  {
    id: "smart-home-smp6",
    name: "Smart Home IPS SMP6",
    subtitle: "High-Capacity Smart Home Power System",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP6.png",
  },
  {
    id: "smart-home-smp7",
    name: "Smart Home IPS SMP7",
    subtitle: "Enterprise Smart Home Power Solution",
    category: "smart-home",
    tag: "Home IPS",
    image: "/Product/SmartHome/SMP7.png",
  },
  {
    id: "ev-charging-53",
    name: "EV Charging Station 53",
    subtitle: "Advanced EV charging solution for commercial and public use",
    category: "ev-charging",
    tag: "EV Charging",
    image: "/Product/EV/53.png",
  },
  {
    id: "ev-charging-59",
    name: "EV Charging Station 59",
    subtitle: "High-performance EV charging system",
    category: "ev-charging",
    tag: "EV Charging",
    image: "/Product/EV/59.png",
  },
  {
    id: "ev-charging-64",
    name: "EV Charging Station 64",
    subtitle: "Fast and reliable EV charging solution",
    category: "ev-charging",
    tag: "EV Charging",
    image: "/Product/EV/64.png",
  },
  {
    id: "ev-charging-89",
    name: "EV Charging Station 89",
    subtitle: "Premium EV charging station for fleets and public sites",
    category: "ev-charging",
    tag: "EV Charging",
    image: "/Product/EV/89.png",
  },
  {
    id: "solar-street-f1l",
    name: "F1L Solar Street Light",
    subtitle: "High-efficiency solar street lighting system",
    category: "solar-street",
    tag: "Solar Lighting",
    image: "/Product/StreetLamp/F1L.png",
  },
  {
    id: "solar-street-f2l",
    name: "F2L Solar Street Light",
    subtitle: "Advanced solar street lighting solution",
    category: "solar-street",
    tag: "Solar Lighting",
    image: "/Product/StreetLamp/F2L.png",
  },
  {
    id: "solar-street-rklv02",
    name: "RK LV02 Solar Street Light",
    subtitle: "Compact solar street lighting system",
    category: "solar-street",
    tag: "Solar Lighting",
    image: "/Product/StreetLamp/RKlv02.png",
  },
  {
    id: "solar-street-rks",
    name: "RKS Solar Street Light",
    subtitle: "Premium solar street lighting solution",
    category: "solar-street",
    tag: "Solar Lighting",
    image: "/Product/StreetLamp/RKS.png",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero / banner (changes with category) */}
      <section className="relative overflow-hidden border-b border-slate-100 min-h-[300px] md:min-h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <Image
          src={categoryBanner[activeCategory].image}
          alt={categoryBanner[activeCategory].title}
          width={1600}
          height={400}
          className="w-full h-full md:h-[550px] object-cover"
        />
        <div className="absolute inset-0">
          <LayoutContainer className="h-full flex flex-col justify-center gap-4 text-white">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/70">
              <RiHome2Line className="h-4 w-4" />
              <span>Home</span>
              <RiArrowRightSLine className="h-4 w-4" />
              <span className="text-white/90">Products</span>
            </div>
            <div className="max-w-xl space-y-2">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {categoryBanner[activeCategory].title}
              </h1>
              <p className="text-sm md:text-base text-white/80">
                {categoryBanner[activeCategory].description}
              </p>
            </div>
          </LayoutContainer>
        </div>
      </section>

      {/* Main layout: sidebar + grid */}
      <section className="py-10 md:py-14">
        <LayoutContainer className="flex gap-8 items-start">
          {/* Sidebar categories */}
          <aside className="w-[260px] space-y-3 self-start flex-shrink-0">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center justify-between rounded-2xl px-5 py-4 text-left text-sm md:text-base transition-all shadow-sm
                    ${
                      isActive
                        ? "bg-white text-slate-900 ring-2 ring-primary/70 shadow-md"
                        : "bg-white/60 text-slate-700 hover:bg-white hover:shadow-md"
                    }`}
                >
                  <span>{category.label}</span>
                  <RiArrowRightSLine
                    className={`h-5 w-5 ${
                      isActive ? "text-primary" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}

            <div className="hidden lg:block mt-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-4 text-xs space-y-1">
              <p className="font-semibold text-sm">
                Trusted Energy Storage Supplier
              </p>
              <p className="text-white/70">
                Certified safety, bankable performance and global project
                experience.
              </p>
            </div>
          </aside>

          {/* Products grid */}
          <div className="space-y-6 flex-1">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-primary font-semibold">
                  Products
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {activeCategory === "all"
                    ? "All Products"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid gap-5 xl:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100"
                >
                  <div className="relative overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={640}
                      height={420}
                      className="w-full h-52 md:h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-70" />
                  </div>

                  <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      {product.category === "smart-home" && (
                        <RiHomeGearLine className="h-4 w-4 text-primary" />
                      )}
                      {product.category === "ev-charging" && (
                        <RiChargingPile2Line className="h-4 w-4 text-primary" />
                      )}
                      {(product.category === "cabinet" ||
                        product.category === "container") && (
                        <RiBatteryChargeLine className="h-4 w-4 text-primary" />
                      )}
                      <span className="uppercase tracking-[0.16em]">
                        {product.category === "all"
                          ? "All Products"
                          : categories.find((c) => c.id === product.category)
                              ?.label}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 flex-1">
                      {product.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      {product.tag && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {product.tag}
                        </span>
                      )}
                      <button className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                        <span>Learn More</span>
                        <RiArrowRightSLine className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}


