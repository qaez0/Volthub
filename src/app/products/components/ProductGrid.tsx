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
    <div className="space-y-6 flex-1">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-primary font-semibold">
            Products
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            {activeCategory === "all"
              ? "All Products"
              : categories.find((c) => c.id === activeCategory)?.label}
          </h2>
        </div>
        <p className="text-xs md:text-sm text-slate-500">
          Showing {products.length} of {allProducts.length} products
        </p>
      </div>

      <div className="grid gap-5 xl:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

