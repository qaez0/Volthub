import SectionHeading from "@/components/marketing/SectionHeading";
import { marketInsights } from "./data";

export default function MarketInsightsSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading
        title="Renewable Energy Market Insights"
        description="Data courtesy of IRENA, IEA, BloombergNEF, and Wood Mackenzie 2024 reports."
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
        {marketInsights.map((insight) => (
          <div
            key={insight.title}
            className={`p-6 md:p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${insight.color}`}
          >
            <p className="text-4xl md:text-5xl font-bold mb-3">{insight.title}</p>
            <p className="text-sm md:text-base text-gray-700 font-medium">
              {insight.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

