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
    <section className="section-spacing bg-white">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-green-700 uppercase">
            {badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="stagger-card p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg card-hover-3d hover-lift border border-gray-100 group border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-pulse">
                <feature.icon className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-300 text-reveal">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

