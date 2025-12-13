"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import BackToTopButton from "@/components/common/BackToTopButton";
import {
  RiUserLine,
  RiBuildingLine,
  RiGlobalLine,
  RiPlantLine,
  // RiCommunityLine,
  RiArrowRightLine,
} from "react-icons/ri";

const sectors = [
  {
    id: "residential",
    title: "Residential",
    description:
      "Power your home with reliable solar energy storage and backup systems. From small backup kits to complete home energy independence.",
    href: "/sectors/residential" as Route,
    icon: RiUserLine,
    image: "/HomeBanner/homebatt.png",
    features: [
      "Energy Storage Systems",
      "Solar Street Lights",
      "EV Charging",
      "Backup Power Solutions",
    ],
    color: "from-primary to-accent",
    bgColor: "bg-gradient-to-br from-primary/10 to-accent/10",
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Power your business with reliable solar energy storage and EV charging infrastructure. From small offices to large commercial establishments.",
    href: "/sectors/commercial" as Route,
    icon: RiBuildingLine,
    image: "/HomeBanner/commercial.png",
    features: [
      "Scalable Storage Systems",
      "Commercial EV Charging",
      "Solar Street Lighting",
      "Cost Reduction Solutions",
    ],
    color: "from-accent to-primary",
    bgColor: "bg-gradient-to-br from-accent/10 to-primary/10",
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "High-capacity energy storage systems for factories and large-scale operations. Maximize energy efficiency and ensure uninterrupted power.",
    href: "/sectors/industrial" as Route,
    icon: RiGlobalLine,
    image: "/HomeBanner/banner3.jpg",
    features: [
      "Large-Scale Storage",
      "Industrial EV Charging",
      "Microgrid Systems",
      "Enterprise Solutions",
    ],
    color: "from-primary to-emerald-600",
    bgColor: "bg-gradient-to-br from-primary/10 to-emerald-600/10",
  },
  {
    id: "rural-projects",
    title: "Rural Projects",
    description:
      "Bringing reliable power to rural communities. Solar street lighting, off-grid power systems, and EV charging for remote areas.",
    href: "/sectors/rural-projects" as Route,
    icon: RiPlantLine,
    image: "/aboutimages/solarpanels.jpg",
    features: [
      "Off-Grid Systems",
      "Rural Electrification",
      "Solar Street Lights",
      "Community Power",
    ],
    color: "from-emerald-600 to-primary",
    bgColor: "bg-gradient-to-br from-emerald-600/10 to-primary/10",
  },
//   {
//     id: "smart-cities",
//     title: "Smart Cities",
//     description:
//       "Integrated energy infrastructure for modern cities. Street lighting, EV charging networks, and microgrid systems for sustainable urban development.",
//     href: "/sectors/smart-cities" as Route,
//     icon: RiCommunityLine,
//     image: "/HomeBanner/banner4.png",
//     features: [
//       "Smart Street Lighting",
//       "EV Charging Networks",
//       "Microgrid Systems",
//       "Urban Infrastructure",
//     ],
//     color: "from-secondary to-primary",
//     bgColor: "bg-gradient-to-br from-secondary/10 to-primary/10",
//   },
];

export default function SectorsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 min-h-[300px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/HomeBanner/banner1.png"
            alt="Energy Solutions by Sector"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />
        <div className="relative z-20 px-2 md:px-16 lg:px-24">
          <LayoutContainer className="h-full flex flex-col justify-center gap-4 text-white pt-20">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center md:text-left">
                Energy Solutions by Sector
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-center md:text-left">
                Discover tailored energy solutions for every sector. From residential
                homes to smart cities, we provide comprehensive energy infrastructure
                that powers your future.
              </p>
            </div>
          </LayoutContainer>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24 bg-white">
        <LayoutContainer>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <SectionHeading
              title="Choose Your Sector"
              description="Explore our specialized solutions designed for different sectors and applications"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sector) => (
              <Link
                key={sector.id}
                href={sector.href}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${sector.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-full ${sector.bgColor} backdrop-blur-sm`}>
                      <sector.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {sector.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${sector.color}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Explore Solutions</span>
                    <RiArrowRightLine className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-slate-50">
        <LayoutContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Comprehensive Energy Solutions"
              description="We provide end-to-end energy solutions across all sectors"
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Energy Storage",
                  description:
                    "Advanced battery storage systems for reliable backup power and energy independence.",
                },
                {
                  title: "EV Charging",
                  description:
                    "Complete EV charging infrastructure from residential to commercial and public networks.",
                },
                {
                  title: "Solar Solutions",
                  description:
                    "Solar panels, street lighting, and integrated systems for sustainable energy generation.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
                >
                  <h4 className="text-xl font-semibold mb-3 text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary to-primary/80 text-white">
        <LayoutContainer>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Not Sure Which Sector Fits You?
            </h2>
            <p className="text-lg text-white/90">
              Contact us for a free consultation and we&apos;ll help you find the perfect
              energy solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=consultation"
                className="bg-secondary text-black px-8 py-4 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                View All Products
              </Link>
            </div>
          </div>
        </LayoutContainer>
      </section>

      <BackToTopButton />
    </main>
  );
}

