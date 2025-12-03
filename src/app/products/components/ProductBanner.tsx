import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";
import { ProductCategory, categoryBanner } from "./productData";

interface ProductBannerProps {
  activeCategory: ProductCategory;
}

export default function ProductBanner({ activeCategory }: ProductBannerProps) {
  const banner = categoryBanner[activeCategory];

  return (
    <section className="relative overflow-hidden border-b border-slate-100 min-h-[300px] md:min-h-[320px]">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
      <Image
        src={banner.image}
        alt={banner.title}
        width={1600}
        height={400}
        className="w-full h-full md:h-[550px] object-cover"
      />
      <div className="absolute inset-0">
        <LayoutContainer className="h-full flex flex-col justify-center gap-4 text-white">
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/70">
            <RiHome2Line className="h-4 w-4" />
            <span>Home</span>
            <RiArrowRightSLine className="h-4 w-4" />
            <span className="text-white/90">Products</span>
          </div>
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {banner.title}
            </h1>
            <p className="text-sm md:text-base text-white/80">
              {banner.description}
            </p>
          </div>
        </LayoutContainer>
      </div>
    </section>
  );
}

