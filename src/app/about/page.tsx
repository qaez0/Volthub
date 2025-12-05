import LayoutContainer from "@/components/layout/LayoutContainer"
import SectionHeading from "@/components/marketing/SectionHeading"
import LocationMapWrapper from "@/components/common/LocationMapWrapper"
import Image from "next/image"
import {
  //RiMedalLine,
  RiHandHeartLine,
} from "react-icons/ri"

const leadershipStats = [
  { label: "Top 5%", value: "Global Renewable Firms" },
  { label: "$2.8B", value: "Project Value Delivered" },
  // { label: "ISO Certified", value: "Quality & Environment" },
]

const marketInsights = [
  {
    title: "$1.8T",
    detail: "Global renewable market size (2024)",
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "30%",
    detail: "Global electricity from renewables",
    color: "text-green-600 bg-green-50",
  },
  {
    title: "85%",
    detail: "Solar cost reduction (2010-2024)",
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    title: "13.7M",
    detail: "Renewable energy jobs worldwide",
    color: "text-purple-600 bg-purple-50",
  },
]

const operationsHighlights = [
  {
    title: "Global Presence",
    description: "Operating in 25+ countries with 12 manufacturing facilities across Southeast Asia.",
    metric: "25+ Countries",
    subtext: "12 Manufacturing Facilities in Southeast Asia",
  },
  {
    title: "Expert Team",
    description: "450+ engineers, technicians, and consultants with deep clean-energy expertise.",
    metric: "450+ Experts",
    subtext: "85% with Advanced Degrees",
  },
  {
    title: "Industry Recognition",
    description: "Clean Energy Innovation Award, Solar Power World Top Contractor, ESA Excellence Award.",
    metric: "15+ Awards",
    subtext: "UN Global Compact Recognition",
  },
  {
    title: "Financial Performance",
    description: "$500M+ invested in R&D and 350% YoY revenue growth backed by leading investors.",
    metric: "$500M+ R&D",
    subtext: "350% YoY Growth",
  },
  {
    title: "Customer Excellence",
    description: "98.5% satisfaction, 24/7 support in 7 languages, average 4-hour response.",
    metric: "98.5% Rating",
    subtext: "50K+ Customers",
  },
]

const partnerships = [
  { name: "Tesla Energy", detail: "Battery Technology" },
  { name: "Microsoft Azure", detail: "Cloud & AI" },
  { name: "Schneider Electric", detail: "Grid Solutions" },
  { name: "ABB Group", detail: "Power Electronics" },
]

