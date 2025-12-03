import Image from "next/image";
import { RiArrowRightSLine, RiBatteryChargeLine, RiChargingPile2Line, RiHomeGearLine, RiSunLine } from "react-icons/ri";
import { Product, categories } from "./productData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100">
      <div className="relative overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={420}
          className="w-full h-52 md:h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          {product.category === "smart-home" && (
            <RiHomeGearLine className="h-4 w-4 text-primary" />
          )}
          {product.category === "ev-charging" && (
            <RiChargingPile2Line className="h-4 w-4 text-primary" />
          )}
          {product.category === "solar-street" && (
            <RiSunLine className="h-4 w-4 text-primary" />
          )}
          {(product.category === "cabinet" ||
            product.category === "container") && (
            <RiBatteryChargeLine className="h-4 w-4 text-primary" />
          )}
          <span className="uppercase tracking-[0.16em]">
            {product.category === "all"
              ? "All Products"
              : categories.find((c) => c.id === product.category)?.label}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 flex-1">{product.subtitle}</p>

        <div className="flex items-center justify-between pt-1">
          {product.tag && (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {product.tag}
            </span>
          )}
          <button className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
            <span>Learn More</span>
            <RiArrowRightSLine className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

