"use client";

import { IconType } from "react-icons";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

interface HowItWorksSectionProps {
  badge?: string;
  title: string;
  description: string;
  steps: Step[];
}

export default function HowItWorksSection({
  badge = "Simple Process",
  title,
  description,
  steps,
}: HowItWorksSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">{badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="stagger-card reveal-on-scroll text-center group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="text-3xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

