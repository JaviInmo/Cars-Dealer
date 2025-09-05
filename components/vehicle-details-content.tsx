"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  LucideCircleChevronUp as BreadcrumbChevron,
  Phone,
  Mail,
  Calendar,
  Check,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Vehicle {
  id: number
  year: number
  make: string
  model: string
  trim: string
  price: number
  mileage: number
  images: string[]
  bodyType: string
  drivetrain: string
  transmission: string
  exteriorColor: string
  interiorColor: string
  fuelType: string
  cityMpg: number
  highwayMpg: number
  vin: string
  stockNumber: string
  engine: string
  doors: number
  trimDetails: string
  equipment: string[]
}

interface VehicleDetailsContentProps {
  vehicle: Vehicle
}

export function VehicleDetailsContent({ vehicle }: VehicleDetailsContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + vehicle.images.length) % vehicle.images.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link href="/inventory" className="hover:text-primary">
          Amaan Inventory
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link href={`/inventory?make=${vehicle.make}`} className="hover:text-primary">
          {vehicle.make.charAt(0) + vehicle.make.slice(1).toLowerCase()}
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link href={`/inventory?model=${vehicle.model}`} className="hover:text-primary">
          {vehicle.model.charAt(0) + vehicle.model.slice(1).toLowerCase().replace(/\s+/g, " ")}
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <span className="text-foreground">{vehicle.year}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Carousel */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />

              {vehicle.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {vehicle.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </Card>

          {/* Thumbnail Images */}
          {vehicle.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative overflow-hidden rounded-lg border-2 transition-colors ${
                    index === currentImageIndex ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vehicle Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span>Stock: {vehicle.stockNumber}</span>
              <span>VIN: {vehicle.vin}</span>
            </div>
          </div>

          <div className="text-4xl font-bold text-primary mb-6">${vehicle.price.toLocaleString("en-US")}</div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full">
              <Check className="h-5 w-5 mr-2" />
              Confirm Availability
            </Button>
            <Button size="lg" variant="outline" className="w-full bg-transparent">
              <Calendar className="h-5 w-5 mr-2" />
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="w-full bg-transparent">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">VIN</span>
                  <p className="text-foreground">{vehicle.vin}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Mileage</span>
                  <p className="text-foreground">{vehicle.mileage.toLocaleString("en-US")} mi</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Engine</span>
                  <p className="text-foreground">{vehicle.engine}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Drivetrain</span>
                  <p className="text-foreground">{vehicle.drivetrain}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Stock Number</span>
                  <p className="text-foreground">{vehicle.stockNumber}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Transmission</span>
                  <p className="text-foreground">{vehicle.transmission}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Trim</span>
                  <p className="text-foreground">{vehicle.trimDetails}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Doors</span>
                  <p className="text-foreground">{vehicle.doors}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Exterior Color</span>
                  <p className="text-foreground">{vehicle.exteriorColor}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Interior Color</span>
                  <p className="text-foreground">{vehicle.interiorColor}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Body Type</span>
                  <p className="text-foreground">{vehicle.bodyType}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Fuel Type</span>
                  <p className="text-foreground">{vehicle.fuelType}</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{vehicle.cityMpg}</div>
                  <div className="text-sm text-muted-foreground">City MPG</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{vehicle.highwayMpg}</div>
                  <div className="text-sm text-muted-foreground">Highway MPG</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vehicle Equipment */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {vehicle.equipment.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Speak with our sales team</p>
            <Button variant="outline" className="w-full bg-transparent">
              +1 (555) 123-4567
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">Get more information</p>
            <Button variant="outline" className="w-full bg-transparent">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Schedule Visit</h3>
            <p className="text-muted-foreground mb-4">See it in person</p>
            <Button variant="outline" className="w-full bg-transparent">
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
