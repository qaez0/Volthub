export default function WhoWeAreSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-linear-to-br from-white to-gray-50 rounded-none md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h3 className="text-3xl font-bold text-primary mb-6 text-center gradient-text">
          WHO WE ARE
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          <span className="font-bold text-gray-900">
            Volthub Electric Power Generation Services Corporation
          </span>{" "}
          is a progressive energy-technology company dedicated to advancing the
          future of clean power and sustainable transportation. We specialize in
          delivering integrated solutions—combining EV charging systems, solar
          power generation, and smart energy technologies—that empower
          communities, businesses, and cities to transition toward a greener,
          more efficient future.
          <br />
          <br />
          We believe in innovation with purpose: creating energy solutions that
          are reliable, accessible, and environmentally responsible.
        </p>
      </div>

      <div className="bg-linear-to-br from-white to-gray-50 rounded-none md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h3 className="text-3xl font-bold text-primary mb-6 text-center gradient-text">
          WHAT WE ARE
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          We are a renewable energy and electric mobility solutions provider
          committed to building a cleaner, smarter, and more sustainable
          Philippines. Volthub bridges the gap between traditional energy
          systems and modern electric mobility by offering solar-integrated EV
          chargers, energy-efficient technologies, and future-ready
          infrastructures designed for rapid urban development.
        </p>
      </div>
    </div>
  );
}
