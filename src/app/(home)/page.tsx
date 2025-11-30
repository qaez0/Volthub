"use client";

import LayoutContainer from "@/components/layout/LayoutContainer";
import Link from "next/link";
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiBatteryChargeLine,
  RiCalculatorLine,
  RiLeafLine,
  RiSunLine,
  RiFlashlightLine,
  RiHomeGearLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiSpeedUpLine,
  RiPlantLine,
} from "react-icons/ri";
import ScrollAnimations from "@/components/home/ScrollAnimations";
import CarouselBanner from "@/components/home/CarouselBanner";

const heroStats = [
  { label: "MW Installed", value: "500+", color: "text-secondary" },
  { label: "CO₂ Tons Reduced", value: "15K", color: "text-accent" },
  { label: "Lives Impacted", value: "100K+", color: "text-primary" },
];

const performanceCards = [
  {
    title: "Solar Generation",
    subtitle: "Real-time monitoring",
    icon: RiSunLine,
    accent: "bg-secondary text-black",
    value: "2.5 MW",
  },
  {
    title: "Energy Storage",
    subtitle: "Battery capacity",
    icon: RiBatteryChargeLine,
    accent: "bg-emerald-700 text-white",
    value: "1.8 MWh",
  },
  {
    title: "CO₂ Savings",
    subtitle: "This month",
    icon: RiLeafLine,
    accent: "bg-green-500 text-white",
    value: "125 tons",
  },
];

const productShowcase = [
  {
    title: "Residential Energy Storage",
    description: "Smart home battery systems for energy independence",
    icon: RiHomeGearLine,
    image: "https://readdy.ai/api/search-image?query=modern%20home%20battery%20storage%20system%20solar%20panels&width=600&height=400",
    backgroundImage: "/HomeBanner/30KW-CCS2-DC-charger.jpg",
    features: ["5-15 kWh Capacity", "Smart Monitoring", "10+ Year Warranty"],
  },
  {
    title: "Commercial & Industrial ESS",
    description: "Scalable solutions for businesses and factories",
    icon: RiFlashlightLine,
    image: "https://readdy.ai/api/search-image?query=industrial%20energy%20storage%20system%20factory&width=600&height=400",
    backgroundImage: "/HomeBanner/30KW-CCS2-DC-charger.jpg",
    features: ["100kW-5MW Range", "Grid Integration", "24/7 Support"],
  },
  {
    title: "EV Charging Infrastructure",
    description: "Fast charging networks for electric vehicles",
    icon: RiSpeedUpLine,
    image: "https://readdy.ai/api/search-image?query=electric%20vehicle%20charging%20station%20modern&width=600&height=400",
    backgroundImage: "/HomeBanner/30KW-CCS2-DC-charger.jpg",
    features: ["Fast Charging", "Smart Grid", "Multi-Vehicle"],
  },
];

const features = [
  {
    icon: RiShieldCheckLine,
    title: "Enterprise-Grade Reliability",
    description: "Built with industrial standards for maximum uptime and durability",
  },
  {
    icon: RiGlobalLine,
    title: "Global Deployment",
    description: "Proven solutions deployed across 25+ countries worldwide",
  },
  {
    icon: RiPlantLine,
    title: "Sustainable Impact",
    description: "Measurable reduction in carbon footprint from day one",
  },
];

