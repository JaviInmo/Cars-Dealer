"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CategoryNavigation, type Category } from "@/components/category-navigation"


const featuredVehicles = [
  {
    id: 1,
    year: 2024,
    make: "Toyota",
    model: "Camry",
    trim: "XLE",
    price: 32999,
    mileage: 12,
    image: "/2024-toyota-camry-xle-silver.jpg",
    features: ["Hybrid", "Leather", "Navigation"],
  },
  {
    id: 2,
    year: 2023,
    make: "Toyota",
    model: "RAV4",
    trim: "Adventure",
    price: 38999,
    mileage: 8500,
    image: "/2023-toyota-rav4-adventure-blue.jpg",
    features: ["AWD", "Sunroof", "Safety 2.0"],
  },
  {
    id: 3,
    year: 2024,
    make: "Toyota",
    model: "Prius",
    trim: "Prime",
    price: 35999,
    mileage: 5,
    image: "/2024-toyota-prius-prime-white.jpg",
    features: ["Plug-in Hybrid", "Tech Package", "Premium Audio"],
  },
  {
    id: 4,
    year: 2023,
    make: "Toyota",
    model: "Highlander",
    trim: "Platinum",
    price: 48999,
    mileage: 15000,
    image: "/2023-toyota-highlander-platinum-black.jpg",
    features: ["3-Row Seating", "Premium Interior", "JBL Audio"],
  },
]

export function FeaturedVehicles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [activeCategory, setActiveCategory] = useState<string>("")

  // Datos de ejemplo - vehículos
  const vehicleCategories: Category[] = [
    { id: "cars-minivan", label: "Cars & Minivan" },
    { id: "trucks", label: "Trucks" },
    { id: "crossovers-suvs", label: "Crossovers & SUVs" },
    { id: "electrified", label: "Electrified" },
    { id: "upcoming", label: "Upcoming Vehicles" },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, featuredVehicles.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, featuredVehicles.length - itemsPerView) : prevIndex - 1,
    )
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Explore All Vehicles</h2>
          </div>
        </div>

        <CategoryNavigation
            categories={vehicleCategories}
            defaultActiveId="cars-minivan"
            onCategoryChange={(id) => {
              setActiveCategory(id)
              console.log("Categoría seleccionada:", id)
            }}
            className="flex justify-center mb-8"
        />

        <div className="relative overflow-hidden mb-4">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(featuredVehicles.length / itemsPerView) * 100}%`,
            }}
          >
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / featuredVehicles.length}%` }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary">{vehicle.mileage.toLocaleString("en-US")} mi</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-muted-foreground mb-3">{vehicle.trim}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {vehicle.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">${vehicle.price.toLocaleString("en-US")}</p>
                        <p className="text-sm text-muted-foreground">Nuestro Precio</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                        <Button size="sm">Detalles</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex space-x-10 justify-center">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-5 w-5" />
          </Button>
          {/*<div className="">*/}
          {/*  <a className="block" href="/inventor">See All</a>*/}
          {/*</div>*/}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center mt-6 space-x-2">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
