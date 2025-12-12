import LocationMapWrapper from "@/components/common/LocationMapWrapper";
import { futureGoals, timelineEvents } from "./data";

export default function HistorySection() {
  return (
    <div className="bg-white rounded-none md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
      <h3 className="text-3xl font-bold text-primary mb-8 text-center gradient-text">
        HISTORY
      </h3>

      <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
        <p className="text-lg max-w-3xl mx-auto text-center">
          The idea for Volthub was born out of the founders&apos; shared vision
          to address two urgent global needs: the growth of electric mobility
          and the demand for renewable energy. Inspired by rapid EV adoption and
          the environmental cost of fossil fuels, the team began designing
          solutions that merge solar power with charging infrastructure.
        </p>

        <div className="flex flex-col gap-8 mt-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">
                {event.period}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h4 className="font-bold text-gray-900 text-2xl mb-6">
            Future Goals (2026 and beyond)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <h5 className="font-semibold text-gray-900 mb-3 text-lg">
                  {goal.title}
                </h5>
                <p className="text-gray-700 text-sm mb-3">{goal.description}</p>
                {goal.details && (
                  <ul className="flex flex-col gap-1.5 list-disc list-inside text-sm text-gray-600 ml-2">
                    {goal.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2 text-lg">
                  Established:
                </p>
                <p className="text-gray-700">January 17, 2025</p>
              </div>
              <div className="select-text">
                <p className="font-semibold text-gray-900 mb-2 text-lg">
                  Address:
                </p>
                <p className="text-gray-700">
                  Unit 2503, High Street South Corporate Plaza Tower 2,
                  Bonifacio Global City, Taguig, Philippines
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4 text-lg">
                Incorporators:
              </p>
              <div className="flex flex-col gap-3 text-gray-700">
                <p>
                  <span className="font-semibold">President/CEO:</span> Vincent
                  Paul Lim Oo
                </p>
                <p>
                  <span className="font-semibold">Vice President/COO:</span>{" "}
                  Atty. Maria Evita R. Igot
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <LocationMapWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