const carouselSlides = [
  {
    id: 1,
    title: "Powering Tomorrow, Today",
    subtitle: "Smart Power. Clean Future.",
    description:
      "VoltHub delivers next-generation electric and renewable energy solutions—from smart solar systems to EV charging infrastructure—for a cleaner, more resilient planet.",
    image: "/HomeBanner/89.png",
    backgroundImage: "/HomeBanner/banner1.jpg",
    showimg: false,
    descriptionClassName: "ml-[50%] w-1/2  space-y-6 text-white",
    buttonText: "Explore Products",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-primary/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
  {
    id: 2,
    title: "Residential Energy Storage",
    subtitle: "Energy Independence",
    description:
      "Smart home battery systems that store solar energy for round-the-clock power. Reduce your electricity bills and achieve energy independence with our cutting-edge residential storage solutions.",
    image: "/HomeBanner/banner2light.png",
    backgroundImage: "/HomeBanner/banner2.png",
    showimg: true,
    imageClassName: "absolute bottom-0 right-0 h-full w-1/2 mb-[-170px]",
    descriptionClassName: "space-y-6 text-white z-[100]",
    buttonText: "View Residential Solutions",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-emerald-700/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
  {
    id: 3,
    title: "Commercial & Industrial ESS",
    subtitle: "Enterprise Solutions",
    description:
      "Scalable energy storage systems for businesses and factories. Maximize energy efficiency, reduce costs, and ensure uninterrupted power with our industrial-grade storage solutions.",
    image:
      "https://readdy.ai/api/search-image?query=industrial%20energy%20storage%20system%20factory%20warehouse%2C%20large-scale%20battery%20installation%2C%20commercial%20solar%20panels%2C%20modern%20industrial%20facility%2C%20sustainable%20business%20energy&width=1920&height=1080&seq=hero003&orientation=landscape",
    backgroundImage: "/HomeBanner/banner3.jpg",
    buttonText: "Learn About C&I Solutions",
    buttonLink: "/solutions",
    gradient: "bg-gradient-to-br from-accent/90 via-primary/70 to-transparent",
  },
  {
    id: 4,
    title: "EV Charging Infrastructure",
    subtitle: "Future of Mobility",
    description:
      "Fast charging networks for electric vehicles. Build comprehensive EV charging infrastructure with smart grid integration and seamless user experience.",
    image:
      "https://readdy.ai/api/search-image?query=electric%20vehicle%20charging%20station%20network%2C%20modern%20EV%20charging%20infrastructure%2C%20smart%20grid%20technology%2C%20sustainable%20transportation%2C%20clean%20mobility%20future&width=1920&height=1080&seq=hero004&orientation=landscape",
    backgroundImage: "/HomeBanner/banner4.webp",
    buttonText: "Explore EV Solutions",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-secondary/80 via-primary/70 to-transparent",
  },
];

export default function Home() {

  return (
    <main className="flex flex-col">
      <ScrollAnimations />
      {/* Carousel Banner */}
      <CarouselBanner slides={carouselSlides} autoPlay={true} autoPlayInterval={6000} />

      {/* Product Showcase Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <LayoutContainer>
          <div className="text-center space-y-4 mb-16 reveal-on-scroll">
            <p className="text-sm font-semibold tracking-[0.3em] text-green-700 uppercase">
              Our Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Explore and adopt new solutions for safe and efficient energy storage
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Driving digital energy development, reducing the cost of energy acquisition, and lowering Earth's temperature.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productShowcase.map((product, index) => (
              <div
                key={product.title}
                className="stagger-card product-card rounded-2xl overflow-hidden shadow-lg group relative"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  backgroundImage: `url(${product.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="text-2xl text-white" />
                    </div>
                  </div> */}
                  <div className="p-6 bg-white/80 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <RiArrowRightLine className="text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/products"
                      className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group/link"
                    >
                      Learn More
                      <RiArrowRightLine className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-white">
        <LayoutContainer>
          <div className="text-center space-y-4 mb-16 reveal-on-scroll">
            <p className="text-sm font-semibold tracking-[0.3em] text-green-700 uppercase">
              Why VoltHub
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Clean energy without compromise
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From ultra-efficient solar modules to AI-driven grid intelligence,
              we engineer every layer of the renewable ecosystem to deliver
              measurable impact on day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="stagger-card p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg card-hover border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
        <LayoutContainer>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { label: "MW Installed", value: "500+", icon: RiSunLine },
              { label: "CO₂ Tons Reduced", value: "15K", icon: RiLeafLine },
              { label: "Lives Impacted", value: "100K+", icon: RiGlobalLine },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="stagger-card reveal-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                  <stat.icon className="text-4xl" />
                </div>
                <div className="text-5xl font-bold font-orbitron mb-2 counter" data-target={stat.value}>
                  {stat.value}
                </div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}
