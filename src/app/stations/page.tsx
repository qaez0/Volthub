"use client";

import { useState } from "react";
import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import SplitText, { SplitTextProps } from "@/components/ui/split-text";
import { MapPin, Zap, DollarSign, Search, Filter } from "lucide-react";
import Image from "next/image";

export default function Stations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const stations = [
    {
      id: 1,
      name: "Downtown Power Hub",
      address: "123 Main Street, Downtown",
      type: "Fast Charging",
      power: "150kW",
      price: "$0.35/kWh",
      availability: "Available",
      distance: "0.5 miles",
      amenities: ["Restrooms", "Coffee Shop", "WiFi"],
      image: "/resources/charging-stats.jpg",
    },
    {
      id: 2,
      name: "Highway 101 Station",
      address: "456 Highway 101, North Side",
      type: "Ultra-Fast Charging",
      power: "350kW",
      price: "$0.45/kWh",
      availability: "Available",
      distance: "2.1 miles",
      amenities: ["Restrooms", "Restaurant", "Shopping"],
      image: "/resources/speeding-car.jpg",
    },
    {
      id: 3,
      name: "Mall Plaza Charging",
      address: "789 Shopping Plaza, East District",
      type: "Standard Charging",
      power: "50kW",
      price: "$0.25/kWh",
      availability: "Busy",
      distance: "1.8 miles",
      amenities: ["Shopping", "Food Court", "WiFi"],
      image: "/resources/power-grid.jpg",
    },
    {
      id: 4,
      name: "University Campus",
      address: "321 University Ave, Campus",
      type: "Fast Charging",
      power: "120kW",
      price: "$0.30/kWh",
      availability: "Available",
      distance: "3.2 miles",
      amenities: ["Library", "Cafeteria", "WiFi"],
      image: "/resources/bulb.jpg",
    },
    {
      id: 5,
      name: "Airport Terminal A",
      address: "Airport Blvd, Terminal A",
      type: "Ultra-Fast Charging",
      power: "300kW",
      price: "$0.50/kWh",
      availability: "Available",
      distance: "5.5 miles",
      amenities: ["Restrooms", "Restaurants", "WiFi"],
      image: "/resources/charging-stats.jpg",
    },
    {
      id: 6,
      name: "Residential Complex",
      address: "555 Oak Street, Residential",
      type: "Standard Charging",
      power: "22kW",
      price: "$0.20/kWh",
      availability: "Available",
      distance: "4.1 miles",
      amenities: ["Park", "Grocery Store"],
      image: "/resources/power-grid.jpg",
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

  const filteredStations = stations.filter((station) => {
    const matchesSearch =
      station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      station.type.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-500";
      case "Busy":
        return "bg-yellow-500";
      case "Offline":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/charging-stats.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left">
            <SplitText
              text="CHARGING STATIONS"
              className="text-xl font-normal md:font-semibold"
              {...splitTextOptions}
              tag="h6"
            />
            <SplitText
              text={
                <>
                  Find your perfect charging spot{" "}
                  <span className="text-[#ff6f8b]">anywhere, anytime.</span>
                </>
              }
              className="text-[40px] md:text-[60px] font-bold w-full sm:w-4/6 text-center sm:text-left leading-[1.3]"
              {...splitTextOptions}
              tag="h1"
              appearDelayMs={400}
            />
            <SplitText
              tag="h6"
              text="Locate charging stations near you with real-time availability"
              className="text-xl font-normal md:font-semibold w-full md:w-3/4 text-foreground"
              {...splitTextOptions}
              appearDelayMs={500}
            />
          </div>
        </LayoutContainer>
      </MainContent>

      <section className="py-16">
        <LayoutContainer>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-primary">
                Find Charging Stations
              </h2>
              <p className="text-muted-foreground">
                Discover charging stations in your area with real-time
                availability and pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by location or station name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("all")}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  All Types
                </Button>
                <Button
                  variant={selectedFilter === "fast" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("fast")}
                >
                  Fast Charging
                </Button>
                <Button
                  variant={selectedFilter === "ultra" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("ultra")}
                >
                  Ultra-Fast
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStations.map((station) => (
                <Card
                  key={station.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 py-0"
                >
                  <div className="h-48 w-full relative">
                    <Image
                      src={station.image}
                      alt={station.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${getAvailabilityColor(
                          station.availability
                        )} text-white`}
                      >
                        {station.availability}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {station.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{station.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <span className="text-sm">{station.distance} away</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {station.power}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {station.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {station.price}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Per kWh
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2 text-primary">
                        Amenities:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {station.amenities.map((amenity, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" variant="default">
                      Navigate to Station
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredStations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No charging stations found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}
