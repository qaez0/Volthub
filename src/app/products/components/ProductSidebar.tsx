import { RiArrowRightSLine } from "react-icons/ri";
import { ProductCategory, categories } from "./productData";

interface ProductSidebarProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

export default function ProductSidebar({
  activeCategory,
  onCategoryChange,
}: ProductSidebarProps) {
  return (
    <aside className="w-[260px] space-y-3 self-start flex-shrink-0">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between rounded-2xl px-5 py-4 text-left text-sm md:text-base transition-all shadow-sm
              ${
                isActive
                  ? "bg-white text-slate-900 ring-2 ring-primary/70 shadow-md"
                  : "bg-white/60 text-slate-700 hover:bg-white hover:shadow-md"
              }`}
          >
            <span>{category.label}</span>
            <RiArrowRightSLine
              className={`h-5 w-5 ${
                isActive ? "text-primary" : "text-slate-400"
              }`}
            />
          </button>
        );
      })}

      <div className="hidden lg:block mt-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-4 text-xs space-y-1">
        <p className="font-semibold text-sm">
          Trusted Energy Storage Supplier
        </p>
        <p className="text-white/70">
          Certified safety, bankable performance and global project experience.
        </p>
      </div>
    </aside>
  );
}