export default function About() {
  return (
    <main className="pt-32 bg-gray-50">
      {/* Overview Section */}
      <section id="overview" className="py-20">
        <LayoutContainer>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About VoltHub"
              title="Building the blueprint for a cleaner energy economy"
              align="center"
            />

            {/* Overview, Mission, Vision */}
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">OVERVIEW</h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Volthhub Electric Power Generation Services Corporation</span> is a
                  forward-looking energy technology company specializing in EV charging infrastructure, solar power
                  systems, and smart energy solutions. We provide end-to-end services—from design, engineering, and
                  installation to maintenance and system optimization—tailored for commercial, residential, and
                  industrial clients. With a strong commitment to sustainability, Volthub integrates clean energy
                  technologies such as solar-powered charging, battery storage, and intelligent energy management to
                  support the growing demand for renewable-powered transportation. Our goal is to empower communities
                  and businesses with reliable, efficient, and future-ready energy solutions that contribute to a
                  cleaner, smarter, and more sustainable Philippines.
                </p>
              </div>

              {/* Mission and Vision */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">MISSION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Volthhub Electric Power Generation Services Corporation</span> is
                    committed to revolutionizing the energy sector by delivering cutting-edge electronic solutions for
                    power generation. We specialize in sustainable, efficient, and smart energy technologies that
                    empower industries, homes, and communities with reliable, cost-effective electricity. Our mission is
                    to foster a cleaner energy future through the integration of renewable sources, smart grid
                    technology, and energy storage solutions.
                  </p>
                </div>

                <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">VISION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a global leader in electric power generation, pioneering advanced technologies that redefine
                    energy production. We aim to lead the transition to renewable energy, delivering smart, scalable
                    solutions that foster sustainability, enhance grid stability, and contribute to a brighter, cleaner
                    future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <LayoutContainer>
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">WHO WE ARE</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Volthub Electric Power Generation Services Corporation</span> is a
                progressive energy-technology company dedicated to advancing the future of clean power and sustainable
                transportation. We specialize in delivering integrated solutions—combining EV charging systems, solar
                power generation, and smart energy technologies—that empower communities, businesses, and cities to
                transition toward a greener, more efficient future.
                <br />
                <br />
                We believe in innovation with purpose: creating energy solutions that are reliable, accessible, and
                environmentally responsible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">WHAT WE ARE</h3>
              <p className="text-gray-700 leading-relaxed">
                We are a renewable energy and electric mobility solutions provider committed to building a cleaner,
                smarter, and more sustainable Philippines. Volthub bridges the gap between traditional energy systems
                and modern electric mobility by offering solar-integrated EV chargers, energy-efficient technologies,
                and future-ready infrastructures designed for rapid urban development.
              </p>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <LayoutContainer>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center gradient-text">WHAT WE DO</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                At Volthub, we provide end-to-end energy and mobility solutions through:
              </p>

              <div className="space-y-8">
                {/* EV Charging Infrastructure */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-lg text-gray-900">EV Charging Infrastructure</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Installation of AC and DC chargers</li>
                      <li>Solar-powered charging hubs</li>
                      <li>Smart metering and monitoring systems</li>
                      <li>Commercial, residential, and fleet solutions</li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden w-full md:w-80 flex-shrink-0">
                    <Image
                      src="/aboutimages/ev-charging.jpg"
                      alt="EV Charging Infrastructure"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Solar Power Systems */}
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-lg text-gray-900">Solar Power Systems</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Rooftop solar installations</li>
                      <li>Solar integration for charging stations</li>
                      <li>Solar farms for large-scale power supply</li>
                      <li>Engineering, procurement & construction (EPC) services</li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden w-full md:w-80 flex-shrink-0">
                    <Image
                      src="/aboutimages/solarpanels2.jpg"
                      alt="Solar Power Systems"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Smart Energy Technologies */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-lg text-gray-900">Smart Energy Technologies</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Energy management systems (EMS)</li>
                      <li>Battery storage and hybrid systems</li>
                      <li>Vehicle-to-Grid (V2G) development</li>
                      <li>Internet-of-Energy (IoE) innovations</li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden w-full md:w-80 flex-shrink-0">
                    <Image
                      src="/aboutimages/storagesystems.jpg"
                      alt="Smart Energy Technologies"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Technical Services */}
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-lg text-gray-900">Technical Services</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Preventive maintenance</li>
                      <li>System inspection and commissioning</li>
                      <li>Electrical & mechanical upgrades</li>
                      <li>Compliance support with building and government agencies</li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden w-full md:w-80 flex-shrink-0">
                    <Image
                      src="/aboutimages/workshop.jpg"
                      alt="Technical Services"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <LayoutContainer>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center gradient-text">HISTORY</h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The idea for Volthub was born out of the founders&apos; shared vision to address two urgent global
                  needs: the growth of electric mobility and the demand for renewable energy. Inspired by rapid EV
                  adoption and the environmental cost of fossil fuels, the team began designing solutions that merge
                  solar power with charging infrastructure.
                </p>

                <div className="my-6 rounded-xl overflow-hidden max-w-2xl mx-auto">
                  <Image
                    src="/aboutimages/factory.jpg"
                    alt="VoltHub Factory"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">January 2025 – Incorporation</h4>
                    <p>
                      Volthub Electric Power Generation Services Corporation was officially incorporated on January 17,
                      2025 in Taguig City, Philippines. The company was founded by David Zhang, Vincent Paul Lim Oo, and
                      Atty. Maria Evita R. Igot, combining expertise in energy systems, finance, and technology.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Early 2025 – Strategic Planning & Partnerships
                    </h4>
                    <p>
                      The team laid out its roadmap, focusing on the deployment of solar-powered EV hubs, large-scale
                      solar panel installations, advanced energy storage systems, and smart grid integration. Strategic
                      partnerships were established with renewable energy providers, solar technology innovators, and
                      local stakeholders to enhance capability in solar generation and accelerate the shift toward
                      cleaner, more sustainable mobility solutions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Mid 2025 – Pilot Development</h4>
                    <div className="flex flex-col md:flex-row gap-6 my-6 justify-center">
                      <div className="rounded-xl overflow-hidden w-full md:w-80">
                        <Image
                          src="/aboutimages/solarpanelsworkshop.jpg"
                          alt="Pilot Development"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden w-full md:w-80">
                        <Image
                          src="/aboutimages/unbuildedsolarpanels.jpg"
                          alt="Solar Panel Development"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <p>
                      Volthub began development of its first solar-powered EV charging prototypes, integrating
                      fast-charging technology with renewable energy storage solutions.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-bold text-gray-900 text-xl mb-4">Future Goals (2026 and beyond)</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Expansion of Solar-Integrated Charging Networks Nationwide
                      </h5>
                      <p>
                        Strengthen the rollout of EV charging stations across the Philippines powered by solar-energy
                        systems, reducing dependence on grid electricity and promoting sustainable mobility.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Development of Vehicle-to-Grid (V2G) Technology for Smart Cities
                      </h5>
                      <p>
                        Advance V2G capabilities that allow electric vehicles to store, discharge, and supply energy
                        back to the grid—supporting smart city infrastructure and grid stability.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Regional Expansion in Southeast Asia to Promote Renewable-Powered Transportation
                      </h5>
                      <p>
                        Position Volthub as a regional leader by expanding EV-charging infrastructure into neighboring
                        Southeast Asian countries, focusing on renewable-powered and smart-technology solutions.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Large-Scale Deployment and Innovation of Solar Panel Technologies
                      </h5>
                      <p className="mb-2">
                        Accelerate the adoption of advanced solar panel technologies to power EV chargers, office
                        facilities, and large commercial installations. This includes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Integrating high-efficiency mono-PERC and bifacial panels</li>
                        <li>Establishing solar farms dedicated for EV charging hubs</li>
                        <li>Investing in R&D for improved durability and efficiency in tropical climates</li>
                        <li>Partnering with local and global solar manufacturers for technology transfer</li>
                        <li>Supporting nationwide solar rooftop programs for cleaner, decentralized energy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Established:</p>
                      <p className="text-gray-700">January 17, 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Address:</p>
                      <p className="text-gray-700">
                        Unit 2503, High Street South Corporate Plaza Tower 2, Bonifacio Global City, Taguig
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-gray-900 mb-3">Incorporators:</p>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <span className="font-semibold">President/CEO:</span> Vincent Paul Lim Oo
                        </p>
                        <p>
                          <span className="font-semibold">Vice President/COO:</span> Atty. Maria Evita R. Igot
                        </p>
                      </div>
                    </div>
                    <div>
                      <LocationMapWrapper />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Market Position Section */}
      <section className="py-20 bg-gray-50">
        <LayoutContainer>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
                Market Position & Industry Leadership
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {leadershipStats.map((stat) => (
                  <div key={stat.label} className="text-center w-full sm:w-[calc(50%-2rem)]">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.label}</p>
                    <p className="text-gray-600">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Market Insights Section */}
      <section id="insights" className="py-20 bg-white">
        <LayoutContainer>
          <SectionHeading
            title="Renewable Energy Market Insights"
            description="Data courtesy of IRENA, IEA, BloombergNEF, and Wood Mackenzie 2024 reports."
            align="center"
          />
          <div className="flex flex-wrap gap-6 mt-12">
            {marketInsights.map((insight) => (
              <div
                key={insight.title}
                className={`p-6 rounded-xl text-center w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] ${insight.color}`}
              >
                <p className="text-3xl font-bold mb-2">{insight.title}</p>
                <p className="text-sm text-gray-600">{insight.detail}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Global Operations Section */}
      <section className="py-20 bg-gray-50">
        <LayoutContainer>
          <SectionHeading
            title="VoltHub Global Operations"
            description="High-performance delivery backed by engineering rigor and customer obsession."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-6 mt-12 mb-12">
            <div className="rounded-xl overflow-hidden w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
              <Image
                src="/aboutimages/solarstreetlight.jpg"
                alt="Solar Street Light"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
              <Image
                src="/aboutimages/solarstreetlightwithcctv.jpg"
                alt="Solar Street Light with CCTV"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
              <Image
                src="/aboutimages/solartrafficlight.jpg"
                alt="Solar Traffic Light"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto snap-x pb-4">
              {operationsHighlights.map((item) => (
                <div key={item.title} className="min-w-[320px] bg-white p-6 rounded-2xl shadow-lg snap-start">
                  <h4 className="text-lg font-semibold mb-2 text-primary">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-2xl font-bold text-primary">{item.metric}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-20 bg-white">
        <LayoutContainer>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center justify-center gap-3">
                <RiHandHeartLine className="text-2xl text-primary" />
                Strategic Partnerships
              </h3>
              <div className="space-y-4">
                {partnerships.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
                  >
                    <span className="font-medium text-gray-900">{partner.name}</span>
                    <span className="text-sm text-gray-500">{partner.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>
    </main>
  )
}
