"use client";

import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiCalendarLine, RiFileTextLine, RiBookOpenLine, RiDownloadLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Resource {
  slug?: string;
  title: string;
  description: string;
  type: string;
  image: string;
  imageAlt?: string;
}

interface BlogDetailProps {
  resource: Resource;
}

const blogContent: Record<string, { content: string; author?: string; date?: string }> = {
  "complete-guide-to-solar-energy-storage": {
    content: `
      <p>Solar energy storage systems have revolutionized how homeowners and businesses manage their energy consumption by storing excess solar energy during peak production hours for use when the sun isn't shining. The technology behind solar energy storage has advanced significantly in recent years, making it more accessible and affordable than ever before with modern battery systems designed to seamlessly integrate with existing solar panel installations. When your solar panels produce more electricity than you're using, the excess energy charges your battery storage system, and during peak demand hours or at night, the stored energy powers your home or business, reducing your reliance on the grid. The process begins when sunlight hits your solar panels, converting it into direct current (DC) electricity that can either be used immediately, sent to the grid, or stored in your battery system for later use, with an inverter converting the DC electricity into alternating current (AC) that your home appliances can use. Modern battery management systems intelligently monitor your energy production and consumption patterns, automatically deciding when to charge the batteries, when to use stored energy, and when to draw from or send power to the grid, ensuring you get maximum value from your solar investment.</p>
      
      <p>One of the most significant advantages of residential battery storage is the ability to maintain power during grid outages, as your battery system can automatically switch to backup mode and keep your essential appliances running, which is particularly valuable in areas prone to severe weather or unreliable grid infrastructure. Many utility companies offer time-of-use rates where electricity costs more during peak hours, and with a battery storage system, you can store energy when rates are low and use it when rates are high, potentially saving hundreds of dollars annually on your electricity bills. When selecting a solar battery system, consider your energy consumption patterns, available space, and budget, as the size you need depends on several factors including your daily energy consumption, the size of your solar panel array, and your goals for energy independence, with typical residential systems ranging from 5-15 kWh that can power essential appliances for several hours during an outage. It's also important to consider battery chemistry, warranty terms, and compatibility with your existing solar installation, as lithium-ion batteries, particularly LiFePO4 (lithium iron phosphate), have become the industry standard due to their long lifespan, safety, and efficiency. Professional installation ensures optimal performance and safety, with the process typically taking one to three days depending on complexity, and once installed, modern battery systems are largely maintenance-free with built-in battery management systems that continuously monitor health and performance, alerting you to any issues while most manufacturers provide comprehensive warranties covering 10+ years of reliable operation.</p>
    `,
    author: "VoltHub Energy Team",
    date: "January 15, 2025",
  },
  "ev-charging-infrastructure-future-of-transportation": {
    content: `
      <p>Electric vehicles are transforming transportation, and the infrastructure to support them is evolving rapidly as EV charging networks become as essential as gas stations once were. The shift toward electric mobility is accelerating globally, driven by environmental concerns, government incentives, and advances in battery technology, with more consumers and businesses making the switch to electric vehicles and creating unprecedented demand for reliable, accessible charging infrastructure. Level 1 charging uses a standard 120-volt outlet and provides about 2-5 miles of range per hour, perfect for overnight charging at home with no special installation beyond a dedicated outlet, while Level 2 charging operates at 240 volts and can provide 10-60 miles of range per hour, making it ideal for both residential and commercial applications. DC fast charging represents the cutting edge of EV charging technology, capable of adding 60-200 miles of range in just 20-30 minutes, with these high-power stations being essential for long-distance travel and commercial fleets, though they require significant electrical infrastructure and are typically installed at strategic locations like highway rest stops, shopping centers, and fleet depots. For businesses and municipalities, installing EV charging infrastructure positions you at the forefront of sustainable transportation, as charging stations attract customers, support fleet electrification, and demonstrate environmental commitment, with retail businesses often seeing increased foot traffic and longer customer visits since EV owners typically spend 20-30 minutes charging their vehicles.</p>
      
      <p>Modern EV charging stations integrate with smart grid technology, allowing for load balancing, demand response, and optimized energy distribution to ensure efficient use of renewable energy sources. Smart charging systems can automatically adjust charging rates based on grid conditions, renewable energy availability, and electricity prices, increasing rates during times of high renewable energy production like sunny afternoons while reducing rates during peak demand periods to avoid overloading the grid. Vehicle-to-grid (V2G) technology takes this integration even further by allowing EV batteries to discharge energy back to the grid during peak demand periods, transforming EVs into mobile energy storage units that provide grid stability and additional value for EV owners through demand response programs. As EV adoption accelerates, comprehensive charging infrastructure becomes critical, and the future of transportation is electric, with the infrastructure we build today shaping how people and goods move for decades to come. Forward-thinking businesses and communities that invest in EV charging infrastructure now will be best positioned to benefit from this transformation, and VoltHub provides end-to-end solutions including site assessment, electrical infrastructure planning, equipment selection, installation, and ongoing maintenance, working with you to design a charging solution that meets your current needs while remaining flexible enough to adapt to future technologies and increased demand.</p>
    `,
    author: "VoltHub Mobility Team",
    date: "January 20, 2025",
  },
  "energy-savings-calculator-roi-analysis": {
    content: `
      <p>Calculating the return on investment (ROI) for renewable energy systems helps you make informed decisions about your energy infrastructure investments, with ROI analysis going beyond simple payback calculations to provide a comprehensive view of the financial benefits over the entire system lifespan. The initial investment includes not just the solar panels and batteries, but also inverters, mounting hardware, electrical work, permits, and installation labor, though this upfront cost is often significantly offset by federal tax credits, state rebates, and utility incentives that can reduce the net cost by 30-50%. Energy savings are calculated based on your current electricity consumption and rates, projected system production, and how much of that production you'll use versus export to the grid, with areas offering net metering allowing excess energy production to be credited back to your account, further enhancing your savings. Most residential solar and storage systems achieve payback within 5-8 years, with commercial systems often seeing returns in 3-6 years depending on energy consumption patterns, though residential systems typically have longer payback periods due to smaller system sizes and lower electricity rates, they still provide excellent long-term value since the payback period is just the beginning and your system continues generating free electricity for decades afterward. Commercial and industrial systems often achieve faster payback due to larger scale, higher electricity consumption, and more favorable business tax incentives, with many businesses also benefiting from accelerated depreciation that can significantly improve the financial picture in the early years of system ownership.</p>
      
      <p>Beyond the payback period, energy systems continue generating savings for decades, with 25+ year warranties on solar panels and 10+ year warranties on batteries ensuring your investment provides long-term value. Over a 25-year period, a typical residential solar and storage system can generate $50,000-$100,000 in energy savings, far exceeding the initial investment, and this doesn't account for potential increases in electricity rates which would further enhance your savings over time. Additionally, renewable energy systems can increase property values, as studies have shown that homes with solar panels sell for 3-4% more than comparable homes without them, while for businesses, energy independence and sustainability credentials can enhance brand value and attract environmentally conscious customers and employees. Understanding your potential savings requires careful analysis of your current energy consumption, local electricity rates, available incentives, and the specific characteristics of your property, which is why our energy savings calculator and expert consultations help you navigate these complexities to make confident investment decisions. Our energy consultants use advanced modeling software to create detailed financial projections that account for your specific circumstances, including local weather patterns, electricity rates, available incentives, and financing options, presenting this information in clear, understandable terms so you can make an informed decision whether you're a homeowner looking to reduce your electricity bills or a business owner seeking to improve your bottom line while demonstrating environmental responsibility.</p>
    `,
    author: "VoltHub Finance Team",
    date: "January 18, 2025",
  },
  "smart-grid-integration-powering-the-future": {
    content: `
      <p>Smart grid technology uses digital communication and automation to optimize energy distribution, consumption, and storage, enabling two-way communication between utilities and consumers to create a more efficient and resilient energy system. Unlike traditional power grids that operate with one-way energy flow from power plants to consumers, smart grids create a dynamic, interactive network where energy can flow in both directions, allowing consumers with solar panels or batteries to contribute energy back to the grid while utilities can better manage supply and demand in real-time. The smart grid relies on advanced sensors, communication networks, and control systems that monitor and manage energy flow throughout the entire system, with this intelligence enabling automatic responses to changing conditions such as shifting energy consumption to off-peak hours or adjusting renewable energy production based on grid needs. Real-time monitoring provides unprecedented visibility into your energy usage patterns, allowing you to identify opportunities for optimization as smart meters and energy management systems can track consumption down to individual appliances, helping you understand where your energy dollars are going and how to reduce waste. Automated load management takes this a step further by intelligently controlling your energy-consuming devices, with your system automatically charging your EV during off-peak hours when electricity is cheapest or pre-cooling your home before peak rate periods begin, all happening seamlessly in the background to optimize your energy costs without requiring constant attention.</p>
      
      <p>Smart grids seamlessly integrate solar panels, battery storage, and EV charging stations, creating a cohesive energy ecosystem that maximizes renewable energy utilization, with the smart grid automatically storing excess solar energy in your battery system, using it to charge your EV, or exporting it to the grid for credit. During times when your solar production is low but your energy needs are high, the system can intelligently draw from your batteries or the grid, always prioritizing the most cost-effective source, and this integration becomes even more powerful when multiple homes and businesses are connected as the smart grid can balance energy across the entire network, using excess solar production from one location to meet demand at another. As energy systems become more interconnected, smart grid compatibility ensures your infrastructure remains relevant and valuable, with technology in the energy sector evolving rapidly and new standards, protocols, and capabilities emerging regularly, so by choosing smart grid-compatible systems, you ensure that your investment can take advantage of future innovations without requiring expensive upgrades or replacements. VoltHub's systems are built with open standards and modular architectures that allow for easy integration with new technologies as they become available, with this future-proofing approach protecting your investment and ensuring you can continue to benefit from advances in smart grid technology for years to come. Our team can help you integrate smart grid technology into your existing or new energy infrastructure, with our consultants assessing your property, energy consumption patterns, and objectives to design a smart grid integration strategy that maximizes your benefits, whether that includes upgrading to a smart meter, installing energy management software, or adding smart controls to your existing renewable energy systems.</p>
    `,
    author: "VoltHub Technology Team",
    date: "January 22, 2025",
  },
  "commercial-energy-solutions-business-guide": {
    content: `
      <p>Commercial energy storage systems help businesses reduce operational costs, improve sustainability, and ensure reliable power for critical operations, becoming essential for competitive businesses as energy costs represent a significant portion of operational expenses that are only increasing. Peak shaving is one of the most valuable features of commercial energy storage, as many utilities charge significantly higher rates during peak demand periods typically in the afternoon and early evening, and by using stored energy during these peak hours instead of drawing from the grid, businesses can dramatically reduce their demand charges which can account for 30-50% of commercial electricity bills. For businesses with critical operations such as data centers, manufacturing facilities, healthcare facilities, or cold storage warehouses, the reliability benefits of energy storage are equally important since even brief power outages can result in significant losses from spoiled inventory to production downtime to data loss, with energy storage systems providing seamless backup power that activates instantly when the grid goes down to protect your business from these costly disruptions. From small commercial installations (40-200kWh) ideal for retail stores, small offices, and restaurants, to medium-scale systems (200-400kWh) for larger commercial facilities like shopping centers and hotels, to large-scale industrial systems (400-800kWh and beyond) designed for major manufacturing facilities and data centers, VoltHub offers solutions scaled to your business needs that can power essential operations for several hours during an outage and provide significant peak shaving benefits during normal operation.</p>
      
      <p>Commercial energy storage typically provides payback within 3-6 years with ongoing savings for decades, with many businesses seeing 20-40% reduction in energy costs as the financial benefits come from multiple sources including demand charge reduction which is often the largest contributor, time-of-use optimization that allows businesses to charge batteries when rates are low and discharge when rates are high, and significant incentives from many jurisdictions including tax credits, rebates, and accelerated depreciation that can reduce the net cost of a system by 30-50%. When combined with energy savings, many commercial systems achieve payback in just a few years, after which they continue generating pure savings for the remainder of their 15-20 year lifespan, while beyond the direct financial benefits, commercial energy storage positions your business as a leader in sustainability, enhancing your brand reputation, attracting environmentally conscious customers and employees, and helping you meet increasingly stringent environmental regulations and corporate sustainability goals. Our team handles everything from initial assessment and system design to installation, commissioning, and ongoing maintenance, beginning with a comprehensive energy audit to understand your consumption patterns, peak demand periods, and backup power requirements, which informs the system design to ensure we recommend the optimal size and configuration for your specific needs. Installation is carefully planned to minimize disruption to your business operations, with our experienced technicians working efficiently and often completing installations during off-hours or in phases that allow your business to continue operating normally, and once installed, we provide comprehensive training for your staff and establish a maintenance schedule to ensure optimal long-term performance, as businesses across various industries have successfully implemented VoltHub energy solutions, achieving significant cost savings and sustainability improvements, with examples including a manufacturing facility in Metro Manila that reduced its monthly electricity costs by 35% through peak shaving and load shifting while achieving payback in just 4 years.</p>
    `,
    author: "VoltHub Commercial Team",
    date: "January 25, 2025",
  },
};

