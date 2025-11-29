"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-lg shadow-md bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

interface LocationMapWrapperProps {
  className?: string;
}

export default function LocationMapWrapper(props: LocationMapWrapperProps) {
  return <LocationMap {...props} />;
}

