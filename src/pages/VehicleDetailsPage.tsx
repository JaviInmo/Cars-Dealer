"use client"

import { useParams, Navigate } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleDetailsContent } from "@/components/vehicle-details-content"

// Sample vehicle data - in a real app this would come from a database
const vehicles = []

export default function VehicleDetailsPage() {
  const { id } = useParams<{ id: string }>()

  const vehicle = vehicles.find((v) => v.id === Number.parseInt(id || ""))

  if (!vehicle) {
    return <Navigate to="/inventory" replace />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VehicleDetailsContent vehicle={vehicle} />
      </main>
      <Footer />
    </div>
  )
}
