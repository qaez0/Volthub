"use client";

import { useState } from "react";
import LayoutContainer from "@/components/layout/LayoutContainer";
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
  { icon: RiLinkedinFill, href: "#" },
  { icon: RiTwitterFill, href: "#" },
  { icon: RiFacebookFill, href: "#" },
  { icon: RiInstagramLine, href: "#" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("We received your request and will be in touch shortly!");
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      details: "",
    });
  };

  return (
    <main className="pt-32">
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=futuristic%20sustainable%20city%20skyline%20at%20sunset%20with%20renewable%20energy%20infrastructure%2C%20solar%20panels%20and%20wind%20turbines%2C%20clean%20modern%20architecture%2C%20warm%20golden%20lighting%2C%20professional%20corporate%20background&width=1920&height=600&seq=contact001&orientation=landscape')",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative">
          <LayoutContainer className="space-y-14">
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

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6">Get Your Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select Product Interest</option>
                    <option value="solar-systems">Solar Systems</option>
                    <option value="ev-chargers">EV Chargers</option>
                    <option value="energy-storage">Energy Storage</option>
                    <option value="smart-lighting">Smart Lighting</option>
                  </select>
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
                    className="w-full bg-secondary text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Send Quote Request
                  </button>
                </form>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: RiPhoneLine,
                        title: "Phone",
                        detail: "+1 (555) 123-4567",
                      },
                      {
                        icon: RiMailLine,
                        title: "Email",
                        detail: "info@volthub.com",
                      },
                      {
                        icon: RiMapPinLine,
                        title: "Address",
                        detail: "123 Energy Drive, San Francisco, CA 94105",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                          <item.icon className="text-xl text-secondary" />
                        </span>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-blue-100 text-sm">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialIcons.map(({ icon: Icon, href }) => (
                      <a
                        key={href}
                        href={href}
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
