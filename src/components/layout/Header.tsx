"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";
import LayoutContainer from "./LayoutContainer";
import { cn } from "@/lib/utils";

type NavHref = Route | { pathname: Route; hash?: string };

type NavItem = {
  label: string;
  href: NavHref;
  description?: string;
  dropdown?: { label: string; href: NavHref; description?: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Hero overview and highlights",
  },
  {
    label: "Products",
    href: "/products",
    description: "Product families, specs, and trends",
    dropdown: [
      { label: "All Products", href: { pathname: "/products", hash: "overview" } },
      { label: "Solar Systems", href: { pathname: "/products", hash: "solar" } },
      { label: "EV Chargers", href: { pathname: "/products", hash: "ev" } },
      { label: "Energy Storage", href: { pathname: "/products", hash: "storage" } },
    ],
  },
  {
    label: "Sectors",
    href: "/solutions",
    description: "Smart energy architecture and technical data",
    dropdown: [
      { label: "Residential", href: "/solutions" },
      { label: "Commercial", href: { pathname: "/solutions", hash: "flows" } },
      { label: "Industrial", href: { pathname: "/solutions", hash: "spec" } },
      { label: "Smart Cities", href: { pathname: "/solutions", hash: "flo" } },
      { label: "Rural Projects", href: { pathname: "/solutions", hash: "spe" } },
    ],
  },
  {
    label: "Services",
    href: "/solutions",
    description: "Smart energy architecture and technical data",
    dropdown: [
      { label: "Overview", href: "/solutions" },
      { label: "EV Charging Solutions", href: { pathname: "/solutions", hash: "flow" } },
      { label: "Solar Energy Installation", href: { pathname: "/solutions", hash: "specs" } },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "Company history and market insights",
  },
  // {
  //   label: "Case Studies",
  //   href: "/case-studies",
  //   description: "Impact stories and sustainability metrics",
  // },
  {
    label: "Contact",
    href: "/contact",
    description: "Quote requests and support channels",
  },
];

const getHrefKey = (href: NavHref) =>
  typeof href === "string"
    ? href
    : `${href.pathname}-${href.hash ? `#${href.hash}` : "root"}`;

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: NavHref) => {
    if (typeof href === "string") {
      return pathname === href;
    }
    return pathname === href.pathname;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 floating-nav",
        scrolled ? "shadow-lg shadow-primary/20" : "border-b border-white/10"
      )}
    >
      <LayoutContainer className="py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center glow-effect bg-white">
            <Image
              src="/logo.jpg"
              alt="VoltHub logo"
              width={48}
              height={48}
              className="object-cover"
              priority
            />
          </span>
          <span className="text-2xl font-bold gradient-text font-orbitron tracking-wide">
            VoltHub
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8 text-white">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-300 relative flex items-center gap-1",
                  isActive(item.href)
                    ? "text-secondary"
                    : "text-white hover:text-secondary"
                )}
              >
                <span>{item.label}</span>
                {item.dropdown ? (
                  <RiArrowDownSLine className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                ) : null}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
              {item.dropdown ? (
                <div className="absolute top-full left-0 mt-2 w-64 glass-morphism rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <div className="p-4 space-y-2">
                    {item.dropdown.map((link) => (
                      <Link
                        key={getHrefKey(link.href)}
                        href={link.href}
                        className="block px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/10 hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <span className="text-sm font-orbitron text-emerald-200 tracking-widest">
          +63 9659700823
          </span>
          <Link
            href="/contact"
            className="bg-linear-to-r from-secondary to-yellow-300 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300 glow-effect whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        <button
          className="text-white text-3xl lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </LayoutContainer>

      <div
        className={cn(
          "mobile-menu lg:hidden fixed top-0 left-0 h-screen w-full bg-primary z-40 transition-transform duration-300",
          mobileOpen ? "active" : ""
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="VoltHub logo"
                  width={40}
                  height={40}
                  className="object-cover"
                  priority
                />
              </span>
              <span className="text-xl font-bold gradient-text font-orbitron">
                VoltHub
              </span>
            </Link>
            <button
              className="text-white text-2xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <RiCloseLine />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block text-white text-lg font-semibold mb-3"
                >
                  {item.label}
                </Link>
                {item.dropdown ? (
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((link) => (
                      <Link
                        key={getHrefKey(link.href)}
                        href={link.href}
                        className="block text-white/80 hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-white/10">
            <Link
              href="/contact"
              className="block w-full text-center bg-linear-to-r from-secondary to-yellow-300 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
