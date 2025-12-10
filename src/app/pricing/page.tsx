"use client";

import { useState } from "react";
import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SplitText, { SplitTextProps } from "@/components/ui/split-text";
import { Check, Zap, DollarSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BackToTopButton from "@/components/common/BackToTopButton";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for occasional EV drivers",
      price: { monthly: 29, yearly: 290 },
      originalPrice: { monthly: 39, yearly: 390 },
      features: [
        "Up to 50kWh charging per month",
        "Access to standard charging stations",
        "Basic mobile app features",
        "Email support",
        "Charging history tracking",
      ],
      limitations: ["No priority booking", "Standard charging speeds only"],
      popular: false,
      icon: "⚡",
    },
    {
      id: 2,
      name: "Pro",
      description: "Ideal for regular EV commuters",
      price: { monthly: 59, yearly: 590 },
      originalPrice: { monthly: 79, yearly: 790 },
      features: [
        "Up to 150kWh charging per month",
        "Access to fast charging stations",
        "Priority booking at busy stations",
        "Advanced mobile app features",
        "24/7 phone support",
        "Real-time station availability",
        "Route planning with charging stops",
        "Charging analytics dashboard",
      ],
      limitations: ["Limited ultra-fast charging access"],
      popular: true,
      icon: "🚀",
    },
    {
      id: 3,
      name: "Premium",
      description: "For power users and businesses",
      price: { monthly: 99, yearly: 990 },
      originalPrice: { monthly: 129, yearly: 1290 },
      features: [
        "Unlimited charging per month",
        "Access to all charging stations",
        "Ultra-fast charging priority",
        "Premium mobile app features",
        "Dedicated account manager",
        "API access for fleet management",
        "Custom charging schedules",
        "Advanced analytics & reporting",
        "Multi-user account management",
        "White-label solutions",
      ],
      limitations: [],
      popular: false,
      icon: "👑",
    },
  ];

  const splitTextOptions: Omit<SplitTextProps, "text"> = {
    duration: 1,
    ease: "power3.out",
    splitType: "words",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    delay: 10,
  };

  const savings = billingCycle === "yearly" ? "Save 25%" : "";

  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/charging-stats.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left">
            <SplitText
              text="PRICING PLANS"
              className="text-xl font-normal md:font-semibold"
              {...splitTextOptions}
              tag="h6"
            />
            <SplitText
              text={
                <>
                  Choose the perfect plan{" "}
                  <span className="text-[#ff6f8b]">for your energy needs.</span>
                </>
              }
              className="text-[40px] md:text-[60px] font-bold w-full sm:w-4/6 text-center sm:text-left leading-[1.3]"
              {...splitTextOptions}
              tag="h1"
              appearDelayMs={400}
            />
            <SplitText
              tag="h6"
              text="Flexible pricing options designed to power your journey"
              className="text-xl font-normal md:font-semibold w-full md:w-3/4 text-foreground"
              {...splitTextOptions}
              appearDelayMs={500}
            />
          </div>
        </LayoutContainer>
      </MainContent>

      <section className="py-16">
        <LayoutContainer>
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                No hidden fees, no surprises. Choose the plan that fits your
                lifestyle.
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span
                  className={`text-sm font-medium ${
                    billingCycle === "monthly"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </span>
                <span
                  className={`text-sm font-medium ${
                    billingCycle === "yearly"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly
                </span>
                {billingCycle === "yearly" && (
                  <Badge variant="secondary" className="ml-2">
                    {savings}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="text-4xl mb-4">{plan.icon}</div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {plan.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-4xl font-bold text-primary">
                          ${plan.price[billingCycle as keyof typeof plan.price]}
                        </span>
                        <span className="text-muted-foreground">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through mt-1">
                            $
                            {
                              plan.originalPrice[
                                billingCycle as keyof typeof plan.originalPrice
                              ]
                            }
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-primary">
                        What&apos;s included:
                      </h4>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-primary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="space-y-2 mb-8">
                        <h4 className="font-semibold text-muted-foreground">
                          Limitations:
                        </h4>
                        {plan.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-muted-foreground text-sm">
                              •
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button
                      className={cn(
                        "w-full",
                        !plan.popular && "text-muted-foreground"
                      )}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Choose {plan.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="p-8 bg-muted/50">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Need a custom solution for your business or fleet? We offer
                  tailored pricing and features.
                </p>
                <Button variant="outline" size="lg" className="text-primary">
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <Card className="flex-1 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    No Hidden Fees
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Transparent pricing with no surprise charges. What you see is
                  what you pay.
                </p>
              </Card>

              <Card className="flex-1 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    Cancel Anytime
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  No long-term contracts. Cancel or change your plan whenever
                  you need.
                </p>
              </Card>
            </div>
          </div>
        </LayoutContainer>
      </section>
      <BackToTopButton />
    </main>
  );
}
