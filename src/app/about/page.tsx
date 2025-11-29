import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import LocationMapWrapper from "@/components/common/LocationMapWrapper";
import Image from "next/image";
import {
  RiLightbulbLine,
  RiShieldCheckLine,
  RiLeafLine,
  RiRocketLine,
  RiCarLine,
  RiCpuLine,
  //RiMedalLine,
  RiHandHeartLine,
} from "react-icons/ri";

const leadershipStats = [
  { label: "Top 5%", value: "Global Renewable Firms" },
  { label: "$2.8B", value: "Project Value Delivered" },
  // { label: "ISO Certified", value: "Quality & Environment" },
];

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
];

const operationsHighlights = [
  {
    title: "Global Presence",
    description:
      "Operating in 25+ countries with 12 manufacturing facilities across Southeast Asia.",
    metric: "25+ Countries",
    subtext: "12 Manufacturing Facilities in Southeast Asia",
  },  
  {
    title: "Expert Team",
    description:
      "450+ engineers, technicians, and consultants with deep clean-energy expertise.",
    metric: "450+ Experts",
    subtext: "85% with Advanced Degrees",
  },
  {
    title: "Industry Recognition",
    description:
      "Clean Energy Innovation Award, Solar Power World Top Contractor, ESA Excellence Award.",
    metric: "15+ Awards",
    subtext: "UN Global Compact Recognition",
  },
  {
    title: "Financial Performance",
    description:
      "$500M+ invested in R&D and 350% YoY revenue growth backed by leading investors.",
    metric: "$500M+ R&D",
    subtext: "350% YoY Growth",
  },
  {
    title: "Customer Excellence",
    description:
      "98.5% satisfaction, 24/7 support in 7 languages, average 4-hour response.",
    metric: "98.5% Rating",
    subtext: "50K+ Customers",
  },
];

const pillars = [
  {
    icon: RiLightbulbLine,
    title: "Innovation First",
    bullets: [
      "200+ patents with AI-powered energy management",
      "Blockchain-enabled energy trading platform",
      "Partnership with MIT Energy Initiative",
    ],
  },
  {
    icon: RiShieldCheckLine,
    title: "Reliability & Performance",
    bullets: [
      "99.8% system uptime across deployments",
      "25-year performance warranties",
      "Remote diagnostics with IoT sensors",
    ],
  },
  {
    icon: RiLeafLine,
    title: "Environmental Leadership",
    bullets: [
      "Carbon negative operations by 2028",
      "100% recyclable silicon components",
      "UN Global Compact signatory",
    ],
  },
];

const timeline = [
  {
    icon: RiRocketLine,
    color: "bg-primary",
    year: "2020",
    title: "Company Founded",
    description: "Launched solar lighting solutions for rural communities.",
    tags: ["$2M Seed Funding", "10 Employees"],
  },
  {
    icon: RiCarLine,
    color: "bg-secondary text-black",
    year: "2022",
    title: "EV Charging Division",
    description: "Expanded into fast-charging infrastructure worldwide.",
    tags: ["$25M Series A", "150 Employees"],
  },
  {
    icon: RiCpuLine,
    color: "bg-green-500",
    year: "2024",
    title: "Smart Grid Solutions",
    description: "Launched AI-powered energy management suite.",
    tags: ["$100M Series B", "450+ Employees"],
  },
];

// const certifications = ["ISO 9001", "ISO 14001", "IEC 61215", "UL Listed"];
const partnerships = [
  { name: "Tesla Energy", detail: "Battery Technology" },
  { name: "Microsoft Azure", detail: "Cloud & AI" },
  { name: "Schneider Electric", detail: "Grid Solutions" },
  { name: "ABB Group", detail: "Power Electronics" },
];

