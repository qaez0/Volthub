"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
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
      { label: "All Products", href: "/products" },
      { label: "Solar Systems", href: "/products?category=solar-street" },
      { label: "EV Chargers", href: "/products?category=ev-charging" },
      { label: "Energy Storage", href: "/products?category=smart-home" },
      { label: "Cabinet Type Power Supplies", href: "/products?category=cabinet" },
      { label: "Container Type Power Supplies", href: "/products?category=container" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors/residential",
    description: "Target customers and sector-specific solutions",
    dropdown: [
      { label: "Residential", href: "/sectors/residential" },
      { label: "Commercial", href: "/sectors/commercial" },
      { label: "Industrial", href: "/sectors/industrial" },
      // { label: "Smart Cities", href: "/sectors/smart-cities" },
      { label: "Rural Projects", href: "/sectors/rural-projects" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    description: "Professional installation and maintenance services",
    dropdown: [
      { label: "Overview", href: "/services" },
      { label: "EV Charging Solutions", href: "/services/ev-charging" },
      { label: "Solar Energy Installation", href: "/services/solar-installation" },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPositions, setDropdownPositions] = useState<Record<string, { top: number; left: number }>>({});
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = (href: NavHref) => {
    if (typeof href === "string") {
      // Special case for Services: also active on sub-pages
      if (href === "/services") {
        return pathname === href || pathname.startsWith("/services/");
      }
      // Special case for Sectors: also active on sub-pages
      if (href === "/sectors/residential") {
        return pathname === href || pathname.startsWith("/sectors/");
      }
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
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const updatePositions = () => {
      const positions: Record<string, { top: number; left: number }> = {};
      Object.keys(navItemRefs.current).forEach((label) => {
        const ref = navItemRefs.current[label];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const header = document.querySelector('header');
          const headerBottom = header?.getBoundingClientRect().bottom || 0;
          positions[label] = {
            top: headerBottom + 8,
            left: rect.left,
          };
        }
      });
      setDropdownPositions(positions);
    };

    if (openDropdown) {
      updatePositions();
      window.addEventListener('resize', updatePositions);
      window.addEventListener('scroll', updatePositions);
      return () => {
        window.removeEventListener('resize', updatePositions);
        window.removeEventListener('scroll', updatePositions);
      };
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container") && !target.closest(".dropdown-menu")) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

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

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white lg:ml-8 xl:ml-0">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;

            return (
              <div
                key={item.label}
                ref={(el) => {
                  if (hasDropdown) {
                    navItemRefs.current[item.label] = el;
                  }
                }}
                className="relative group dropdown-container"
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={hasDropdown && item.dropdown?.[0] ? item.dropdown[0].href : item.href}
                    className={cn(
                      "font-medium transition-all duration-300 relative flex items-center gap-1",
                      isActive(item.href)
                        ? "text-secondary"
                        : "text-white hover:text-secondary"
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300",
                        isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                  {hasDropdown ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === item.label ? null : item.label);
                      }}
                      className="flex items-center"
                      aria-label="Toggle dropdown"
                    >
                      <RiArrowDownSLine
                        className={cn(
                          "text-sm transition-transform duration-300",
                          openDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-6 ml-8">
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

      {/* Dropdowns rendered outside header using portal */}
      {typeof window !== 'undefined' && openDropdown && navItems
        .filter(item => item.dropdown && openDropdown === item.label)
        .map((item) => {
          const position = dropdownPositions[item.label];
          if (!position) return null;

          return createPortal(
            <div
              key={item.label}
              className={cn(
                "fixed w-64 glass-morphism rounded-2xl shadow-xl transition-all duration-300 z-[9999] dropdown-menu",
                openDropdown === item.label
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              )}
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
              }}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="p-4 space-y-2">
                {item.dropdown?.map((link) => (
                  <Link
                    key={getHrefKey(link.href)}
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-sm text-black hover:bg-white/10 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>,
            document.body
          );
        })}
    </header>
  );
};

export default Header;
