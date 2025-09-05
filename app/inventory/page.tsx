"use client"

import { useState } from "react"
import { ModernCarFilter } from "@/components/inventory-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface FilterState {
  years: string[]
  makes: string[]
  models: string[]
  bodyTypes: string[]
  priceRanges: string[]
  drivetrains: string[]
  transmissions: string[]
  mileageRanges: string[]
  exteriorColors: string[]
  highwayMpg: string[]
  cityMpg: string[]
}

export default function InventoryPage() {
  console.log("[v0] InventoryPage component is rendering")

  const [activeFilters, setActiveFilters] = useState<FilterState>({
    years: [],
    makes: [],
    models: [],
    bodyTypes: [],
    priceRanges: [],
    drivetrains: [],
    transmissions: [],
    mileageRanges: [],
    exteriorColors: [],
    highwayMpg: [],
    cityMpg: [],
  })

  console.log("[v0] Active filters state:", activeFilters)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestro Inventario</h1>
          <p className="text-lg text-muted-foreground">
            Explora nuestra amplia selección de vehículos Toyota nuevos y usados
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
         
          <div className="lg:w-1/4">
            
            <ModernCarFilter activeFilters={activeFilters} onFiltersChange={setActiveFilters} />
          </div>

         
          <div className="lg:w-3/4">
           
            <VehicleGrid activeFilters={activeFilters} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
