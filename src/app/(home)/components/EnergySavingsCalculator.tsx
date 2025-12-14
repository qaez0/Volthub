"use client";

import { useState } from "react";
import { RiCalculatorLine, RiMoneyDollarCircleLine, RiCalendarLine, RiArrowUpLine, RiLeafLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";
import Link from "next/link";

interface EnergySavingsCalculatorProps {
  title?: string;
  description?: string;
}

export default function EnergySavingsCalculator({
  title = "Energy Savings Calculator",
  description = "Discover how much you could save with VoltHub's energy solutions. Get an instant estimate of your potential savings and ROI.",
}: EnergySavingsCalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [systemSize, setSystemSize] = useState<string>("");
  const [location, setLocation] = useState<string>("residential");
  const [results, setResults] = useState<{
    monthlySavings: number;
    annualSavings: number;
    paybackPeriod: number;
    lifetimeSavings: number;
    co2Reduction: number;
  } | null>(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const size = parseFloat(systemSize) || 0;

    if (bill <= 0 || size <= 0) {
      alert("Please enter valid values for monthly bill and system size.");
      return;
    }

    // Calculation assumptions
    const averageElectricityRate = 0.12; // $0.12 per kWh (Philippines average)
    const monthlyUsage = bill / averageElectricityRate; // kWh per month
    const systemProduction = size * 120; // kWh per month (assuming 120 kWh per kW per month)
    const coverage = Math.min(systemProduction / monthlyUsage, 1); // Max 100% coverage

    const monthlySavings = bill * coverage * 0.9; // 90% of covered usage (accounting for grid fees)
    const annualSavings = monthlySavings * 12;

    // System cost estimation (varies by location)
    const costPerWatt = location === "residential" ? 3.5 : location === "commercial" ? 3.0 : 2.5;
    const systemCost = size * 1000 * costPerWatt; // Convert kW to W

    // Incentives (30% tax credit/rebate)
    const incentives = systemCost * 0.3;
    const netCost = systemCost - incentives;

    const paybackPeriod = netCost / annualSavings;
    const lifetimeSavings = annualSavings * 25 - netCost; // 25 year system lifetime

    // CO2 reduction (assuming 0.5 kg CO2 per kWh)
    const annualProduction = systemProduction * 12;
    const co2Reduction = (annualProduction * 0.5) / 1000; // Convert to tons

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      lifetimeSavings: Math.round(lifetimeSavings),
      co2Reduction: Math.round(co2Reduction * 10) / 10,
    });
  };

  const resetCalculator = () => {
    setMonthlyBill("");
    setSystemSize("");
    setLocation("residential");
    setResults(null);
  };

  return (
    <section className="section-spacing bg-white">
      <LayoutContainer>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold uppercase tracking-wide mb-4">
            <RiCalculatorLine className="h-4 w-4 text-white" />
            Calculator
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Savings</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="monthlyBill" className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Electricity Bill (₱)
                </label>
                <input
                  type="number"
                  id="monthlyBill"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  placeholder="e.g., 5000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                />
                <p className="text-sm text-gray-500 mt-1">Enter your average monthly electricity bill</p>
              </div>

              <div>
                <label htmlFor="systemSize" className="block text-sm font-semibold text-gray-700 mb-2">
                  System Size (kW)
                </label>
                <input
                  type="number"
                  id="systemSize"
                  value={systemSize}
                  onChange={(e) => setSystemSize(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                />
                <p className="text-sm text-gray-500 mt-1">Recommended: 3-10 kW for homes, 10-50 kW for businesses</p>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Installation Type
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              <button
                onClick={calculateSavings}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              >
                Calculate Savings
              </button>
              {results && (
                <button
                  onClick={resetCalculator}
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            {results ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Savings Estimate</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <RiMoneyDollarCircleLine className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Monthly Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">₱{results.monthlySavings.toLocaleString()}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <RiArrowUpLine className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Annual Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">₱{results.annualSavings.toLocaleString()}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <RiCalendarLine className="h-5 w-5 text-gray-600" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">Payback Period</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{results.paybackPeriod} years</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <RiLeafLine className="h-5 w-5 text-green-600" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">CO₂ Reduction</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{results.co2Reduction} tons/year</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/20">
                    <div className="flex items-center gap-3 mb-2">
                      <RiMoneyDollarCircleLine className="h-6 w-6 text-accent" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">25-Year Lifetime Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">₱{results.lifetimeSavings.toLocaleString()}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-center block"
                    >
                      Get a Free Consultation
                    </Link>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      *Estimates are approximate. Actual savings may vary based on location, usage patterns, and system configuration.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <RiCalculatorLine className="h-14 w-14 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Calculate?</h3>
                <p className="text-gray-600 max-w-sm leading-relaxed">
                  Enter your information on the left to see your potential energy savings and return on investment.
                </p>
              </div>
            )}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

