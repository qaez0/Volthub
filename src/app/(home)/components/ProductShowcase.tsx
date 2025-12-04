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
    <section className={`section-spacing ${bgGradient}`}>
      <LayoutContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className={`reveal-on-scroll ${isImageLeft ? "order-1" : "order-2 lg:order-1"}`}>
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradientColors.from} ${gradientColors.to} rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500`}
              />
              <div className="relative image-hover-zoom card-hover-3d rounded-3xl overflow-hidden shadow-2xl bg-white p-8 lg:p-12">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className={`space-y-6 reveal-on-scroll ${isImageLeft ? "order-2" : "order-1 lg:order-2"}`}>
            <div>
              <p className={`text-sm font-semibold tracking-[0.3em] ${badgeColor} uppercase mb-4`}>
                {badge}
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                aria-label={title}
              >
                {titleParts.map((part, index) => (
                  <span key={index} className={part.color}>
                    {part.text}{" "}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/feature border border-gray-100 hover:border-primary/20"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 ${feature.color}`}
                  >
                    <feature.icon className="text-2xl" />
                  </div>
                  <span className="text-lg font-medium text-gray-800 group-hover/feature:text-primary transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group magnetic-button ${
                      isPrimary
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg hover:shadow-xl glow-pulse`
                        : `border-2 ${colors.border} hover:text-white`
                    }`}
                  >
                    {cta.text}
                    <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <indicator.icon className={`text-2xl ${indicator.color}`} />
                  <span className="text-sm text-gray-600">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

