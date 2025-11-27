import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import {
  RiSunLine,
  RiChargingPile2Line,
  RiBatteryChargeLine,
  RiCpuLine,
  RiScales3Line,
  RiFlashlightLine,
  RiHomeGearLine,
  RiWindyLine,
  RiDashboard3Line,
} from "react-icons/ri";

const productStats = [
  { label: "Product Lines", value: "26+", detail: "Across 4 categories" },
  { label: "Panel Efficiency", value: "22.8%", detail: "Peak mono-PERC" },
  { label: "Fast Charging", value: "150kW", detail: "DC max output" },
  { label: "Battery Cycle Life", value: "10,000", detail: "Deep cycles" },
];

const categoryCards = [
  {
    id: "solar",
    title: "Solar Solutions",
    icon: RiSunLine,
    gradient: "from-primary to-green-600",
    items: [
      "Monocrystalline PERC Panels",
      "Bifacial Solar Modules",
      "String & Central Inverters",
      "Power Optimizers & Microinverters",
      "Smart LED Lighting",
      "Grid-Tie & Off-Grid Systems",
    ],
    metric: "12+ Product Lines",
  },
  {
    id: "ev",
    title: "EV Infrastructure",
    icon: RiChargingPile2Line,
    gradient: "from-blue-600 to-blue-800",
    items: [
      "Level 2 AC (7-22kW)",
      "DC Fast Chargers (50-150kW)",
      "Ultra-Fast (350kW)",
      "Fleet Management Systems",
      "Load Balancing",
      "RFID & NFC Payment",
    ],
    metric: "8+ Charging Types",
  },
  {
    id: "storage",
    title: "Energy Storage",
    icon: RiBatteryChargeLine,
    gradient: "from-green-600 to-emerald-700",
    items: [
      "LiFePO4 & NMC Batteries",
      "Solid-State Technology",
      "Grid-Scale BESS",
      "Residential ESS (5-20kWh)",
      "Frequency Regulation",
      "Microgrid Integration",
    ],
    metric: "6+ Storage Types",
  },
  {
    id: "smart-controls",
    title: "Smart Controls",
    icon: RiCpuLine,
    gradient: "from-orange-600 to-red-600",
    items: [
      "AI-Based MPPT Controllers",
      "Predictive Analytics",
      "Blockchain Energy Trading",
      "Digital Twins",
      "Weather Forecasting API",
      "Mobile & Web Dashboards",
    ],
    metric: "15+ Smart Features",
  },
];

const featuredProducts = [
  {
    title: "Solar Street Light Pro",
    badge: "Best Seller",
    badgeColor: "bg-green-100 text-green-600",
    icon: RiSunLine,
    image:
      "https://readdy.ai/api/search-image?query=modern%20solar%20LED%20street%20light%20with%20sleek%20black%20pole%20and%20bright%20LED%20panel%2C%20minimalist%20industrial%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-tech%20appearance%20with%20blue%20accents&width=400&height=300&seq=prod001&orientation=landscape",
    specs: [
      ["LED Power", "50W - 200W (160lm/W)"],
      ["Solar Panel", "100W - 400W Mono"],
      ["Battery", "LiFePO4 150Ah - 600Ah"],
      ["Operation Time", "12+ Hours (5 Rainy Days)"],
      ["Warranty", "5 Years (LED 50,000h)"],
      ["Certifications", "IP65, CE, FCC, RoHS"],
      ["Price Range", "$299 - $899"],
    ],
    cta: "View Details",
  },
  {
    title: "Solar Home System",
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-600",
    icon: RiHomeGearLine,
    image:
      "https://readdy.ai/api/search-image?query=residential%20solar%20panel%20system%20installation%20on%20modern%20house%20roof%2C%20multiple%20blue%20solar%20panels%20arranged%20in%20grid%20pattern%2C%20clean%20architectural%20setting%2C%20bright%20daylight%2C%20professional%20installation%20quality&width=400&height=300&seq=prod002&orientation=landscape",
    specs: [
      ["System Size", "5kW - 20kW (Scalable)"],
      ["Panel Efficiency", "22.5% Mono-PERC"],
      ["Inverter Type", "Hybrid String (98.6% Eff)"],
      ["Annual Production", "7,500 - 28,000 kWh"],
      ["ROI Period", "6-8 Years"],
      ["Warranty", "25Y Performance / 12Y Product"],
      ["Price Range", "$1.70 - $2.20/Watt"],
    ],
    cta: "Get Quote",
  },
  {
    title: "EV Fast Charger",
    badge: "Popular",
    badgeColor: "bg-yellow-100 text-yellow-600",
    icon: RiChargingPile2Line,
    image:
      "https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20charging%20station%20with%20sleek%20white%20and%20blue%20design%2C%20digital%20display%20screen%2C%20charging%20cable%2C%20futuristic%20appearance%2C%20clean%20industrial%20background%2C%20professional%20product%20shot&width=400&height=300&seq=prod003&orientation=landscape",
    specs: [
      ["Charging Speed", "50kW - 150kW"],
      ["Connector Type", "CCS, CHAdeMO"],
      ["Warranty", "3 Years"],
      ["Price Range", "$15,000 - $45,000"],
    ],
    cta: "Request Demo",
  },
  {
    title: "PowerVault Battery",
    badge: "Premium",
    badgeColor: "bg-green-100 text-green-600",
    icon: RiBatteryChargeLine,
    image:
      "https://readdy.ai/api/search-image?query=industrial%20lithium%20battery%20storage%20system%20with%20blue%20and%20silver%20housing%2C%20LED%20status%20indicators%2C%20modular%20design%2C%20high-tech%20energy%20storage%20unit%2C%20clean%20white%20background%2C%20professional%20equipment%20photography&width=400&height=300&seq=prod004&orientation=landscape",
    specs: [
      ["Capacity", "10kWh - 100kWh"],
      ["Cycle Life", "6,000+ cycles"],
      ["Warranty", "10 Years"],
      ["Price Range", "$5,500 - $48,000"],
    ],
    cta: "Configure System",
  },
  {
    title: "Solar Ceiling Fan",
    badge: "Eco-Friendly",
    badgeColor: "bg-purple-100 text-purple-600",
    icon: RiWindyLine,
    image:
      "https://readdy.ai/api/search-image?query=modern%20solar-powered%20ceiling%20fan%20with%20sleek%20white%20blades%20and%20integrated%20LED%20lighting%2C%20contemporary%20design%2C%20energy-efficient%20motor%2C%20clean%20minimalist%20appearance%2C%20professional%20product%20photography&width=400&height=300&seq=prod005&orientation=landscape",
    specs: [
      ["Blade Size", '48" / 56"'],
      ["Power Usage", "28W - 35W"],
      ["Warranty", "3 Years"],
      ["Price Range", "$199 - $299"],
    ],
    cta: "Shop Now",
  },
  {
    title: "SmartControl Hub",
    badge: "Smart",
    badgeColor: "bg-orange-100 text-orange-600",
    icon: RiDashboard3Line,
    image:
      "https://readdy.ai/api/search-image?query=smart%20energy%20management%20control%20panel%20with%20digital%20touchscreen%20display%2C%20blue%20interface%20graphics%2C%20modern%20industrial%20design%2C%20monitoring%20dashboard%2C%20clean%20technology%20aesthetic%2C%20professional%20equipment%20shot&width=400&height=300&seq=prod006&orientation=landscape",
    specs: [
      ["Max Current", "60A - 100A"],
      ["Efficiency", "98.5%"],
      ["Warranty", "5 Years"],
      ["Price Range", "$899 - $1,599"],
    ],
    cta: "Learn More",
  },
];

