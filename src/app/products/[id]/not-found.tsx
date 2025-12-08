import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-900">Product Not Found</h1>
        <p className="text-slate-600">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          <RiArrowLeftLine className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>
      </div>
    </main>
  );
}



