"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import type React from "react";
import { useSearchParams } from "next/navigation";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";

const socialIcons = [
  { icon: RiLinkedinFill, href: "https://linkedin.com", label: "Visit VoltHub on LinkedIn" },
  { icon: RiTwitterFill, href: "https://twitter.com", label: "Visit VoltHub on Twitter" },
  { icon: RiFacebookFill, href: "https://facebook.com", label: "Visit VoltHub on Facebook" },
  { icon: RiInstagramLine, href: "https://instagram.com", label: "Visit VoltHub on Instagram" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  // Pre-fill form based on URL parameters
  useEffect(() => {
    const subject = searchParams.get("subject");
    const interest = searchParams.get("interest");
    const product = searchParams.get("product");
    const model = searchParams.get("model");
    const productName = searchParams.get("productName");

    // If interest is directly provided, use it
    if (interest) {
      setFormState((prev) => ({ ...prev, interest }));
      
      // Pre-fill details if subject is provided
      if (subject === "quote") {
        // Map interest values to readable labels
        const interestLabels: Record<string, string> = {
          "residential-solutions": "Residential Solutions",
          "commercial-solutions": "Commercial Solutions",
          "industrial-solutions": "Industrial Solutions",
          "rural-projects": "Rural Projects",
          "ev-charging-quote": "EV Charging",
          "solar-installation-quote": "Solar Installation",
          "general-inquiry": "General Inquiry",
        };
        const interestLabel = interestLabels[interest] || interest.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
        const detailsText = `I would like to request a quote for ${interestLabel}. Please contact me with pricing and availability information.`;
        setFormState((prev) => ({ ...prev, details: detailsText }));
      } else if (subject === "installation") {
        const interestLabels: Record<string, string> = {
          "residential-solutions": "Residential Solutions",
          "commercial-solutions": "Commercial Solutions",
          "industrial-solutions": "Industrial Solutions",
          "rural-projects": "Rural Projects",
          "ev-charging-installation": "EV Charging Installation",
          "solar-energy-installation": "Solar Energy Installation",
        };
        const interestLabel = interestLabels[interest] || interest.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
        const detailsText = `I would like to request installation for ${interestLabel}. Please contact me to discuss installation options and scheduling.`;
        setFormState((prev) => ({ ...prev, details: detailsText }));
      }
    } else if (subject === "installation" || subject === "quote") {
      // Set interest based on product type
      if (product) {
        let interestValue = "";
        if (product.includes("ev") || product.includes("charging")) {
          interestValue = subject === "installation" ? "ev-charging-installation" : "ev-charging-station";
        } else if (product.includes("solar")) {
          if (productName && productName.toLowerCase().includes("street")) {
            interestValue = subject === "installation" ? "street-light-installation" : "solar-street-lights";
          } else {
            interestValue = subject === "installation" ? "solar-energy-installation" : "solar-energy-installation";
          }
        } else if (product.includes("storage") || product.includes("battery") || product.includes("smart-home")) {
          interestValue = subject === "installation" ? "energy-storage-installation" : "smart-home-ips";
        } else if (product.includes("cabinet")) {
          interestValue = "cabinet-type-power-supply";
        } else if (product.includes("container")) {
          interestValue = "container-type-power-supply";
        }
        if (interestValue) {
          setFormState((prev) => ({ ...prev, interest: interestValue }));
        }
      }

      // Pre-fill details based on subject
      let detailsText = "";
      if (subject === "installation") {
        detailsText = "I would like to request installation for ";
      } else {
        detailsText = "I would like to request a quote for ";
      }
      
      if (productName) {
        detailsText += productName;
      } else if (product) {
        detailsText += product;
      } else {
        detailsText += "this product";
      }
      
      if (model) {
        detailsText += ` (Model: ${model})`;
      }
      
      if (subject === "installation") {
        detailsText += ". Please contact me to discuss installation options and scheduling.";
      } else {
        detailsText += ". Please contact me with pricing and availability information.";
      }
      
      setFormState((prev) => ({ ...prev, details: detailsText }));
    }
  }, [searchParams]);

  // Calculate dropdown position and max height
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const updateDropdownStyle = () => {
        if (!dropdownRef.current) return;
        
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const footer = document.querySelector('footer');
        const footerTop = footer ? footer.getBoundingClientRect().top : viewportHeight;
        const maxHeight = Math.min(
          spaceBelow - 20, // Leave 20px margin
          footerTop - rect.bottom - 20, // Don't go below footer
          viewportHeight * 0.6, // Max 60% of viewport height
          400 // Absolute max height
        );

        setDropdownStyle({
          maxHeight: `${Math.max(maxHeight, 200)}px`, // Minimum 200px
          overflowY: 'auto' as const,
        });
      };

      updateDropdownStyle();
      window.addEventListener('resize', updateDropdownStyle);
      window.addEventListener('scroll', updateDropdownStyle);
      
      return () => {
        window.removeEventListener('resize', updateDropdownStyle);
        window.removeEventListener('scroll', updateDropdownStyle);
      };
    }
  }, [isDropdownOpen]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside as EventListener);
      document.addEventListener("touchstart", handleClickOutside as EventListener);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside as EventListener);
        document.removeEventListener("touchstart", handleClickOutside as EventListener);
      };
    }
  }, [isDropdownOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const interestOptions = [
    { value: "", label: "Select Interest" },
    // Products
    { value: "ev-charging-station", label: "EV Charging Station" },
    { value: "solar-street-lights", label: "Solar Street Lights" },
    { value: "smart-home-ips", label: "Smart Home IPS" },
    { value: "cabinet-type-power-supply", label: "Cabinet Type Power Supply" },
    { value: "container-type-power-supply", label: "Container Type Power Supply" },
    // Services - EV Charging
    { value: "ev-charging-installation", label: "EV Charging Installation" },
    { value: "ev-charging-quote", label: "EV Charging Quote" },
    { value: "ac-charger-installation", label: "AC Charger Installation (7kW)" },
    { value: "dc-fast-charger-installation", label: "DC Fast Charger Installation (60-400kW)" },
    // Services - Solar Installation
    { value: "solar-energy-installation", label: "Solar Energy Installation" },
    { value: "solar-installation-quote", label: "Solar Installation Quote" },
    { value: "street-light-installation", label: "Street Light Installation" },
    { value: "solar-street-light-quote", label: "Solar Street Light Quote" },
    { value: "off-grid-power-generation", label: "Off-Grid Power Generation System" },
    { value: "energy-storage-installation", label: "Energy Storage Installation" },
    // Sector-Specific
    { value: "residential-solutions", label: "Residential Solutions" },
    { value: "commercial-solutions", label: "Commercial Solutions" },
    { value: "industrial-solutions", label: "Industrial Solutions" },
    { value: "rural-projects", label: "Rural Projects" },
    // General
    { value: "general-inquiry", label: "General Inquiry" },
    { value: "technical-support", label: "Technical Support" },
    { value: "maintenance-service", label: "Maintenance Service" },
  ];

  const handleInterestChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }));
    setIsDropdownOpen(false);
  };

  const selectedOption = interestOptions.find(opt => opt.value === formState.interest) || interestOptions[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Your request has been sent to our team. We'll be in touch shortly.");

      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        details: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-10">
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=futuristic%20sustainable%20city%20skyline%20at%20sunset%20with%20renewable%20energy%20infrastructure%2C%20solar%20panels%20and%20wind%20turbines%2C%20clean%20modern%20architecture%2C%20warm%20golden%20lighting%2C%20professional%20corporate%20background&width=1920&height=600&seq=contact001&orientation=landscape')",
        }}
      >
        <div className="absolute inset-0 backdrop-blur"/>
        <div className="relative">
          <LayoutContainer className="flex-col space-y-14">
            <div className="text-center space-y-4">
              <p className="font-orbitron tracking-[0.3em] uppercase text-sm text-secondary">
                Partner with VoltHub
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Ready to transform your energy future?
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Tell us about your project and we&apos;ll craft a tailored plan
                that accelerates your transition to clean, resilient power.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex-1 bg-black/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl overflow-visible relative z-10">
                <h3 className="text-2xl font-semibold mb-6">Get Your Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5 overflow-visible relative">
                  <div className="flex flex-col md:flex-row gap-4">
                    {["firstName", "lastName"].map((field) => (
                      <input
                        key={field}
                        name={field}
                        value={formState[field as keyof typeof formState]}
                        onChange={handleChange}
                        placeholder={
                          field === "firstName" ? "First Name" : "Last Name"
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    ))}
                  </div>
                  {["email", "phone"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleChange}
                      placeholder={
                        field === "email" ? "Email Address" : "Phone Number"
                      }
                      type={field === "email" ? "email" : "tel"}
                      required={field === "email"}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  ))}
                  <div className="relative overflow-visible z-50" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-5 md:py-3 pr-14 md:pr-10 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-secondary text-left text-xl md:text-base touch-manipulation min-h-[60px] md:min-h-[48px] flex items-center justify-between"
                      style={{
                        fontSize: '20px',
                        lineHeight: '1.6',
                      }}
                    >
                      <span>{selectedOption.label}</span>
                      <svg
                        className={`w-7 h-7 md:w-5 md:h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div 
                        data-dropdown-portal
                        className="absolute z-[9999] w-full mt-2 rounded-xl bg-gray-800/95 backdrop-blur-sm border border-white/30 shadow-2xl top-full left-0 overflow-y-auto"
                        style={{ zIndex: 9999, ...dropdownStyle }}
                      >
                        {interestOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInterestChange(option.value)}
                            className={`w-full px-5 py-4 md:py-3 text-left text-xl md:text-base transition-colors touch-manipulation min-h-[56px] md:min-h-[48px] flex items-center ${
                              formState.interest === option.value
                                ? 'bg-primary/30 text-secondary font-semibold'
                                : 'text-white hover:bg-white/10'
                            }`}
                            style={{
                              fontSize: '20px',
                              lineHeight: '1.6',
                            }}
                          >
                            {formState.interest === option.value && (
                              <svg className="w-6 h-6 mr-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                            <span>{option.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    <input type="hidden" name="interest" value={formState.interest} />
                  </div>
                  <textarea
                    name="details"
                    value={formState.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </button>
                </form>
              </div>

              <div className="flex-1 space-y-10 relative z-0">
                <Card className="bg-black/50 backdrop-blur-sm border-white/20 relative z-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6 font-bold">
                      {[
                        {
                          icon: RiPhoneLine,
                          title: "Phone",
                          detail: "+63 9659700823",
                        },
                        {
                          icon: RiMailLine,
                          title: "Email",
                          detail: "admin-help@volthub-ev.com",
                        },
                        {
                          icon: RiMapPinLine,
                          title: "Address",
                          detail: "High Street South Corporate Plaza Tower 2. 11th Ave",
                          detail2: "Taguig, Metro Manila",
                          detail3: "Philippines",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-center gap-4 px-4 py-3"
                        >
                          <span className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center border-2 border-secondary">
                            <item.icon className="text-xl gradient-text" />
                          </span>
                          <div className="leading-snug">
                            <p className="font-semibold text-white text-base">
                              {item.title}
                            </p>
                            <p className="text-white text-base">
                              {item.detail}
                            </p>
                            {item.detail2 && (
                              <p className="text-white text-base">
                                {item.detail2}
                              </p>
                            )}
                            {item.detail3 && (
                              <p className="text-white text-base">
                                {item.detail3}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, href, label }) => (
                      <a
                        key={href}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
                  <p className="text-blue-100 text-sm">
                    Our technical support team is available around the clock to
                    assist with any questions or system issues.
                  </p>
                </div>
              </div>
            </div>
          </LayoutContainer>
        </div>
      </section>
    </main>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <main className="pt-10">
        <section className="relative py-20 text-white bg-cover bg-center">
          <div className="absolute inset-0 backdrop-blur"/>
          <div className="relative">
            <LayoutContainer className="flex-col space-y-14">
              <div className="text-center space-y-4">
                <p className="font-orbitron tracking-[0.3em] uppercase text-sm text-secondary">
                  Partner with VoltHub
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Ready to transform your energy future?
                </h1>
              </div>
            </LayoutContainer>
          </div>
        </section>
      </main>
    }>
      <ContactForm />
    </Suspense>
  );
}
