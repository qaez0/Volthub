"use client";

import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import Link from "next/link";
import {
  RiBatteryChargeLine,
  RiChargingPile2Line,
  RiCheckLine,
  RiBuilding2Line,
} from "react-icons/ri";

const storageSystems = [
  {
    name: "Off-Grid Power Generation System",
    kWh: "40kWh",
    ratedPower: "20KW/AC 380V/220V",
    battery: "40.96kWh",
    solarPanel: "670W*30PCS",
    price: "₱1,823,684.10",
    description:
      "Small commercial / remote facility. Can power 5-10 small houses or a water refilling station, rice mill, small cold room.",
    image: "/Sector/sampleproducts/12.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "60kWh",
    ratedPower: "30KW/AC 380V/220V",
    battery: "61.4kWh",
    solarPanel: "670W*40PCS",
    price: "₱2,694,050.62",
    description:
      "Small community or larger business. Can power a small resort (10+ rooms, kitchen, bar, pool pump).",
    image: "/Product/cabinet/item4.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "100kWh",
    ratedPower: "50KW/AC 380V/220V",
    battery: "100.3kWh",
    solarPanel: "670W*72PCS",
    price: "₱4,593,349.12",
    description:
      "Microgrid for a barangay center or campus. Suitable for school campus, barangay center + streetlights + market area.",
    image: "/Sector/sampleproducts/13.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "215kWh",
    ratedPower: "100KW/AC 400V/220V",
    battery: "215.04kWh",
    solarPanel: "670W*144PCS",
    price: "₱7,754,538.15",
    description:
      "Village / industrial-scale. Can supply tens of houses plus businesses, or one small industrial plant.",
    image: "/Sector/sampleproducts/14.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "466kWh",
    ratedPower: "220KW/AC 400V/220V",
    battery: "465.8kWh",
    solarPanel: "670W*288PCS",
    price: "₱16,173,481.20",
    description:
      "Mini power plant for a small town center or big factory. A town center: municipal hall, market, street lighting, plus many nearby shops.",
    image: "/Sector/sampleproducts/15.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "783kWh",
    ratedPower: "300KW/AC 400V/220V",
    battery: "783.6kWh",
    solarPanel: "670W*444PCS",
    price: "₱26,311,107.50",
    description:
      "Village or island grid. Can act as the main power plant for a whole small island barangay with a few hundred households.",
      image: "/Sector/sampleproducts/16.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "1075kWh",
    ratedPower: "500KW/AC 400V/220V",
    battery: "1075.2kWh",
    solarPanel: "670W*728PCS",
    price: "₱42,239,802.20",
    description:
      "Small utility level / industrial park. The main power for a small island town that currently relies on diesel gensets.",
      image: "/Sector/sampleproducts/17.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "1800kWh",
    ratedPower: "1000KW/AC 400V/220V",
    battery: "1806.3kWh",
    solarPanel: "670W*1484PCS",
    price: "₱71,207,141.30",
    description:
      "Main power plant for a whole town or large island. Can power an entire island town or large industrial estate, cutting diesel consumption by 60-90%.",
      image: "/Sector/sampleproducts/17.png",
  },
  {
    name: "Off-Grid Power Generation System",
    kWh: "2700kWh",
    ratedPower: "1000KW/AC 400V/220V",
    battery: "2700.9kWh",
    solarPanel: "670W*1484PCS",
    price: "₱85,828,342.80",
    description:
      "Maximum independence from diesel, with longer night-time coverage. For projects aiming for maximum independence from diesel.",
      image: "/Sector/sampleproducts/17.png",
  },
];

const evChargers = [
  {
    model: "DPEV-160k",
    type: "160 kW Single-gun DC Charging Pile",
    price: "₱573,750.00",
    description:
      "High-power fast charger. Perfect for premium charging hubs, expressway service areas, sites serving EVs that support higher charging power.",
    image: "/Product/EV/53.png",
  },
  {
    model: "DPEV-400k",
    type: "400 kW Single-gun DC Charging Pile",
    price: "₱1,030,625.00",
    description:
      "Ultra-fast DC charger. For flagship highway stations, bus/truck depots needing very high power. Allows very short charging stops.",
    image: "/Product/EV/64.png",
  },
];

