"use client"

import { useState } from "react"
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"></main>
      <Footer />
    </div>
  )
}
