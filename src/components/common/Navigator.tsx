"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface MenuItem {
  title: string;
  href: string;
  description: string;
  image?: string;
}

const menu: Record<string, MenuItem[]> = {
  home: [
    {
      title: "Overview",
      href: "/",
      description: "Powering the future of green mobility.",
      image: "/resources/power-grid.jpg",
    },
    {
      title: "Featured Stations",
      href: "/stations",
      description: "Check our most popular charging hubs.",
    },
    {
      title: "Download App",
      href: "#",
      description: "Manage and monitor your charging sessions easily.",
    },
  ],
  stations: [
    {
      title: "Find a Station",
      href: "/stations",
      description: "Locate charging points near you.",
      image: "/resources/bulb.jpg",
    },
    {
      title: "Charging Types",
      href: "#",
      description: "Fast chargers, standard chargers, and eBike docks.",
    },
    {
      title: "Supported Vehicles",
      href: "#",
      description: "Compatible with eCars and eBikes.",
    },
  ],
  pricing: [
    {
      title: "Pay Per Use",
      href: "/pricing",
      description: "Flexible charging with no contracts.",
      image: "/resources/charging-stats.jpg",
    },
    {
      title: "Membership Plans",
      href: "#",
      description: "Save more with our monthly plans.",
    },
    {
      title: "Promotions",
      href: "#",
      description: "Exclusive offers and discounts.",
    },
  ],
  contact: [
    {
      title: "Contact Form",
      href: "/contact",
      description: "Send us a message directly.",
    },
    {
      title: "Hotline & Email",
      href: "#",
      description: "Reach our customer care team.",
    },
    {
      title: "FAQs",
      href: "#",
      description: "Answers to the most common questions.",
    },
  ],
};

export default function Navigator() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-white hover:text-[#78A1BB]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-[#0D1B2A] border-none"
          >
            {Object.keys(menu).map((key) => (
              <DropdownMenuItem key={key} asChild>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  href={`/${key === "home" ? "" : key}` as any}
                  className="w-full text-white hover:text-[#78A1BB] hover:bg-[#1B263B] focus:bg-[#1B263B]"
                  onClick={() => setIsOpen(false)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex-wrap">
            {Object.entries(menu).map(([key, items]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger className="capitalize">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Link href={items[0]?.href as any}>{key}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="relative flex h-full w-full flex-col justify-end rounded-md bg-cover bg-center bg-no-repeat p-2 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md"
                          style={{
                            backgroundImage: `url(${items[0]?.image || ""})`,
                          }}
                          href={items[0]?.href || "/"}
                        >
                          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-black/20 to-black/60" />
                          <div className="relative text-lg font-medium text-white">
                            {items[0]?.title || "Volthub"}
                          </div>
                          <p className="relative text-white/90 text-sm leading-tight">
                            {items[0]?.description ||
                              "Powering the future of green mobility."}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Fragment>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Link href={href as any} className="flex flex-col gap-1">
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
