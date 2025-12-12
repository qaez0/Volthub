import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
      <LayoutContainer>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The blog article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <RiArrowLeftLine className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </LayoutContainer>
    </main>
  );
}

