"use client";

import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import {
  RiCheckLine,
  RiChargingPile2Line,
  RiPlugLine,
  RiFlashlightLine,
  RiToolsLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiMapPinLine,
} from "react-icons/ri";

export default function EVChargingSolutions() {
  return (
    <main className="pt-10">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20charging%20installation%20site%20with%20professional%20technicians%20installing%20multiple%20EV%20charging%20stations%2C%20clean%20commercial%20setting%2C%20advanced%20charging%20infrastructure%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20service%20quality&width=1920&height=1080&seq=evservice001&orientation=landscape')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <LayoutContainer className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-orbitron">
              <span className="gradient-text">EV Charging Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Complete charging infrastructure from design to deployment. We
              provide end-to-end EV charging solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-secondary to-yellow-400 text-black px-10 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 glow-effect"
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
              title="Comprehensive EV Charging Services"
              description="From initial consultation to ongoing maintenance, we handle every aspect of your EV charging infrastructure"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RiMapPinLine,
                title: "Site Assessment & Design",
                desc: "Electrical load analysis, optimal placement strategies, and custom system design",
                features: [
                  "Electrical capacity evaluation",
                  "Traffic flow analysis",
                  "Accessibility compliance",
                  "Future expansion planning",
                ],
              },
              {
                icon: RiShieldCheckLine,
                title: "Permit & Code Compliance",
                desc: "All regulatory approvals and code compliance handled by our expert team",
                features: [
                  "Building permit applications",
                  "Electrical code compliance",
                  "ADA accessibility standards",
                  "Utility coordination",
                ],
              },
              {
                icon: RiToolsLine,
                title: "Professional Installation",
                desc: "Certified technicians ensure quality installation with industry best practices",
                features: [
                  "NABCEP certified installers",
                  "EVITP trained technicians",
                  "Quality assurance checks",
                  "Safety-first approach",
                ],
              },
              {
                icon: RiPlugLine,
                title: "Network Integration",
                desc: "OCPP 2.0 compatible smart charging with cloud-based management",
                features: [
                  "OCPP 2.0 protocol support",
                  "Cloud-based monitoring",
                  "Remote diagnostics",
                  "Fleet management integration",
                ],
              },
              {
                icon: RiCustomerService2Line,
                title: "Maintenance & Support",
                desc: "24/7 monitoring and rapid response maintenance services",
                features: [
                  "24/7 technical support",
                  "Preventive maintenance",
                  "Rapid response service",
                  "Performance optimization",
                ],
              },
              {
                icon: RiFlashlightLine,
                title: "Payment Solutions",
                desc: "Multiple payment options including RFID, mobile app, and credit cards",
                features: [
                  "RFID card readers",
                  "Mobile app integration",
                  "Credit card terminals",
                  "Subscription management",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-100 rounded-full">
                  <service.icon className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-sm">
                      <RiCheckLine className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Charging Levels & Pricing */}
      <section className="py-20">
        <LayoutContainer>
          <div className="text-center mb-16">
            <SectionHeading
              title="Charging Solutions & Pricing"
              description="Choose the right charging solution for your needs"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-600 text-white p-6 text-center">
                <RiChargingPile2Line className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Level 2 AC</h3>
                <p className="text-blue-100">7.2-22kW Charging</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $2,500 - $6,500
                  </div>
                  <p className="text-gray-600">Per unit installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Perfect for residential & workplace",
                    "4-8 hour full charge time",
                    "240V AC installation",
                    "WiFi & app connectivity",
                    "5-year warranty included",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
                >
                  Get Level 2 Quote
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500">
              <div className="bg-green-600 text-white p-6 text-center">
                <RiChargingPile2Line className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">DC Fast Charging</h3>
                <p className="text-green-100">50-150kW Rapid Charging</p>
                <span className="inline-block mt-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    $25,000 - $85,000
                  </div>
                  <p className="text-gray-600">Per unit installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Ideal for commercial & public use",
                    "20-40 minute fast charge",
                    "CCS & CHAdeMO compatible",
                    "Network management included",
                    "3-year warranty + support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-green-700 transition-colors"
                >
                  Get DC Fast Quote
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-purple-600 text-white p-6 text-center">
                <RiChargingPile2Line className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Ultra-Fast</h3>
                <p className="text-purple-100">350kW+ Premium Speed</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    $150,000 - $350,000
                  </div>
                  <p className="text-gray-600">Per unit installed</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Highway & fleet applications",
                    "10-15 minute ultra-fast charge",
                    "Future-proof technology",
                    "Premium support package",
                    "Extended warranty options",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <RiCheckLine className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-purple-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-purple-700 transition-colors"
                >
                  Get Ultra-Fast Quote
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
              title="Why Choose VoltHub for EV Charging"
              description="Industry-leading expertise and unmatched service quality"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "500+",
                label: "Installations Completed",
                desc: "Successfully deployed across commercial and residential properties",
              },
              {
                stat: "98.5%",
                label: "Customer Satisfaction",
                desc: "Rated excellent by our clients for quality and service",
              },
              {
                stat: "24/7",
                label: "Support Available",
                desc: "Round-the-clock technical support and monitoring",
              },
              {
                stat: "15+",
                label: "Years Experience",
                desc: "Proven track record in EV infrastructure development",
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <LayoutContainer>
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Install EV Charging?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get a free consultation and quote for your EV charging
              infrastructure project
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

