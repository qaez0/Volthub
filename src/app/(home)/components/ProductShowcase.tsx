"use client";

import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import { RiArrowRightLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Route } from "next";

interface Feature {
  icon: IconType;
  text: string;
  color: string;
}

interface TrustIndicator {
  icon: IconType;
  text: string;
  color: string;
}

interface CTA {
  text: string;
  href: Route;
  variant: "primary" | "secondary";
}

interface ProductShowcaseProps {
  badge: string;
  badgeColor: string;
  title: string;
  titleParts: { text: string; color: string }[];
  description: string;
  image: string;
  imageAlt: string;
  features: Feature[];
  ctas: CTA[];
  trustIndicators: TrustIndicator[];
  imagePosition?: "left" | "right";
  gradientColors?: {
    from: string;
    to: string;
  };
  bgGradient?: string;
}

export default function ProductShowcase({
  badge,
  badgeColor,
  title,
  titleParts,
  description,
  image,
  imageAlt,
  features,
  ctas,
  trustIndicators,
  imagePosition = "left",
  gradientColors = { from: "from-primary/20", to: "to-accent/20" },
  bgGradient = "bg-gradient-to-br from-white via-gray-50 to-white",
}: ProductShowcaseProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`section-spacing ${bgGradient} overflow-x-hidden bg-red-500`}>
      <LayoutContainer>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <div className={`block w-full lg:w-1/2 reveal-on-scroll ${isImageLeft ? "order-1" : "order-2 lg:order-1"}`}>
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradientColors.from} ${gradientColors.to} rounded-2xl md:rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500`}
              />
              <div className="relative image-hover-zoom card-hover-3d rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-10 h-10 md:w-16 md:h-16 bg-accent/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className={`w-full lg:w-1/2 space-y-3 md:space-y-6 reveal-on-scroll ${isImageLeft ? "order-2 md:order-2" : "order-1 md:order-1 lg:order-2"} pt-8 md:pt-12 lg:pt-16`}>
          
            <div className="mt-8 md:mt-12 lg:mt-16">
              <p className={`text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.3em] ${badgeColor} uppercase mb-2 md:mb-4`}>
                {badge}
              </p>
              <h2
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6 break-words leading-tight"
                aria-label={title}
              >
                {titleParts.map((part, index) => (
                  <span key={index} className={part.color}>
                    {part.text}{" "}
                  </span>
                ))}
              </h2>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 md:mb-8 break-words">{description}</p>
            </div>

            {/* Features List */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 mb-4 md:mb-8 overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-center gap-1.5 md:gap-4 p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-primary/20 flex-shrink-0 min-w-[80px] md:min-w-0"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}
                  >
                    <feature.icon className="text-lg md:text-2xl" />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-lg font-medium text-gray-800 group-hover/feature:text-primary transition-colors duration-300 break-words text-center md:text-left">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4">
              {ctas.map((cta, index) => {
                const isPrimary = cta.variant === "primary";
                // Extract color from badgeColor (e.g., "text-primary" -> "primary")
                const colorMatch = badgeColor.match(/text-(\w+(-\d+)?)/);
                const baseColor = colorMatch ? colorMatch[1] : "primary";
                
                // Map colors to gradient and border classes
                const colorMap: Record<string, { gradient: string; border: string }> = {
                  primary: { gradient: "from-primary to-accent", border: "border-primary text-primary hover:bg-primary" },
                  accent: { gradient: "from-accent to-primary", border: "border-accent text-accent hover:bg-accent" },
                  "emerald-700": { gradient: "from-emerald-700 to-primary", border: "border-emerald-700 text-emerald-700 hover:bg-emerald-700" },
                  secondary: { gradient: "from-secondary to-primary", border: "border-secondary text-secondary hover:bg-secondary" },
                };
                
                const colors = colorMap[baseColor] || colorMap.primary;

                return (
                  <Link
                    key={index}
                    href={cta.href as Route}
                    className={`inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 group magnetic-button ${
                      isPrimary
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-md md:shadow-lg hover:shadow-xl glow-pulse`
                        : `border-2 ${colors.border} hover:text-white`
                    }`}
                  >
                    <span className="line-clamp-1">{cta.text}</span>
                    <RiArrowRightLine className="text-sm md:text-xl flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-3 md:pt-6 border-t border-gray-200">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-1.5 md:gap-2">
                  <indicator.icon className={`text-base md:text-2xl ${indicator.color} flex-shrink-0`} />
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 break-words">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

