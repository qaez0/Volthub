"use client";

import LayoutContainer from "@/components/layout/LayoutContainer";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiBatteryChargeLine,
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
import HoverEffects from "@/components/home/HoverEffects";

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
      <HoverEffects />
      {/* Carousel Banner */}
      <CarouselBanner slides={carouselSlides} autoPlay={true} autoPlayInterval={6000} />

      {/* Featured Product Showcase */}
      <section className="section-spacing bg-gradient-to-br from-white via-gray-50 to-white">
        <LayoutContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Image */}
            <div className="reveal-on-scroll order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative image-hover-zoom card-hover-3d rounded-3xl overflow-hidden shadow-2xl bg-white p-8 lg:p-12">
                  <img
                    src="/HomeBanner/89.png"
                    alt="Residential Energy Storage System"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Right: Product Information */}
            <div className="space-y-6 reveal-on-scroll order-1 lg:order-2">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
                  Featured Product
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-primary">Residential</span>{" "}
                  <span className="text-accent">Energy Storage</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Smart home battery systems for energy independence. Store solar energy and reduce your electricity bills with our cutting-edge residential storage solutions.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: RiBatteryChargeLine, text: "5-15 kWh Capacity", color: "text-primary" },
                  { icon: RiSunLine, text: "Smart Monitoring", color: "text-accent" },
                  { icon: RiShieldCheckLine, text: "10+ Year Warranty", color: "text-green-600" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-primary/20"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}>
                      <feature.icon className="text-2xl" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover/feature:text-primary transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group magnetic-button glow-pulse"
                >
                  View Residential Energy Storage Products
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 group magnetic-button"
                >
                  Get Quote
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <RiShieldCheckLine className="text-2xl text-green-600" />
                  <span className="text-sm text-gray-600">Certified & Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiGlobalLine className="text-2xl text-primary" />
                  <span className="text-sm text-gray-600">Global Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiLeafLine className="text-2xl text-accent" />
                  <span className="text-sm text-gray-600">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Second Featured Product Showcase */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <LayoutContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Information */}
            <div className="space-y-6 reveal-on-scroll">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">
                  Premium Solution
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-accent">Advanced</span>{" "}
                  <span className="text-primary">Solar System</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  High-efficiency solar panels with integrated energy storage. Maximize your energy independence with our premium solar solutions designed for modern homes and businesses.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: RiSunLine, text: "High Efficiency Panels", color: "text-accent" },
                  { icon: RiFlashlightLine, text: "Integrated Storage", color: "text-primary" },
                  { icon: RiHomeGearLine, text: "Smart Energy Management", color: "text-green-600" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-accent/20"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}>
                      <feature.icon className="text-2xl" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover/feature:text-accent transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group magnetic-button glow-pulse"
                >
                  Explore Solar Energy Products
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 group magnetic-button"
                >
                  Request Demo
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <RiSunLine className="text-2xl text-accent" />
                  <span className="text-sm text-gray-600">25+ Year Lifespan</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiBatteryChargeLine className="text-2xl text-primary" />
                  <span className="text-sm text-gray-600">Energy Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiPlantLine className="text-2xl text-green-600" />
                  <span className="text-sm text-gray-600">Carbon Neutral</span>
                </div>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="reveal-on-scroll">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative image-hover-zoom card-hover-3d rounded-3xl overflow-hidden shadow-2xl bg-white p-8 lg:p-12">
                  <img
                    src="/HomeBanner/banner2light.png"
                    alt="Advanced Solar System"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Third Featured Product Showcase */}
      <section className="section-spacing bg-gradient-to-br from-white via-gray-50 to-white">
        <LayoutContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Image */}
            <div className="reveal-on-scroll order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-primary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative image-hover-zoom card-hover-3d rounded-3xl overflow-hidden shadow-2xl bg-white p-8 lg:p-12">
                  <img
                    src="/HomeBanner/homebatt.png"
                    alt="Home Battery Storage System"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-600/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Right: Product Information */}
            <div className="space-y-6 reveal-on-scroll order-1 lg:order-2">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-emerald-700 uppercase mb-4">
                  Home Energy Solution
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-emerald-700">Home Battery</span>{" "}
                  <span className="text-primary">Storage</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Compact and powerful home battery systems that seamlessly integrate with your solar panels. Store excess energy during the day and use it when you need it most, reducing your reliance on the grid.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: RiBatteryChargeLine, text: "Compact Design", color: "text-emerald-700" },
                  { icon: RiHomeGearLine, text: "Easy Installation", color: "text-primary" },
                  { icon: RiFlashlightLine, text: "Grid Integration", color: "text-accent" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-emerald-600/20"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/10 to-primary/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}>
                      <feature.icon className="text-2xl" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover/feature:text-emerald-700 transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-700 to-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group magnetic-button glow-pulse"
                >
                  View Home Battery Storage Products
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:text-white transition-all duration-300 hover:scale-105 group magnetic-button"
                >
                  Schedule Consultation
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <RiBatteryChargeLine className="text-2xl text-emerald-700" />
                  <span className="text-sm text-gray-600">Long Lasting</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiShieldCheckLine className="text-2xl text-primary" />
                  <span className="text-sm text-gray-600">Warranty Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiSpeedUpLine className="text-2xl text-accent" />
                  <span className="text-sm text-gray-600">Fast Setup</span>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Fourth Featured Product Showcase */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <LayoutContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Information */}
            <div className="space-y-6 reveal-on-scroll">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase mb-4">
                  Industrial Solution
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-secondary">Commercial</span>{" "}
                  <span className="text-primary">Energy Storage</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Large-scale energy storage solutions for commercial and industrial applications. Optimize your energy costs, ensure uninterrupted power supply, and reduce your carbon footprint with our enterprise-grade storage systems.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: RiFlashlightLine, text: "Scalable Capacity", color: "text-secondary" },
                  { icon: RiGlobalLine, text: "Enterprise Grade", color: "text-primary" },
                  { icon: RiSpeedUpLine, text: "Fast Response Time", color: "text-accent" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-secondary/20"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}>
                      <feature.icon className="text-2xl" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover/feature:text-secondary transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group magnetic-button glow-pulse"
                >
                  View Products
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105 group magnetic-button"
                >
                  Contact Sales
                  <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <RiFlashlightLine className="text-2xl text-secondary" />
                  <span className="text-sm text-gray-600">High Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiShieldCheckLine className="text-2xl text-primary" />
                  <span className="text-sm text-gray-600">Reliable & Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiGlobalLine className="text-2xl text-accent" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="reveal-on-scroll">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative image-hover-zoom card-hover-3d rounded-3xl overflow-hidden shadow-2xl bg-white p-8 lg:p-12">
                  <img
                    src="/HomeBanner/item4.png"
                    alt="Commercial Energy Storage System"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-secondary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </div>
            </div>
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
                className="stagger-card p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg card-hover-3d hover-lift border border-gray-100 group border-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-pulse">
                  <feature.icon className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-300 text-reveal">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
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
