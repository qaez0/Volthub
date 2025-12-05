"use client";

import { IconType } from "react-icons";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  badge?: string;
  title: string;
  description: string;
  features: Feature[];
}

export default function FeaturesSection({
  badge = "Why VoltHub",
  title,
  description,
  features,
}: FeaturesSectionProps) {
  return (
    <section className="section-spacing bg-white overflow-x-hidden">
      <LayoutContainer className="flex flex-col md:flex-row gap-6 md:gap-8 p-2 md:pt-10">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16 reveal-on-scroll px-2">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-green-700 uppercase">
            {badge}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text break-words px-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 break-words">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="stagger-card p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-lg card-hover-3d hover-lift border border-gray-100 group border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-pulse">
                <feature.icon className="text-2xl sm:text-2xl md:text-3xl text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-primary group-hover:text-accent transition-colors duration-300 text-reveal break-words">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 break-words">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