export default function IndustrialSector() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <Image
          src="/HomeBanner/banner3.jpg"
          alt="Industrial Energy Solutions"
          width={1600}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          <LayoutContainer className="h-full flex flex-col justify-center gap-4 text-white pt-32">
           
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Industrial Energy Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Large-scale power generation systems for factories, industrial parks, 
                and utility-scale projects. From 40kWh to 2.7MWh capacity.
              </p>
            </div>
          </LayoutContainer>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <LayoutContainer>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionHeading
              title="Industrial-Grade Power Systems"
              description="Our industrial solutions are designed for factories, manufacturing plants, 
              industrial parks, and utility-scale projects requiring reliable, high-capacity power."
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: RiBuilding2Line,
                  title: "High Capacity",
                  desc: "Systems from 40kWh to 2.7MWh for large-scale operations",
                },
                {
                  icon: RiBatteryChargeLine,
                  title: "Three-Phase Power",
                  desc: "380/400V three-phase output for industrial equipment",
                },
                {
                  icon: RiChargingPile2Line,
                  title: "Fleet Charging",
                  desc: "Ultra-fast EV charging for industrial fleets and depots",
                },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Storage Systems Section */}
      <section className="py-16 bg-slate-50">
        <LayoutContainer>
          <SectionHeading
            title="Off-Grid Power Generation Systems"
            description="Mini power plants and microgrids for industrial applications"
          />
          <div className="space-y-6 mt-12">
            {/* Small to Medium Systems */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">
                Small to Medium Industrial (40kWh - 215kWh)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {storageSystems.slice(0, 4).map((system, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
                  >
                    {system.image && (
                      <div className="w-full h-40 relative bg-slate-100">
                        <Image
                          src={system.image}
                          alt={system.kWh}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{system.kWh}</h4>
                        <span className="text-sm font-bold text-primary">{system.price}</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Power:</span>
                          <span className="font-medium">{system.ratedPower}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Battery:</span>
                          <span className="font-medium">{system.battery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Panels:</span>
                          <span className="font-medium">{system.solarPanel}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 pt-2 border-t border-slate-100">
                        {system.description}
                      </p>
                      <Link
                        href="/products?category=cabinet"
                        className="block w-full text-center bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Systems */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">
                Large Industrial & Utility Scale (466kWh - 2700kWh)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storageSystems.slice(4).map((system, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
                  >
                    {system.image && (
                      <div className="w-full h-40 relative bg-slate-100">
                        <Image
                          src={system.image}
                          alt={system.kWh}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{system.kWh}</h4>
                        <span className="text-sm font-bold text-primary">{system.price}</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Power:</span>
                          <span className="font-medium">{system.ratedPower}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Battery:</span>
                          <span className="font-medium">{system.battery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Panels:</span>
                          <span className="font-medium">{system.solarPanel}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 pt-2 border-t border-slate-100">
                        {system.description}
                      </p>
                      <Link
                        href="/products?category=cabinet"
                        className="block w-full text-center bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* EV Charging Section */}
      <section className="py-16 bg-white">
        <LayoutContainer>
          <SectionHeading
            title="Industrial EV Charging Solutions"
            description="Ultra-fast charging for industrial fleets, buses, and heavy-duty vehicles"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {evChargers.map((charger, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl shadow-lg p-8 border border-slate-100"
              >
                {charger.image && (
                  <div className="mb-6 w-full h-64 relative rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={charger.image}
                      alt={charger.type}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{charger.type}</h3>
                <p className="text-sm text-slate-600 mb-4">{charger.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-500">Model: {charger.model}</span>
                  <span className="text-3xl font-bold text-primary">
                    {charger.price}
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Installation
                </Link>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-slate-50">
        <LayoutContainer>
          <SectionHeading
            title="Industrial Applications"
            description="Perfect for various industrial and utility-scale projects"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Manufacturing Plants",
                desc: "Power factories, workshops, and production facilities with reliable three-phase power.",
              },
              {
                title: "Industrial Parks",
                desc: "Microgrid solutions for entire industrial estates and export zones.",
              },
              {
                title: "Mining Operations",
                desc: "Remote mining camps and operations requiring reliable off-grid power.",
              },
              {
                title: "Cold Storage Facilities",
                desc: "Large-scale cold storage and food processing plants.",
              },
              {
                title: "Rice Mills & Processing",
                desc: "Agricultural processing facilities requiring high-capacity power.",
              },
              {
                title: "Utility-Scale Projects",
                desc: "Island grids, small towns, and community power plants.",
              },
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <LayoutContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Choose Our Industrial Solutions"
              description="Built for reliability, scalability, and long-term performance"
            />
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Three-phase 380/400V output for industrial equipment",
                "Scalable from 40kWh to 2.7MWh capacity",
                "Can replace or reduce diesel generator dependency",
                "Professional installation and commissioning",
                "Long-term warranty and support",
                "ROI-focused with fuel cost savings",
                "24/7 monitoring and maintenance available",
                "Compliance with industrial safety standards",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <RiCheckLine className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <LayoutContainer>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ready to Power Your Industrial Facility?
            </h2>
            <p className="text-lg text-white/90">
              Get a free consultation and discover how our industrial solutions can reduce your power costs and improve reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-black px-8 py-4 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get Free Quote
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
    </main>
  );
}