export default function BlogDetail({ resource }: BlogDetailProps) {
  const content = blogContent[resource.slug || ""] || {
    content: `<p>${resource.description}</p><p>Full content coming soon...</p>`,
    author: "VoltHub Team",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "guide":
        return <RiBookOpenLine className="h-5 w-5" />;
      case "article":
        return <RiFileTextLine className="h-5 w-5" />;
      case "tool":
        return <RiDownloadLine className="h-5 w-5" />;
      default:
        return <RiFileTextLine className="h-5 w-5" />;
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 md:mb-8 mt-20 md:mt-24"
      >
        <RiArrowLeftLine className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>

      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide">
            {getTypeIcon(resource.type)}
            {resource.type}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {resource.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
          {resource.description}
        </p>
        <div className="flex items-center gap-4 text-sm md:text-base text-gray-500">
          <div className="flex items-center gap-2">
            <RiCalendarLine className="h-4 w-4" />
            <span>{content.date}</span>
          </div>
          {content.author && (
            <span className="text-gray-400">•</span>
          )}
          {content.author && (
            <span>By {content.author}</span>
          )}
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-12">
        <Image
          src={resource.image}
          alt={resource.imageAlt || resource.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none text-gray-600
          prose-headings:text-gray-800 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:pt-2
          prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-base prose-p:md:text-lg prose-p:mt-0
          prose-ul:text-gray-600 prose-ul:my-6 prose-ul:mb-6
          prose-li:mb-3 prose-li:text-gray-600 prose-li:leading-relaxed
          prose-strong:text-gray-800 prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          [&>p]:mb-8 [&>p]:mt-0"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />

      {/* CTA Section */}
      <div className="mt-12 md:mt-16 p-6 md:p-8 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-700 mb-6 text-lg">
          Contact our team to learn how VoltHub can help you implement these solutions for your home or business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Get in Touch
          <RiArrowLeftLine className="h-5 w-5 rotate-180" />
        </Link>
      </div>
    </article>
  );
}

