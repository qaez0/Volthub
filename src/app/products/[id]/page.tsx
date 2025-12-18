import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ProductDetail from "../components/ProductDetail";
import { getProductById } from "../components/productData";
import BackToTopButton from "@/components/common/BackToTopButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found - VoltHub",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - VoltHub`,
    description:
      product.description ||
      `Learn more about ${product.name} from VoltHub. ${product.category} energy solution with specifications and pricing.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-12 md:pb-20 flex  items-center justify-center">
      <LayoutContainer>
        <ProductDetail product={product} />
        <BackToTopButton />
      </LayoutContainer>
    </main>
  );
}


