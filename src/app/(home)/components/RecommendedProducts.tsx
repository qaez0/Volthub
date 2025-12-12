"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  RiSunLine,
  RiChargingPile2Line,
  RiHomeSmileLine,
  RiBatteryChargeLine,
  RiFlashlightLine,
} from "react-icons/ri";
import Link from "next/link";
import { Route } from "next";
type RecommendedProduct = {
  title: string;
  image: string;
  Icon: React.ElementType;
  hoverBorderClass: string;
  hoverBgClass: string;
  hoverIconClass: string;
  hoverTextClass: string;
  href: string;
};

const products: RecommendedProduct[] = [
  {
    title: "Solar Street Light",
    image: "/aboutimages/solarstreetlight.jpg",
    hoverBorderClass: "hover:border-blue-900",
    hoverBgClass: "hover:bg-blue-900/50",
    hoverIconClass: "group-hover:text-blue-900",
    hoverTextClass: "group-hover:text-blue-900",
    Icon: RiSunLine,
    href: "/products?category=solar-street",
  },
  {
    title: "EV Chargers",
    image: "/Product/evpb.jpg",
    hoverBorderClass: "hover:border-teal-700",
    hoverBgClass: "hover:bg-teal-700/50",
    hoverIconClass: "group-hover:text-teal-700",
    hoverTextClass: "group-hover:text-teal-700",
    Icon: RiChargingPile2Line,
    href: "/products?category=ev-charging",
  },
  {
    title: "Smart Home Storage",
    image: "/Product/SmartHome/2B/prod2.png",
    hoverBorderClass: "hover:border-amber-300",
    hoverBgClass: "hover:bg-amber-300/50",
    hoverIconClass: "group-hover:text-amber-300",
    hoverTextClass: "group-hover:text-amber-300",
    Icon: RiHomeSmileLine,
    href: "/products?category=smart-home",
  },
  {
    title: "Power Supplies",
    image: "/HomeBanner/commercial1.png",
    hoverBorderClass: "hover:border-lime-700",
    hoverBgClass: "hover:bg-lime-700/50",
    hoverIconClass: "group-hover:text-lime-700",
    hoverTextClass: "group-hover:text-lime-700",
    Icon: RiFlashlightLine,
    href: "/products?category=container",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-2 md:space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Recommended Products
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Please feel free to choose!
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href as Route}
              className={cn(
                "group rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 block",
                "hover:-translate-y-0.5 hover:shadow-lg",
                product.hoverBorderClass,
                product.hoverBgClass
              )}
            >
              <div className="p-5 space-y-2">
                <div className={cn("h-10 w-10 text-primary flex items-center justify-center text-[60px] font-large font-bold transition-colors duration-200", product.hoverIconClass)}>
                  <product.Icon />
                </div>
                <h3 className={cn("text-lg font-semibold text-gray-900 transition-colors duration-200", product.hoverTextClass)}>
                  {product.title}
                </h3>
                <div className="h-0.5 w-10 bg-primary group-hover:w-12 transition-all duration-200" />
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-b-xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

