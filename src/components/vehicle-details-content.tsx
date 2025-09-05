"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import type { VehicleDetailsContentProps } from "./types" // Assuming this is where VehicleDetailsContentProps is declared
import { BreadcrumbChevron } from "./icons" // Assuming this is where BreadcrumbChevron is declared

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
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link to="/inventory" className="hover:text-primary">
          Amaan Inventory
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link to={`/inventory?make=${vehicle.make}`} className="hover:text-primary">
          {vehicle.make.charAt(0) + vehicle.make.slice(1).toLowerCase()}
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <Link to={`/inventory?model=${vehicle.model}`} className="hover:text-primary">
          {vehicle.model.charAt(0) + vehicle.model.slice(1).toLowerCase().replace(/\s+/g, " ")}
        </Link>
        <BreadcrumbChevron className="h-4 w-4" />
        <span className="text-foreground">{vehicle.year}</span>
      </nav>
    </div>
  )
}