export default function About() {
  return (
    <main className="pt-32 space-y-20 bg-gray-50">
      <section id="overview" className="pt-12">
        <LayoutContainer className="space-y-16">
          <SectionHeading
            eyebrow="About VoltHub"
            title="Building the blueprint for a cleaner energy economy"
            align="center"
          />
          
          {/* Overview, Mission, Vision Triangle Layout */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Overview - Top Center */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                OVERVIEW
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Volthhub Electric Power Generation Services Corporation</span> is a forward-looking energy technology company specializing in EV charging infrastructure, solar power systems, and smart energy solutions. We provide end-to-end services—from design, engineering, and installation to maintenance and system optimization—tailored for commercial, residential, and industrial clients. With a strong commitment to sustainability, Volthub integrates clean energy technologies such as solar-powered charging, battery storage, and intelligent energy management to support the growing demand for renewable-powered transportation. Our goal is to empower communities and businesses with reliable, efficient, and future-ready energy solutions that contribute to a cleaner, smarter, and more sustainable Philippines.
              </p>
              {/* <div className="mb-6 rounded-xl overflow-hidden max-w-xs mx-auto">
                <Image
                  src="/aboutimages/solarpanels.jpg"
                  alt="Solar panels installation"
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </div> */}
            </div>

            {/* Mission and Vision - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                  MISSION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Volthhub Electric Power Generation Services Corporation</span> is committed to revolutionizing the energy sector by delivering cutting-edge electronic solutions for power generation. We specialize in sustainable, efficient, and smart energy technologies that empower industries, homes, and communities with reliable, cost-effective electricity. Our mission is to foster a cleaner energy future through the integration of renewable sources, smart grid technology, and energy storage solutions.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                  VISION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a global leader in electric power generation, pioneering advanced technologies that redefine energy production. We aim to lead the transition to renewable energy, delivering smart, scalable solutions that foster sustainability, enhance grid stability, and contribute to a brighter, cleaner future for all.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Are, What We Are, What We Do Cards */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Who We Are */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                WHO WE ARE
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Volthub Electric Power Generation Services Corporation</span> is a progressive energy-technology company dedicated to advancing the future of clean power and sustainable transportation. We specialize in delivering integrated solutions—combining EV charging systems, solar power generation, and smart energy technologies—that empower communities, businesses, and cities to transition toward a greener, more efficient future.
                <br />
                <br />
                We believe in innovation with purpose: creating energy solutions that are reliable, accessible, and environmentally responsible.
              </p>
            </div>

            {/* What We Are */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                WHAT WE ARE
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We are a renewable energy and electric mobility solutions provider committed to building a cleaner, smarter, and more sustainable Philippines. Volthub bridges the gap between traditional energy systems and modern electric mobility by offering solar-integrated EV chargers, energy-efficient technologies, and future-ready infrastructures designed for rapid urban development.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center gradient-text">
                WHAT WE DO
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Volthub, we provide end-to-end energy and mobility solutions through:
              </p>
              <div className="text-left space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <span className="font-bold text-gray-900">• EV Charging Infrastructure</span>
                    <br />
                    <span className="text-gray-700">Installation of AC and DC chargers   Solar-powered charging hubs
                    Smart metering and monitoring systems
                    Commercial, residential, and fleet solutions</span>
                  </div>
                  <div className="rounded-xl overflow-hidden max-w-xs">
                    <Image
                      src="/aboutimages/ev-charging.jpg"
                      alt="EV Charging Infrastructure"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div className="rounded-xl overflow-hidden max-w-xs order-2 md:order-1">
                    <Image
                      src="/aboutimages/solarpanels2.jpg"
                      alt="Solar Power Systems"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <span className="font-bold text-gray-900">• Solar Power Systems</span>
                    <br />
                    <span className="text-gray-700">Rooftop solar installations
                    Solar integration for charging stations
                    Solar farms for large-scale power supply
                    Engineering, procurement & construction (EPC) services</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <span className="font-bold text-gray-900">• Smart Energy Technologies</span>
                    <br />
                    <span className="text-gray-700">Energy management systems (EMS)  Battery storage and hybrid systems  Vehicle-to-Grid (V2G) development  Internet-of-Energy (IoE) innovations</span>
                  </div>
                  <div className="rounded-xl overflow-hidden max-w-xs">
                    <Image
                      src="/aboutimages/storagesystems.jpg"
                      alt="Smart Energy Technologies"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div className="rounded-xl overflow-hidden max-w-xs order-2 md:order-1">
                    <Image
                      src="/aboutimages/workshop.jpg"
                      alt="Technical Services"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <span className="font-bold text-gray-900">• Technical Services</span>
                    <br />
                    <span className="text-gray-700">Preventive maintenance
                    System inspection and commissioning  Electrical & mechanical upgrades
                    Compliance support with building and government agencies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center gradient-text">
              HISTORY
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">            
              <p>
                The idea for Volthub was born out of the founders&apos; shared vision to address two urgent global needs: the growth of electric mobility and the demand for renewable energy. Inspired by rapid EV adoption and the environmental cost of fossil fuels, the team began designing solutions that merge solar power with charging infrastructure.
              </p>
              <div className="mb-6 rounded-xl overflow-hidden max-w-xs mx-auto">
                <Image
                  src="/aboutimages/factory.jpg"
                  alt="VoltHub Factory"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">January 2025 – Incorporation</h4>
                  <p>
                    Volthub Electric Power Generation Services Corporation was officially incorporated on January 17, 2025 in Taguig City, Philippines. The company was founded by David Zhang, Vincent Paul Lim Oo, and Atty. Maria Evita R. Igot, combining expertise in energy systems, finance, and technology.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Early 2025 – Strategic Planning & Partnerships</h4>
                  <p>
                    The team laid out its roadmap, focusing on the deployment of solar-powered EV hubs, large-scale solar panel installations, advanced energy storage systems, and smart grid integration. Strategic partnerships were established with renewable energy providers, solar technology innovators, and local stakeholders to enhance capability in solar generation and accelerate the shift toward cleaner, more sustainable mobility solutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Mid 2025 – Pilot Development</h4>
                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="rounded-xl overflow-hidden max-w-xs mx-auto">
                      <Image
                        src="/aboutimages/solarpanelsworkshop.jpg"
                        alt="Pilot Development"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden max-w-xs mx-auto">
                      <Image
                        src="/aboutimages/unbuildedsolarpanels.jpg"
                        alt="Solar Panel Development"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p>
                    Volthub began development of its first solar-powered EV charging prototypes, integrating fast-charging technology with renewable energy storage solutions.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-900 text-xl mb-4">Future Goals (2026 and beyond)</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Expansion of Solar-Integrated Charging Networks Nationwide</h5>
                    <p>
                      Strengthen the rollout of EV charging stations across the Philippines powered by solar-energy systems, reducing dependence on grid electricity and promoting sustainable mobility.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Development of Vehicle-to-Grid (V2G) Technology for Smart Cities</h5>
                    <p>
                      Advance V2G capabilities that allow electric vehicles to store, discharge, and supply energy back to the grid—supporting smart city infrastructure and grid stability.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Regional Expansion in Southeast Asia to Promote Renewable-Powered Transportation</h5>
                    <p>
                      Position Volthub as a regional leader by expanding EV-charging infrastructure into neighboring Southeast Asian countries, focusing on renewable-powered and smart-technology solutions.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Large-Scale Deployment and Innovation of Solar Panel Technologies (NEW – for solar panel future goals)</h5>
                    <p className="mb-2">
                      Accelerate the adoption of advanced solar panel technologies to power EV chargers, office facilities, and large commercial installations. This includes:
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

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Established:</p>
                    <p>January 17, 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Address:</p>
                    <p>Unit 2503, High Street South Corporate Plaza Tower 2, Bonifacio Global City, Taguig</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Incorporators:</p>
                    <div className="space-y-2">
                      <p><span className="font-semibold">President/CEO:</span> Vincent Paul Lim Oo</p>
                      <p><span className="font-semibold">Vice President/COO:</span> Atty. Maria Evita R. Igot</p>
                    </div>
                  </div>
                  <div>
                    <LocationMapWrapper />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto items-center justify-center">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Market Position & Industry Leadership
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
              {leadershipStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-600">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      <section id="insights" className="bg-gray-50 py-20">
        <LayoutContainer className="space-y-16">
          <SectionHeading
            title="Renewable Energy Market Insights"
            description="Data courtesy of IRENA, IEA, BloombergNEF, and Wood Mackenzie 2024 reports."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight) => (
              <div
                key={insight.title}
                className={`p-6 rounded-xl text-center ${insight.color}`}
              >
                <p className="text-3xl font-bold mb-2">{insight.title}</p>
                <p className="text-sm text-gray-600">{insight.detail}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="pt-12">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="VoltHub Global Operations"
            description="High-performance delivery backed by engineering rigor and customer obsession."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden max-w-xs mx-auto">
              <Image
                src="/aboutimages/solarstreetlight.jpg"
                alt="Solar Street Light"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden max-w-xs mx-auto">
              <Image
                src="/aboutimages/solarstreetlightwithcctv.jpg"
                alt="Solar Street Light with CCTV"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden max-w-xs mx-auto">
              <Image
                src="/aboutimages/solartrafficlight.jpg"
                alt="Solar Traffic Light"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto snap-x">
              {operationsHighlights.map((item) => (
                <div
                  key={item.title}
                  className="min-w-[320px] bg-white p-6 rounded-2xl shadow-lg snap-start"
                >
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-2xl font-bold text-primary">{item.metric}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* <section className="bg-gray-50 py-20">
        <LayoutContainer className="space-y-10">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <pillar.icon className="text-3xl text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section> */}

      {/* <section id="timeline" className="py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Our Journey & Milestones"
            description="Strategic expansions that sharpened our technology edge."
          />
          <div className="space-y-8">
            {timeline.map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-6 bg-white rounded-2xl shadow-md p-6"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${event.color}`}
                >
                  <event.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between flex-wrap gap-2">
                    <p className="font-semibold text-lg">{event.title}</p>
                    <span className="text-sm text-gray-500 font-medium">
                      {event.year}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section> */}

      <section className="bg-gray-50 pb-10 mt-[-30px] ">
        <LayoutContainer className="flex justify-center">
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <RiMedalLine className="text-2xl text-secondary" />
              Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="text-center p-4 bg-gray-50 rounded-xl text-primary font-semibold"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div> */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full ">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <RiHandHeartLine className="text-2xl text-primary" />
              Strategic Partnerships
            </h3>
            <div className="space-y-4">
              {partnerships.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="font-medium">{partner.name}</span>
                  <span className="text-sm text-gray-500">{partner.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}

