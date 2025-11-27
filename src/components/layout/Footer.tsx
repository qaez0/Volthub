import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";
import LayoutContainer from "./LayoutContainer";

type FooterHref = Route | { pathname: Route; hash?: string };

const footerColumns = [
  {
    heading: "Products",
    links: [
      { label: "Solar Systems", href: { pathname: "/products", hash: "solar" } },
      { label: "EV Chargers", href: { pathname: "/products", hash: "ev" } },
      {
        label: "Energy Storage",
        href: { pathname: "/products", hash: "storage" },
      },
      {
        label: "Smart Lighting",
        href: { pathname: "/products", hash: "smart-controls" },
      },
      { label: "Solar Fans", href: { pathname: "/products", hash: "featured" } },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Residential", href: { pathname: "/solutions", hash: "flow" } },
      {
        label: "Commercial",
        href: { pathname: "/case-studies", hash: "industrial" },
      },
      {
        label: "Industrial",
        href: { pathname: "/case-studies", hash: "industrial" },
      },
      {
        label: "Smart Cities",
        href: { pathname: "/case-studies", hash: "smart-cities" },
      },
      {
        label: "Rural Projects",
        href: { pathname: "/case-studies", hash: "rural" },
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/contact" },
      { label: "News", href: { pathname: "/about", hash: "insights" } },
      { label: "Contact", href: "/contact" },
    ],
  },
] satisfies {
  heading: string;
  links: { label: string; href: FooterHref }[];
}[];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <LayoutContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="VoltHub logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </span>
              <span className="text-2xl font-bold">VoltHub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the future of clean energy with innovative solutions for a
              sustainable tomorrow.
            </p>
            <div className="flex space-x-4 text-gray-400">
              {[RiLinkedinFill, RiTwitterFill, RiFacebookFill, RiInstagramLine].map(
                (Icon, index) => (
                  <a
                    key={Icon.name}
                    href="#"
                    className="hover:text-secondary transition-colors"
                    aria-label={`VoltHub on social channel ${index + 1}`}
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              )}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-lg font-semibold mb-6">{column.heading}</h4>
              <ul className="space-y-3 text-gray-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} VoltHub. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
