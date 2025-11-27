import LayoutContainer from "@/components/layout/LayoutContainer";
import Link from "next/link";
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiBatteryChargeLine,
  RiCalculatorLine,
  RiLeafLine,
  RiSunLine,
} from "react-icons/ri";

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

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        className="relative min-h-screen flex items-center overflow-hidden parallax"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=ultra-modern%20futuristic%20cityscape%20at%20dusk%20with%20glowing%20energy%20networks%2C%20floating%20holographic%20interfaces%2C%20electric%20blue%20and%20golden%20light%20streams%20connecting%20solar%20panels%20and%20wind%20turbines%20across%20smart%20city%20buildings%2C%20cyberpunk%20aesthetic%20with%20clean%20geometric%20patterns%2C%20professional%20high-tech%20atmosphere&width=1920&height=1080&seq=hero002&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/70 to-transparent parallax-bg" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-secondary rounded-full pulse-ring" />
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full pulse-ring"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full pulse-ring"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left text-white">
              <p className="font-orbitron tracking-[0.3em] text-sm text-secondary uppercase">
                Smart Power. Clean Future.
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="neon-glow block">Powering</span>
                <span className="gradient-text typewriter">
                  Tomorrow, Today
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                VoltHub delivers next-generation electric and renewable energy
                solutions—from smart solar systems to EV charging
                infrastructure—for a cleaner, more resilient planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg glow-effect transition-transform hover:scale-105"
                >
                  Explore Products
                  <RiArrowRightLine className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-secondary to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  Get a Quote
                  <RiCalculatorLine className="text-lg group-hover:rotate-6 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-3xl font-bold font-orbitron ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-green-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-accent/30 to-emerald-600/30 rounded-3xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 space-y-6">
                  {performanceCards.map((card) => (
                    <div
                      key={card.title}
                      className="flex items-center justify-between p-4 bg-white/10 rounded-2xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.accent}`}
                        >
                          <card.icon className="text-2xl" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{card.title}</p>
                          <p className="text-blue-200 text-sm">{card.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-secondary font-bold text-xl">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/40 rounded-full energy-wave" />
          <div
            className="absolute top-3/4 right-1/3 w-3 h-3 bg-emerald-700/50 rounded-full energy-wave"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/50 rounded-full energy-wave"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center">
          <span className="text-sm text-blue-100">Discover More</span>
          <RiArrowDownLine className="text-2xl" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <LayoutContainer className="space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-green-700 uppercase">
              Why VoltHub
            </p>
            <h2 className="text-4xl font-bold gradient-text">
              Clean energy without compromise
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From ultra-efficient solar modules to AI-driven grid intelligence,
              we engineer every layer of the renewable ecosystem to deliver
              measurable impact on day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Platforms",
                body: "Solar, storage, EV charging, and smart controls in one cohesive stack.",
              },
              {
                title: "High-Performance Design",
                body: "Enterprise-grade reliability with predictive maintenance baked in.",
              },
              {
                title: "Global Delivery",
                body: "Projects deployed in 25+ countries with 24/7 multilingual support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-2xl shadow-lg card-hover"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}
