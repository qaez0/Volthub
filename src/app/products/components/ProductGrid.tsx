import { Product, ProductCategory, categories, products as allProducts } from "./productData";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  activeCategory: ProductCategory;
}

export default function ProductGrid({
  products,
  activeCategory,
}: ProductGridProps) {
  return (
    <div className="space-y-4 md:space-y-6 flex-1 w-full md:w-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4">
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-primary font-semibold">
            Products
          </p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mt-1">
            {activeCategory === "all"
              ? "All Products"
              : categories.find((c) => c.id === activeCategory)?.label}
          </h2>
        </div>
        <p className="text-xs md:text-sm text-slate-500">
          Showing {products.length} of {allProducts.length} products
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 md:py-16">
          <p className="text-slate-500 text-sm md:text-base">No products found in this category.</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 md:gap-5 xl:gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-1rem)]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

