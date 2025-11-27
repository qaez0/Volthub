import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import {
  RiLightbulbLine,
  RiShieldCheckLine,
  RiLeafLine,
  RiRocketLine,
  RiCarLine,
  RiCpuLine,
  RiMedalLine,
  RiHandHeartLine,
} from "react-icons/ri";

const leadershipStats = [
  { label: "Top 5%", value: "Global Renewable Firms" },
  { label: "$2.8B", value: "Project Value Delivered" },
  { label: "ISO Certified", value: "Quality & Environment" },
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
      "Operating in 25+ countries with 12 manufacturing facilities across four continents.",
    metric: "25+ Countries",
    subtext: "12 Manufacturing Facilities",
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

const certifications = ["ISO 9001", "ISO 14001", "IEC 61215", "UL Listed"];
const partnerships = [
  { name: "Tesla Energy", detail: "Battery Technology" },
  { name: "Microsoft Azure", detail: "Cloud & AI" },
  { name: "Schneider Electric", detail: "Grid Solutions" },
  { name: "ABB Group", detail: "Power Electronics" },
];

export default function About() {
  return (
    <main className="pt-32 space-y-20 bg-white">
      <section id="overview" className="pt-12">
        <LayoutContainer className="space-y-16">
          <SectionHeading
            eyebrow="About VoltHub"
            title="Building the blueprint for a cleaner energy economy"
            description="Founded in 2020, VoltHub accelerates the global shift to renewables with vertically integrated solar, storage, EV, and smart grid systems."
            align="center"
          />
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Market Position & Industry Leadership
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
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

      <section className="py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="VoltHub Global Operations"
            description="High-performance delivery backed by engineering rigor and customer obsession."
          />
          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
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

      <section className="bg-gray-50 py-20">
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
      </section>

      <section id="timeline" className="py-20">
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
      </section>

      <section className="bg-gray-50 py-20">
        <LayoutContainer className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
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
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
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