const technologyTrends = [
  {
    title: "Solar Technology Advances",
    icon: RiFlashlightLine,
    bullets: [
      "Perovskite-silicon tandems hitting 31.3% efficiency",
      "Bifacial panels delivering 20-30% more energy",
      "Floating solar growing at 22% CAGR",
      "Building-integrated photovoltaics expanding",
      "Agrivoltaics pairing farming with solar",
    ],
  },
  {
    title: "Battery Storage Evolution",
    icon: RiBatteryChargeLine,
    bullets: [
      "Lithium-ion costs down 89% since 2010",
      "Solid-state batteries promise 2x density",
      "Grid-scale storage deployments up 179% YoY",
      "Second-life EV batteries for stationary storage",
      "Long-duration technologies emerging",
    ],
  },
  {
    title: "EV Charging Infrastructure",
    icon: RiChargingPile2Line,
    bullets: [
      "Global public charging points up 55% in 2023",
      "350kW ultra-fast is becoming the new standard",
      "Wireless charging pilots in major cities",
      "Vehicle-to-grid integration accelerating",
      "Smart charging with demand response",
    ],
  },
];

export default function Products() {
  return (
    <main className="pt-32 space-y-20 bg-white">
      <section id="overview" className="pt-12">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Our Products"
            description="Comprehensive energy solutions engineered for maximum efficiency, reliability, and sustainability."
          />
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-lg font-semibold text-center mb-6">
              Technology Leadership & Product Range
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {productStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      <section id="categories" className="py-4">
        <LayoutContainer className="space-y-10">
          <SectionHeading
            title="Product Categories"
            description="Every platform integrates seamlessly with VoltHub smart controls."
          />
          <div className="grid lg:grid-cols-2 gap-6">
            {categoryCards.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className={`text-white p-8 rounded-3xl bg-linear-to-br ${category.gradient}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <category.icon className="text-4xl text-secondary" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-white/90">
                  {category.items.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
                <p className="mt-6 text-secondary font-semibold text-lg">
                  {category.metric}
                </p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section id="featured" className="bg-gray-50 py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Featured Products"
            description="Modular kits tailored for residential, commercial, and utility-scale deployments."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col card-hover"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <product.icon className="text-2xl text-primary" />
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 flex-1">
                    {product.specs.map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs">
                        <span className="text-gray-500">{label}:</span>
                        <span className="font-medium text-gray-700">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    {product.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Compare Products"
            description="Select any combination to benchmark power, efficiency, and ROI."
          />
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-semibold mb-4">Select Products</h4>
              <div className="space-y-3 text-sm text-gray-700">
                {[
                  "Solar Street Light",
                  "Home Solar System",
                  "EV Fast Charger",
                  "Battery Storage",
                ].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-primary" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              <button className="w-full mt-6 bg-secondary text-black py-2 rounded-xl font-semibold hover:bg-yellow-300 transition-colors">
                Compare Selected
              </button>
            </div>
            <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center text-gray-500">
              <RiScales3Line className="text-4xl mb-4" />
              <p>Select products on the left to display a detailed comparison.</p>
            </div>
          </div>
        </LayoutContainer>
      </section>

      <section className="bg-linear-to-br from-blue-50 to-green-50 py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading title="Renewable Energy Technology Trends" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyTrends.map((trend) => (
              <div key={trend.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <trend.icon className="text-3xl text-primary mb-4" />
                <h3 className="font-semibold mb-4">{trend.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {trend.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm text-sm text-gray-600">
              <RiFlashlightLine className="text-primary" />
              Data sources: IRENA, IEA, BloombergNEF, Wood Mackenzie 2024 reports
            </span>
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}

