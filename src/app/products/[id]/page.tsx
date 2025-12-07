import { notFound } from "next/navigation";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ProductDetail from "../components/ProductDetail";
import { getProductById } from "../components/productData";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-12 md:pb-20 flex  items-center justify-center">
      <LayoutContainer>
        <ProductDetail product={product} />
      </LayoutContainer>
    </main>
  );
}


