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

type ProductCategory = "all" | "commercial" | "residential" | "baconly";

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
  { id: "commercial", label: "Commercial & Industrial" },
  { id: "residential", label: "Residential" },
  { id: "baconly", label: "Baconly" },
];

// Based on Absen Energy products layout, adapted to VoltHub
// Reference: `https://www.absenenergy.com/en/product/`
const products: Product[] = [
  {
    id: "cube-125",
    name: "Cube 125/161/192",
    subtitle: "Outdoor Distributed Energy Storage (Air Cooling)",
    category: "commercial",
    tag: "Energy Storage",
    image:
      "https://readdy.ai/api/search-image?query=outdoor%20distributed%20energy%20storage%20cabinet%20white%20industrial%20container%20with%20ventilation%20doors%20and%20warning%20labels%2C%20clean%20studio%20background&width=600&height=420&seq=vh_prod_001&orientation=landscape",
  },
  {
    id: "cube-1000f",
    name: "Cube 1000-F",
    subtitle: "Outdoor Distributed Energy Storage",
    category: "commercial",
    tag: "High Capacity",
    image:
      "https://readdy.ai/api/search-image?query=modular%20battery%20energy%20storage%20system%20rack%20with%20multiple%20white%20modules%20and%20led%20indicators%2C%20front%20view%2C%20studio%20lighting&width=600&height=420&seq=vh_prod_002&orientation=landscape",
  },
  {
    id: "ebox16",
    name: "EBOX16",
    subtitle: "Residential Low Voltage Energy Storage System",
    category: "residential",
    tag: "Home Storage",
    image:
      "https://readdy.ai/api/search-image?query=slim%20wall%20mounted%20home%20battery%20unit%20white%20minimal%20design%20with%20soft%20shadow%2C%20modern%20interior%20background&width=600&height=420&seq=vh_prod_003&orientation=portrait",
  },
  {
    id: "cube-60",
    name: "Air-cooling Cube 60",
    subtitle: "All-in-one Energy Storage Cabinet",
    category: "commercial",
    tag: "All-in-one",
    image:
      "https://readdy.ai/api/search-image?query=compact%20all%20in%20one%20battery%20storage%20cabinet%20with%20touch%20screen%20and%20ventilation%20grilles%2C%20white%20and%20gray%20colors&width=600&height=420&seq=vh_prod_004&orientation=portrait",
  },
  {
    id: "cube-225",
    name: "Air Cooling Cube 225",
    subtitle: "All-in-one Energy Storage Cabinet",
    category: "commercial",
    image:
      "https://readdy.ai/api/search-image?query=large%20energy%20storage%20cabinet%20with%20double%20doors%20and%20cooling%20vents%2C%20industrial%20white%20finish%20studio%20shot&width=600&height=420&seq=vh_prod_005&orientation=landscape",
  },
  {
    id: "cube-261",
    name: "Liquid Cooling Cube 261/261-Y",
    subtitle: "All-in-one Energy Storage Cabinet",
    category: "commercial",
    tag: "Liquid Cooling",
    image:
      "https://readdy.ai/api/search-image?query=modern%20liquid%20cooled%20battery%20storage%20cabinet%20with%20blue%20accent%20lights%2C%20industrial%20data%20center%20style&width=600&height=420&seq=vh_prod_006&orientation=landscape",
  },
  {
    id: "ax3700",
    name: "Liquid Cooling AX3700",
    subtitle: "Outdoor Distributed Energy Storage",
    category: "commercial",
    image:
      "https://readdy.ai/api/search-image?query=containerized%20battery%20energy%20storage%20system%20with%20company%20branding%20on%20side%2C%20installed%20near%20solar%20farm&width=600&height=420&seq=vh_prod_007&orientation=landscape",
  },
  {
    id: "pile-lv",
    name: "Pile LV",
    subtitle: "Low-Voltage Stackable Residential Battery",
    category: "residential",
    image:
      "https://readdy.ai/api/search-image?query=stackable%20tower%20home%20battery%20modules%20white%20with%20rounded%20edges%2C%20minimal%20studio%20background&width=600&height=420&seq=vh_prod_008&orientation=portrait",
  },
  {
    id: "unity-lv",
    name: "Unity LV",
    subtitle: "Rack Type Residential Battery",
    category: "residential",
    image:
      "https://readdy.ai/api/search-image?query=rack%20mounted%20battery%20modules%20in%20black%20metal%20rack%20with%20status%20leds%2C%20data%20center%20look&width=600&height=420&seq=vh_prod_009&orientation=landscape",
  },
  {
    id: "unity-hv",
    name: "Unity HV",
    subtitle: "Residential / Small Industrial Battery",
    category: "baconly",
    tag: "High Voltage",
    image:
      "https://readdy.ai/api/search-image?query=high%20voltage%20battery%20rack%20system%20with%20orange%20connectors%20and%20safety%20labels%2C%20industrial%20studio%20shot&width=600&height=420&seq=vh_prod_010&orientation=landscape",
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
      {/* Hero / banner */}
      <section className="relative overflow-hidden border-b border-slate-100 min-h-[300px] md:min-h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <Image
          src="/HomeBanner/banner3.jpg"
          alt="VoltHub energy storage solutions"
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
                Energy Storage & Power Products
              </h1>
              <p className="text-sm md:text-base text-white/80">
                From residential batteries to utility-scale storage, VoltHub
                delivers trusted, safe and efficient energy solutions for every
                scenario.
              </p>
            </div>
          </LayoutContainer>
        </div>
      </section>

      {/* Main layout: sidebar + grid */}
      <section className="py-10 md:py-14">
        <LayoutContainer className="grid gap-8 lg:grid-cols-[260px,1fr] items-start">
          {/* Sidebar categories */}
          <aside className="space-y-3 lg:sticky lg:top-28 self-start">
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
          <div className="space-y-6">
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
                      {product.category === "residential" && (
                        <RiHomeGearLine className="h-4 w-4 text-primary" />
                      )}
                      {product.category === "commercial" && (
                        <RiBatteryChargeLine className="h-4 w-4 text-primary" />
                      )}
                      {product.category === "baconly" && (
                        <RiChargingPile2Line className="h-4 w-4 text-primary" />
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


