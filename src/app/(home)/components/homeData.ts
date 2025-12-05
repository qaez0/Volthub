import type { Route } from "next";
import {
  RiBatteryChargeLine,
  RiLeafLine,
  RiSunLine,
  RiFlashlightLine,
  RiHomeGearLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiSpeedUpLine,
  RiPlantLine,
  RiUserLine,
  RiBuildingLine,
  RiVideoLine,
  RiFileTextLine,
  RiDownloadLine,
  RiBookOpenLine,
} from "react-icons/ri";

// Carousel Slides
export const carouselSlides = [
  {
    id: 1,
    title: "Powering Tomorrow, Today",
    subtitle: "Smart Power. Clean Future.",
    description:
      "VoltHub delivers next-generation electric and renewable energy solutions—from smart solar systems to EV charging infrastructure—for a cleaner, more resilient planet.",
    image: "/HomeBanner/89.png",
    backgroundImage: "/HomeBanner/banner1.jpg",
    showimg: false,
    descriptionClassName: "w-full md:w-1/2 md:ml-auto md:max-w-2xl",
    buttonText: "Explore Products",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-primary/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
  {
    id: 2,
    title: "Residential Energy Storage",
    subtitle: "Energy Independence",
    description:
      "Smart home battery systems that store solar energy for round-the-clock power. Reduce your electricity bills and achieve energy independence with our cutting-edge residential storage solutions.",
    image: "/HomeBanner/LVXC.png",
    backgroundImage: "/HomeBanner/banner2.png",
    showimg: true,
    imageClassName: "absolute bottom-0 right-0 h-full w-1/2 mb-[-170px]",
    descriptionClassName: "space-y-6 text-white z-[100]",
    buttonText: "View Residential Solutions",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-emerald-700/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
  {
    id: 3,
    title: "Commercial & Industrial ESS",
    subtitle: "Enterprise Solutions",
    description:
      "Scalable energy storage systems for businesses and factories. Maximize energy efficiency, reduce costs, and ensure uninterrupted power with our industrial-grade storage solutions.",
    image: "/HomeBanner/banner3product.png",
    backgroundImage: "/HomeBanner/banner3.png",
    showimg: false,
    imageClassName: "absolute bottom-0 right-0 h-full w-1/2 mb-[-170px]",
    descriptionClassName: "space-y-6 text-white z-[100]",
    buttonText: "Learn About C&I Solutions",
    buttonLink: "/solutions",
    gradient: "bg-gradient-to-br from-accent/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
  {
    id: 4,
    title: "EV Charging Infrastructure",
    subtitle: "Future of Mobility",
    description:
      "Fast charging networks for electric vehicles. Build comprehensive EV charging infrastructure with smart grid integration and seamless user experience.",
    image:
      "https://readdy.ai/api/search-image?query=electric%20vehicle%20charging%20station%20network%2C%20modern%20EV%20charging%20infrastructure%2C%20smart%20grid%20technology%2C%20sustainable%20transportation%2C%20clean%20mobility%20future&width=1920&height=1080&seq=hero004&orientation=landscape",
    backgroundImage: "/HomeBanner/commercial.png",
    buttonText: "Explore EV Solutions",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-secondary/80 via-primary/70 to-transparent",
  },
  {
    id: 5,
    title: "Container Energy Solutions",
    subtitle: "Modular Power Systems",
    description:
      "Portable and scalable containerized energy storage systems. Perfect for remote locations, emergency backup, and temporary power needs with rapid deployment capabilities.",
    image: "/HomeBanner/container.png",
    backgroundImage: "/HomeBanner/container.png",
    showimg: false,
    imageClassName: "absolute bottom-0 right-0 h-full w-1/2",
    descriptionClassName: "space-y-6 text-white z-[100]",
    buttonText: "Learn More",
    buttonLink: "/products",
    gradient: "bg-gradient-to-br from-blue-800/90 via-primary/70 to-transparent",
    layout: "side-by-side" as const,
  },
];

// Features
export const features = [
  {
    icon: RiShieldCheckLine,
    title: "Enterprise-Grade Reliability",
    description: "Built with industrial standards for maximum uptime and durability",
  },
  {
    icon: RiGlobalLine,
    title: "National Deployment",
    description: "Proven solutions deployed across the Philippines",
  },
  {
    icon: RiPlantLine,
    title: "Sustainable Impact",
    description: "Measurable reduction in carbon footprint from day one",
  },
];

// Stats
export const stats = [
  { label: "MW Installed", value: "500+", icon: RiSunLine },
  { label: "CO₂ Tons Reduced", value: "15K", icon: RiLeafLine },
  { label: "Lives Impacted", value: "100K+", icon: RiGlobalLine },
];

// Product Showcases
export const productShowcases = [
  {
    badge: "Featured Product",
    badgeColor: "text-primary",
    title: "Residential Energy Storage",
    titleParts: [
      { text: "Residential", color: "text-primary" },
      { text: "Energy Storage", color: "text-accent" },
    ],
    description:
      "Smart home battery systems for energy independence. Store solar energy and reduce your electricity bills with our cutting-edge residential storage solutions.",
    image: "/HomeBanner/89.png",
    imageAlt: "Residential Energy Storage System",
    features: [
      { icon: RiBatteryChargeLine, text: "5-15 kWh Capacity", color: "text-primary" },
      { icon: RiSunLine, text: "Smart Monitoring", color: "text-accent" },
      { icon: RiShieldCheckLine, text: "10+ Year Warranty", color: "text-green-600" },
    ],
    ctas: [
      { text: "View Residential Energy Storage Products", href: "/products" as Route, variant: "primary" as const },
      { text: "Get Quote", href: "/contact" as Route, variant: "secondary" as const },
    ],
    trustIndicators: [
      { icon: RiShieldCheckLine, text: "Certified & Safe", color: "text-green-600" },
      { icon: RiGlobalLine, text: "Global Support", color: "text-primary" },
      { icon: RiLeafLine, text: "Eco-Friendly", color: "text-accent" },
    ],
    imagePosition: "left" as const,
    gradientColors: { from: "from-primary/20", to: "to-accent/20" },
    bgGradient: "bg-gradient-to-br from-white via-gray-50 to-white",
  },
  {
    badge: "Premium Solution",
    badgeColor: "text-accent",
    title: "Advanced Solar System",
    titleParts: [
      { text: "Advanced", color: "text-accent" },
      { text: "Solar System", color: "text-primary" },
    ],
    description:
      "High-efficiency solar panels with integrated energy storage. Maximize your energy independence with our premium solar solutions designed for modern homes and businesses.",
    image: "/HomeBanner/LVXC.png",
    imageAlt: "Advanced Solar System",
    features: [
      { icon: RiSunLine, text: "High Efficiency Panels", color: "text-accent" },
      { icon: RiFlashlightLine, text: "Integrated Storage", color: "text-primary" },
      { icon: RiHomeGearLine, text: "Smart Energy Management", color: "text-green-600" },
    ],
    ctas: [
      { text: "Explore Solar Energy Products", href: "/products" as Route, variant: "primary" as const },
      { text: "Request Demo", href: "/contact" as Route, variant: "secondary" as const },
    ],
    trustIndicators: [
      { icon: RiSunLine, text: "25+ Year Lifespan", color: "text-accent" },
      { icon: RiBatteryChargeLine, text: "Energy Storage", color: "text-primary" },
      { icon: RiPlantLine, text: "Carbon Neutral", color: "text-green-600" },
    ],
    imagePosition: "right" as const,
    gradientColors: { from: "from-accent/20", to: "to-primary/20" },
    bgGradient: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
  },
  {
    badge: "Home Energy Solution",
    badgeColor: "text-emerald-700",
    title: "Home Battery Storage",
    titleParts: [
      { text: "Home Battery", color: "text-emerald-700" },
      { text: "Storage", color: "text-primary" },
    ],
    description:
      "Compact and powerful home battery systems that seamlessly integrate with your solar panels. Store excess energy during the day and use it when you need it most, reducing your reliance on the grid.",
    image: "/HomeBanner/homebatt.png",
    imageAlt: "Home Battery Storage System",
    features: [
      { icon: RiBatteryChargeLine, text: "Compact Design", color: "text-emerald-700" },
      { icon: RiHomeGearLine, text: "Easy Installation", color: "text-primary" },
      { icon: RiFlashlightLine, text: "Grid Integration", color: "text-accent" },
    ],
    ctas: [
      { text: "View Home Battery Storage Products", href: "/products" as Route, variant: "primary" as const },
      { text: "Schedule Consultation", href: "/contact" as Route, variant: "secondary" as const },
    ],
    trustIndicators: [
      { icon: RiBatteryChargeLine, text: "Long Lasting", color: "text-emerald-700" },
      { icon: RiShieldCheckLine, text: "Warranty Included", color: "text-primary" },
      { icon: RiSpeedUpLine, text: "Fast Setup", color: "text-accent" },
    ],
    imagePosition: "left" as const,
    gradientColors: { from: "from-emerald-600/20", to: "to-primary/20" },
    bgGradient: "bg-gradient-to-br from-white via-gray-50 to-white",
  },
  {
    badge: "Industrial Solution",
    badgeColor: "text-secondary",
    title: "Commercial Energy Storage",
    titleParts: [
      { text: "Commercial", color: "text-secondary" },
      { text: "Energy Storage", color: "text-primary" },
    ],
    description:
      "Large-scale energy storage solutions for commercial and industrial applications. Optimize your energy costs, ensure uninterrupted power supply, and reduce your carbon footprint with our enterprise-grade storage systems.",
    image: "/HomeBanner/item4.png",
    imageAlt: "Commercial Energy Storage System",
    features: [
      { icon: RiFlashlightLine, text: "Scalable Capacity", color: "text-secondary" },
      { icon: RiGlobalLine, text: "Enterprise Grade", color: "text-primary" },
      { icon: RiSpeedUpLine, text: "Fast Response Time", color: "text-accent" },
    ],
    ctas: [
      { text: "View Products", href: "/products" as Route, variant: "primary" as const },
      { text: "Contact Sales", href: "/contact" as Route, variant: "secondary" as const },
    ],
    trustIndicators: [
      { icon: RiFlashlightLine, text: "High Capacity", color: "text-secondary" },
      { icon: RiShieldCheckLine, text: "Reliable & Safe", color: "text-primary" },
      { icon: RiGlobalLine, text: "24/7 Support", color: "text-accent" },
    ],
    imagePosition: "right" as const,
    gradientColors: { from: "from-secondary/20", to: "to-primary/20" },
    bgGradient: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Free assessment of your energy needs and site evaluation",
    icon: RiUserLine,
    color: "from-primary to-accent",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Custom solution design tailored to your specific requirements",
    icon: RiHomeGearLine,
    color: "from-accent to-primary",
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional installation by certified technicians",
    icon: RiFlashlightLine,
    color: "from-primary to-emerald-600",
  },
  {
    step: "04",
    title: "Support & Monitoring",
    description: "Ongoing support and smart monitoring for optimal performance",
    icon: RiShieldCheckLine,
    color: "from-emerald-600 to-primary",
  },
];

// User Segments
export const userSegments = [
  {
    title: "For Homeowners",
    description:
      "Reduce energy bills and achieve energy independence with residential solar and storage solutions.",
    icon: RiUserLine,
    features: ["Lower Electricity Bills", "Energy Independence", "Increase Home Value", "10+ Year Warranty"],
    cta: "Explore Residential Solutions",
    link: "/products" as Route,
    color: "from-primary to-accent",
  },
  {
    title: "For Businesses",
    description: "Cut operational costs and reduce carbon footprint with commercial energy solutions.",
    icon: RiBuildingLine,
    features: ["Reduce Energy Costs", "Tax Incentives", "24/7 Support", "Scalable Solutions"],
    cta: "Explore Commercial Solutions",
    link: "/solutions" as Route,
    color: "from-accent to-primary",
  },
  {
    title: "For Developers",
    description: "Large-scale energy infrastructure for residential and commercial developments.",
    icon: RiGlobalLine,
    features: ["Bulk Pricing", "Custom Solutions", "Project Management", "Fast Deployment"],
    cta: "Contact Sales Team",
    link: "/contact" as Route,
    color: "from-primary to-emerald-600",
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Metro Manila, Philippines",
    rating: 5,
    text: "VoltHub's residential battery system has cut our electricity bills by 70%. The installation was seamless and the support team is excellent.",
    image: "👩",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    location: "Taguig City, Philippines",
    rating: 5,
    text: "Our commercial solar installation exceeded expectations. We've reduced our energy costs significantly and the ROI is impressive.",
    image: "👨",
  },
  {
    name: "Emma Rodriguez",
    role: "Property Developer",
    location: "Pasig, Philippines",
    rating: 5,
    text: "VoltHub provided a complete energy solution for our new development. Professional service from start to finish. Highly recommended!",
    image: "👩",
  },
];

// Trust Badges
export const trustBadges = [
  { name: "ISO 9001 Certified", icon: RiShieldCheckLine },
  { name: "Energy Star Partner", icon: RiLeafLine },
  { name: "UL Listed", icon: RiShieldCheckLine },
  { name: "25+ Countries", icon: RiGlobalLine },
];

// ROI Calculator Benefits
export const roiCalculatorBenefits = [
  "Calculate potential energy savings",
  "Estimate ROI and payback period",
  "Compare different solutions",
  "Get personalized recommendations",
];

// Video Items
export const videoItems = [
  { title: "Customer Success Stories", icon: RiUserLine },
  { title: "Product Demonstrations", icon: RiVideoLine },
  { title: "Installation Process", icon: RiHomeGearLine },
];

// Resources
export const resources = [
  {
    title: "Complete Guide to Solar Energy Storage",
    description:
      "Everything you need to know about residential battery systems and how they can save you money.",
    type: "Guide",
    icon: RiBookOpenLine,
    color: "from-primary to-accent",
  },
  {
    title: "EV Charging Infrastructure: Future of Transportation",
    description: "Explore how EV charging networks are shaping the future of sustainable mobility.",
    type: "Article",
    icon: RiFileTextLine,
    color: "from-accent to-primary",
  },
  {
    title: "Energy Savings Calculator: ROI Analysis",
    description: "Download our free calculator to estimate your potential savings with renewable energy.",
    type: "Tool",
    icon: RiDownloadLine,
    color: "from-primary to-emerald-600",
  },
];

// FAQs
export const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Residential installations typically take 1-3 days, while commercial projects can take 1-2 weeks depending on the scale. Our team will provide a detailed timeline during the consultation phase.",
  },
  {
    question: "What is the warranty period?",
    answer:
      "Our products come with a 10+ year warranty on batteries and 25+ year warranty on solar panels. We also offer extended warranty options for additional peace of mind.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing options including low-interest loans and lease-to-own programs. We can also help you take advantage of available tax credits and incentives.",
  },
  {
    question: "What maintenance is required?",
    answer:
      "Our systems require minimal maintenance. We offer monitoring services and annual maintenance packages to ensure optimal performance. Most systems are self-monitoring and require little to no regular maintenance.",
  },
  {
    question: "Can I expand my system later?",
    answer:
      "Absolutely! Our systems are designed to be scalable. You can add more solar panels or battery capacity as your needs grow. We'll help you plan for future expansion during the initial design phase.",
  },
];

