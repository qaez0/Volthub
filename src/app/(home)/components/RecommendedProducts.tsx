"use client";

import Image from "next/image";
import {
  RiSunLine,
  RiChargingPile2Line,
  RiHomeSmileLine,
  RiBatteryChargeLine,
  RiFlashlightLine,
} from "react-icons/ri";

type RecommendedProduct = {
  title: string;
  image: string;
  Icon: React.ElementType;
};

const products: RecommendedProduct[] = [
  {
    title: "Solar Street Light",
    image: "/aboutimages/solarstreetlight.jpg",
    Icon: RiSunLine,
  },
  {
    title: "EV Chargers",
    image: "/Product/evpb.jpg",
    Icon: RiChargingPile2Line,
  },
  {
    title: "Smart Home Storage",
    image: "/HomeBanner/homebatt.png",
    Icon: RiHomeSmileLine,
 
  },
  {
    title: "Power Supplies",
    image: "/HomeBanner/commercial.png",
    Icon: RiFlashlightLine,
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
            <div
              key={product.title}
              className="group rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-0.5 hover:bg-primary/5"
            >
              <div className="p-5 space-y-2">
                <div className="h-10 w-10 text-primary flex items-center justify-center text-[60px] font-large font-bold">
                  <product.Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

