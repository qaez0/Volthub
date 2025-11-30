"use client";

import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import {
  RiCheckLine,
  RiSunLine,
  RiHomeLine,
  RiBuildingLine,
  RiPlantLine,
  RiToolsLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiBarChartLine,
  RiPlugLine,
} from "react-icons/ri";

export default function SolarInstallation() {
  return (
    <main className="pt-10">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=professional%20solar%20panel%20installation%20team%20working%20on%20residential%20rooftop%2C%20modern%20house%20with%20blue%20solar%20panels%20being%20installed%2C%20safety%20equipment%2C%20professional%20installation%20process%2C%20clear%20blue%20sky%2C%20high-quality%20workmanship&width=1920&height=1080&seq=solarservice001&orientation=landscape')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-green-900/90 via-green-800/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <LayoutContainer className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-orbitron">
              <span className="gradient-text">Solar Energy Installation</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Turn-key solar solutions from consultation to connection. We
              deliver professional solar installations with industry-leading
              warranties and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-linear-to-r from-secondary to-yellow-400 text-black px-10 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 glow-effect"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:bg-white/30"
              >
                View All Services
              </Link>
            </div>
          </LayoutContainer>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <LayoutContainer>
          <div className="text-center mb-16">
            <SectionHeading
              title="Complete Solar Installation Services"
              description="From energy audit to grid connection, we handle every step of your solar journey"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RiBarChartLine,
                title: "Energy Audit & Design",
                desc: "Custom system sizing and ROI analysis tailored to your energy needs",
                features: [
                  "Comprehensive energy assessment",
                  "Optimal system sizing",
                  "ROI and payback analysis",
                  "Shading and orientation analysis",
                ],
              },
              {
                icon: RiShieldCheckLine,
                title: "Financing Assistance",
                desc: "Solar loans, leases, and incentive guidance to make solar affordable",
                features: [
                  "Solar loan programs",
                  "Lease and PPA options",
                  "Tax credit guidance",
                  "Rebate applications",
                ],
              },
              {
                icon: RiToolsLine,
                title: "Professional Installation",
                desc: "NABCEP certified installers ensure quality and safety",
                features: [
                  "NABCEP certified team",
                  "OSHA safety compliance",
                  "Quality assurance checks",
                  "Clean installation process",
                ],
              },
              {
                icon: RiPlugLine,
                title: "Grid Interconnection",
                desc: "Utility coordination and net metering setup for seamless integration",
                features: [
                  "Utility application handling",
                  "Net metering setup",
                  "Inspection coordination",
                  "System activation",
                ],
              },
              {
                icon: RiSunLine,
                title: "Performance Monitoring",
                desc: "Real-time system monitoring and optimization for maximum output",
                features: [
                  "Real-time monitoring app",
                  "Performance alerts",
                  "Energy production reports",
                  "System optimization",
                ],
              },
              {
                icon: RiCustomerService2Line,
                title: "Warranty & Maintenance",
                desc: "25-year performance guarantee with ongoing maintenance support",
                features: [
                  "25-year performance warranty",
                  "12-year product warranty",
                  "Preventive maintenance",
                  "Rapid repair service",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-green-100 rounded-full">
                  <service.icon className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-sm">
                      <RiCheckLine className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* System Types & Pricing */}
      <section className="py-20">
        <LayoutContainer>
          <div className="text-center mb-16">
            <SectionHeading
              title="Solar Solutions for Every Need"
              description="From residential rooftops to utility-scale installations"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-yellow-500 text-white p-6 text-center">
                <RiHomeLine className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Residential</h3>
                <p className="text-yellow-100">5-20kW Home Systems</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    $1.80 - $2.50
                  </div>
                  <p className="text-gray-600">Per Watt installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Perfect for single-family homes",
                    "5-20kW system capacity",
                    "7,500-28,000 kWh/year",
                    "6-8 year ROI period",
                    "25-year performance warranty",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold text-center hover:bg-yellow-600 transition-colors"
                >
                  Get Residential Quote
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-500">
              <div className="bg-orange-600 text-white p-6 text-center">
                <RiBuildingLine className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Commercial</h3>
                <p className="text-orange-100">50-500kW Business Systems</p>
                <span className="inline-block mt-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    $1.50 - $2.00
                  </div>
                  <p className="text-gray-600">Per Watt installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Ideal for businesses & offices",
                    "50-500kW system capacity",
                    "Significant energy savings",
                    "5-7 year ROI period",
                    "Comprehensive maintenance",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-orange-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-orange-700 transition-colors"
                >
                  Get Commercial Quote
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-red-600 text-white p-6 text-center">
                <RiPlantLine className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Utility-Scale</h3>
                <p className="text-red-100">1MW+ Large Projects</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    $1.20 - $1.60
                  </div>
                  <p className="text-gray-600">Per Watt installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Large-scale solar farms",
                    "1MW+ system capacity",
                    "Maximum energy production",
                    "4-6 year ROI period",
                    "Enterprise support package",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-red-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-red-700 transition-colors"
                >
                  Get Utility Quote
                </Link>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <LayoutContainer>
          <div className="text-center mb-16">
            <SectionHeading
              title="Why Choose VoltHub for Solar"
              description="Industry-leading expertise and proven track record"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "2,500+",
                label: "Systems Installed",
                desc: "Successfully deployed across residential and commercial properties",
              },
              {
                stat: "22.5%",
                label: "Panel Efficiency",
                desc: "Premium monocrystalline PERC technology for maximum output",
              },
              {
                stat: "25 Years",
                label: "Performance Warranty",
                desc: "Industry-leading warranty coverage for peace of mind",
              },
              {
                stat: "98.5%",
                label: "Customer Satisfaction",
                desc: "Rated excellent by our clients for quality and service",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary font-orbitron mb-2">
                  {item.stat}
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-green-600 to-green-800 text-white">
        <LayoutContainer>
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get a free consultation and quote for your solar energy
              installation project
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors whitespace-nowrap"
              >
                View All Services
              </Link>
            </div>
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}

