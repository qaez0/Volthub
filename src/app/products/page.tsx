import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-slate-50 min-h-screen flex items-center justify-center">
          <p className="text-slate-600">Loading products...</p>
        </main>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
