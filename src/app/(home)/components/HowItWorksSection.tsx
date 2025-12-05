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
      <LayoutContainer className="flex flex-col md:flex-row gap-6 md:gap-8 p-2">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16 reveal-on-scroll px-2">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-primary uppercase">{badge}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text break-words">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto break-words px-2">{description}</p>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="stagger-card reveal-on-scroll text-center group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 md:mb-6">
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="text-2xl sm:text-2xl md:text-3xl text-white" />
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-gray-800 break-words">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words px-2">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 md:top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

