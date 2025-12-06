import SectionHeading from "@/components/marketing/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { operationsHighlights } from "./data";

export default function OperationsCarouselSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading
        title="VoltHub Global Operations"
        description="High-performance delivery backed by engineering rigor and customer obsession."
        align="center"
      />

      <div className="bg-white p-4 md:p-8 rounded-none md:rounded-3xl shadow-lg border border-gray-100">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {operationsHighlights.map((item) => (
              <CarouselItem
                key={item.title}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-3xl font-bold text-primary mb-1">
                      {item.metric}
                    </p>
                    <p className="text-xs text-gray-500">{item.subtext}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
}
