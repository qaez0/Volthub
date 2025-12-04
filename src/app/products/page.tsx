"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ProductBanner from "./components/ProductBanner";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";
import { ProductCategory, products } from "./components/productData";

export default function Products() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(
    categoryParam && ["all", "ev-charging", "solar-street", "smart-home", "cabinet", "container"].includes(categoryParam)
      ? categoryParam
      : "all"
  );

  useEffect(() => {
    if (categoryParam && ["all", "ev-charging", "solar-street", "smart-home", "cabinet", "container"].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero / banner (changes with category) */}
      <ProductBanner activeCategory={activeCategory} />

      {/* Main layout: sidebar + grid */}
      <section className="py-10 md:py-14">
        <LayoutContainer className="flex gap-8 items-start">
          {/* Sidebar categories */}
          <ProductSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Products grid */}
          <ProductGrid
            products={filteredProducts}
            activeCategory={activeCategory}
          />
        </LayoutContainer>
      </section>
    </main>
  );
}
