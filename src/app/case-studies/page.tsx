import type { Metadata } from "next";
import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import SectionHeading from "@/components/marketing/SectionHeading";
import CarbonChart from "@/components/marketing/CarbonChart";
import BackToTopButton from "@/components/common/BackToTopButton";

export const metadata: Metadata = {
  title: "Case Studies - VoltHub",
  description: "Explore real-world success stories of VoltHub's energy solutions. See how our products and services have transformed homes, businesses, and communities with clean, reliable power.",
};

const caseStudies = [
  {
    id: "smart-cities",
    title: "Smart Cities",
    description: "Comprehensive urban energy solutions for metropolitan areas.",
    metrics: [
      { label: "Projects Completed", value: "15" },
      { label: "Energy Saved", value: "2.5 GWh" },
      { label: "CO₂ Reduced", value: "1,200 tons" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=modern%20smart%20city%20with%20solar%20panels%20integrated%20into%20buildings%2C%20electric%20vehicle%20charging%20stations%2C%20LED%20street%20lighting%2C%20futuristic%20urban%20landscape%2C%20sustainable%20infrastructure%2C%20blue%20and%20green%20technology%20elements&width=400&height=250&seq=case001&orientation=landscape",
  },
  {
    id: "industrial",
    title: "Industrial Solutions",
    description:
      "Large-scale energy systems for manufacturing and heavy industry.",
    metrics: [
      { label: "Facilities Powered", value: "45" },
      { label: "Capacity Installed", value: "150 MW" },
      { label: "Cost Savings", value: "$2.8M" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=industrial%20manufacturing%20facility%20with%20large-scale%20solar%20panel%20installation%20on%20rooftop%2C%20modern%20factory%20buildings%2C%20clean%20energy%20infrastructure%2C%20professional%20industrial%20setting%2C%20sustainable%20manufacturing&width=400&height=250&seq=case002&orientation=landscape",
  },
  {
    id: "residential",
    title: "Residential Projects",
    description:
      "Home energy solutions for sustainable living and energy independence.",
    metrics: [
      { label: "Homes Powered", value: "2,500" },
      { label: "Average Savings", value: "65%" },
      { label: "Customer Rating", value: "4.9/5" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=residential%20neighborhood%20with%20solar%20panels%20on%20house%20rooftops%2C%20modern%20suburban%20homes%2C%20clean%20energy%20installation%2C%20family-friendly%20environment%2C%20sustainable%20living%20community%2C%20bright%20daylight&width=400&height=250&seq=case003&orientation=landscape",
  },
  {
    id: "rural",
    title: "Rural Electrification",
    description:
      "Clean energy access for remote and underserved communities.",
    metrics: [
      { label: "Villages Connected", value: "120" },
      { label: "People Served", value: "85,000" },
      { label: "Impact Score", value: "95%" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=rural%20village%20with%20solar%20lighting%20systems%2C%20off-grid%20energy%20solutions%2C%20remote%20community%20development%2C%20sustainable%20rural%20electrification%2C%20solar%20street%20lights%20and%20home%20systems%2C%20developing%20region%20infrastructure&width=400&height=250&seq=case004&orientation=landscape",
  },
];

const impactMetrics = [
  { icon: "ri-leaf-line", label: "Tons CO₂ Reduced", value: "15,000" },
  { icon: "ri-water-percent-line", label: "Gallons Water Saved", value: "2.5M" },
  { icon: "ri-flashlight-line", label: "MW Clean Energy", value: "500" },
  { icon: "ri-group-line", label: "Lives Impacted", value: "100K+" },
];

const carbonData = {
  categories: ["2020", "2021", "2022", "2023", "2024"],
  values: [2500, 5200, 8900, 12300, 15000],
};

export default function CaseStudies() {
  return (
    <main className="pt-32 space-y-20 bg-white">
      <section className="pt-12">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Case Studies"
            description="Real-world implementations driving sustainable change."
          />
          <div className="flex flex-wrap gap-8 justify-center">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                id={study.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">{study.title}</h3>
                  <p className="text-sm text-gray-600">{study.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex justify-between">
                        <span>{metric.label}:</span>
                        <span className="font-semibold text-gray-800">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="bg-gray-50 py-20">
        <LayoutContainer className="space-y-12">
          <SectionHeading
            title="Sustainability Impact"
            description="Measuring our contribution to a cleaner future."
          />
          <div className="flex flex-wrap gap-8 justify-center">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center bg-white rounded-2xl p-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-gray-600 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Carbon Reduction Progress
            </h3>
            <div className="h-80">
              <CarbonChart
                categories={carbonData.categories}
                data={carbonData.values}
              />
            </div>
          </div>
        </LayoutContainer>
      </section>
      <BackToTopButton />
    </main>
  );
}

