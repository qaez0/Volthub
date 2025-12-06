import { RiHandHeartLine } from "react-icons/ri";
import { partnerships } from "./data";

export default function PartnershipsSection() {
  return (
    <div className="bg-white rounded-none md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center justify-center gap-3">
        <RiHandHeartLine className="text-3xl text-primary" />
        <span className="gradient-text">Strategic Partnerships</span>
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {partnerships.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-between p-5 bg-linear-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-semibold text-gray-900 text-lg">
              {partner.name}
            </span>
            <span className="text-sm text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-200">
              {partner.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

