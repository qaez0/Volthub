"use client";

import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";
import type { Route } from "next";

interface ProductCard {
  badge: string;
  badgeColor: string;
  title: string;
  titleParts: { text: string; color: string }[];
  description: string;
  image: string;
  imageAlt: string;
  ctaLink: Route;
  ctaText: string;
  gradientColors: { from: string; to: string };
}

interface ProductGridShowcaseProps {
  products: ProductCard[];
}

export default function ProductGridShowcase({ products }: ProductGridShowcaseProps) {
  // Reorder products: Commercial (index 3), Advanced (index 1), Home (index 2), Residential (index 0)
  const commercialProduct = products[3]; // Commercial Energy Storage
  const advancedProduct = products[1]; // Advanced Solar System
  const homeProduct = products[2]; // Home Battery Storage
  const residentialProduct = products[0]; // Residential Energy Storage

  return (
    <section className="section-spacing bg-linear-to-br from-white via-gray-50 to-white overflow-x-hidden">
      <LayoutContainer>
        {/* Grid Layout: 
            Top: Commercial (2 cols wide) | Residential (2 rows tall on right)
            Bottom: Advanced | Home
        */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Top Left - Commercial (Wide Card) - Spans 2 columns */}
          <div className="relative group md:col-span-2">
            <div
              className={`absolute inset-0 bg-linear-to-br ${commercialProduct.gradientColors.from} ${commercialProduct.gradientColors.to} rounded-2xl md:rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 opacity-50`}
            />
            <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col md:block">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center h-full md:auto">
                {/* Image */}
                <div className="relative h-48 md:h-80 lg:h-140 lg:min-h-[600px] bg-linear-to-br from-gray-50 to-white">
                  <Image
                    src={commercialProduct.image}
                    alt={commercialProduct.imageAlt}
                    fill
                    className="object-cover pt-5 md:pt-10 lg:pt-16"
                  />
                </div>
                {/* Content */}
                <div className="p-4 md:p-6 lg:p-12 space-y-3 md:space-y-4 lg:space-y-6 flex-1 flex flex-col">
                  <p className={`text-[10px] md:text-xs lg:text-sm font-semibold tracking-[0.15em] md:tracking-[0.3em] ${commercialProduct.badgeColor} uppercase`}>
                    {commercialProduct.badge}
                  </p>
                  <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold leading-tight">
                    {commercialProduct.titleParts.map((part, index) => (
                      <span key={index} className={part.color}>
                        {part.text}{" "}
                      </span>
                    ))}
                  </h2>
                  <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed flex-1">
                    {commercialProduct.description}
                  </p>
                  <Link
                    href="/products?category=cabinet"
                    className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-linear-to-r from-primary to-accent text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl"
                  >
                    {commercialProduct.ctaText}
                    <RiArrowRightLine className="text-base md:text-lg lg:text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - Residential (Tall Card) - Spans 2 rows */}
          <div className="relative group md:col-start-3 md:row-start-1 md:row-span-2">
            <div
              className={`absolute inset-0 bg-linear-to-br ${residentialProduct.gradientColors.from} ${residentialProduct.gradientColors.to} rounded-2xl md:rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 opacity-50`}
            />
            <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl h-full flex flex-col md:min-h-[880px] lg:min-h-[980px]">
              {/* Image */}
              <div className="relative bg-linear-to-br from-gray-50 to-white h-48 md:min-h-[820px] lg:min-h-[900px] md:h-full flex items-center justify-center">
                <Image
                  src={residentialProduct.image}
                  alt={residentialProduct.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover p-4 md:p-6 lg:p-8"
                />
              </div>
              {/* Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col md:justify-end gap-3 md:gap-4 lg:gap-5 md:pt-8 lg:pt-10">
                <div className="space-y-2 md:space-y-3">
                  <p className={`text-[10px] md:text-xs font-semibold tracking-[0.15em] ${residentialProduct.badgeColor} uppercase`}>
                    {residentialProduct.badge}
                  </p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                    {residentialProduct.titleParts.map((part, idx) => (
                      <span key={idx} className={part.color}>
                        {part.text}{" "}
                      </span>
                    ))}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {residentialProduct.description}
                  </p>
                </div>
                <Link
                  href="/products?category=ev-charging"
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-linear-to-r from-primary to-accent text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Products
                  <RiArrowRightLine className="text-base md:text-lg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Left - Advanced (Small Card) */}
          <div className="relative group md:row-start-2">
            <div
              className={`absolute inset-0 bg-linear-to-br ${advancedProduct.gradientColors.from} ${advancedProduct.gradientColors.to} rounded-2xl md:rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 opacity-50`}
            />
            <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl h-full flex flex-col">
              {/* Image */}
              <div className="relative bg-linear-to-br from-gray-50 to-white h-48 md:h-[52%] ">
                <Image
                  src={advancedProduct.image}
                  alt={advancedProduct.imageAlt}
                  fill
                  className="object-cover p-4 md:p-6"
                />
              </div>
              {/* Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col gap-3 md:gap-4 bo">
                <p className={`text-[10px] md:text-xs font-semibold tracking-[0.15em] ${advancedProduct.badgeColor} uppercase`}>
                  {advancedProduct.badge}
                </p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                  {advancedProduct.titleParts.map((part, idx) => (
                    <span key={idx} className={part.color}>
                      {part.text}{" "}
                    </span>
                  ))}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 flex-1 line-clamp-2">
                  {advancedProduct.description}
                </p>
                <Link
                  href="/products?category=solar-street"
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-linear-to-r from-primary to-accent text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                >
                  View Products
                  <RiArrowRightLine className="text-base md:text-lg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Middle - Home (Small Card) */}
          <div className="relative group md:row-start-2">
            <div
              className={`absolute inset-0 bg-linear-to-br ${homeProduct.gradientColors.from} ${homeProduct.gradientColors.to} rounded-2xl md:rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 opacity-50`}
            />
            <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl h-full flex flex-col">
              {/* Image */}
              <div className="relative bg-linear-to-br from-gray-50 to-white h-48 md:h-80">
                <Image
                  src={homeProduct.image}
                  alt={homeProduct.imageAlt}
                  fill
                  className="object-cover "
                />
              </div>
              {/* Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col gap-3 md:gap-4 ">
                <p className={`text-[10px] md:text-xs font-semibold tracking-[0.15em] ${homeProduct.badgeColor} uppercase`}>
                  {homeProduct.badge}
                </p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                  {homeProduct.titleParts.map((part, idx) => (
                    <span key={idx} className={part.color}>
                      {part.text}{" "}
                    </span>
                  ))}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 flex-1 line-clamp-3">
                  {homeProduct.description}
                </p>
                <Link
                  href="/products?category=smart-home"
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-linear-to-r from-primary to-accent text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                >
                  View Products
                  <RiArrowRightLine className="text-base md:text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

