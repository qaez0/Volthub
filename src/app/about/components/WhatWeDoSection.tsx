import Masonry from "@/components/ui/masonry";
import { masonryItems, services } from "./data";

export default function WhatWeDoSection() {
  return (
    <div className="bg-white rounded-none md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="text-3xl font-bold text-primary text-center gradient-text">
          WHAT WE DO
        </h3>
        <p className="text-gray-700 leading-relaxed text-center text-lg max-w-2xl mx-auto">
          At Volthub, we provide end-to-end energy and mobility solutions
          through:
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-4 order-2 lg:order-1">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="font-bold text-lg text-gray-900 flex items-start gap-2">
                <span className="text-primary text-xl">▸</span>
                {service.title}
              </h4>
              <ul className="flex flex-col gap-2 text-gray-700 text-sm">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-auto order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
