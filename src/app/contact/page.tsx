"use client";

import { useState } from "react";
import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SplitText, { SplitTextProps } from "@/components/ui/split-text";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@volthub.com", "info@volthub.com"],
      description: "Send us an email anytime",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Energy Street", "Green City, GC 12345"],
      description: "Visit our headquarters",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"],
      description: "We're here to help",
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: true,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      action: "Call Now",
      available: true,
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and get tips",
      action: "Join Forum",
      available: true,
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with technical issues",
      action: "Get Support",
      available: true,
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

  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/power-grid.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6 w-full">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left w-full">
            <SplitText
              text="CONTACT US"
              className="text-xl font-normal md:font-semibold"
              {...splitTextOptions}
              tag="h6"
            />
            <SplitText
              text={
                <>
                  We&apos;re here to help{" "}
                  <span className="text-[#ff6f8b]">power your journey.</span>
                </>
              }
              className="text-[40px] md:text-[60px] font-bold w-full sm:w-4/6 text-center sm:text-left leading-[1.3]"
              {...splitTextOptions}
              tag="h1"
              appearDelayMs={400}
            />
            <SplitText
              tag="h6"
              text="Get in touch with our team for support, questions, or partnerships"
              className="text-xl font-normal md:font-semibold w-full md:w-3/4 text-foreground"
              {...splitTextOptions}
              appearDelayMs={500}
            />
          </div>
        </LayoutContainer>
      </MainContent>

      <section className="py-16">
        <LayoutContainer>
          <div className="flex flex-col gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions? Need support? We&apos;re here to help you every
                step of the way.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-primary"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-primary"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-primary"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium mb-2 text-primary"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm text-black"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-primary"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-primary"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm resize-none text-black"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-sm text-muted-foreground"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Support Options
                  </h3>
                  <div className="grid gap-4">
                    {supportOptions.map((option, index) => (
                      <Card
                        key={index}
                        className="p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <option.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary">
                              {option.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {option.description}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-muted-foreground"
                            disabled={!option.available}
                          >
                            {option.action}
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Can&apos;t find what you&apos;re looking for? Check out our FAQ
                section.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="text-muted-foreground"
              >
                View FAQ
              </Button>
            </div>
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}
