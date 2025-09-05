"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import type { VehicleGridProps, Vehicle } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export function VehicleGrid({ activeFilters }: VehicleGridProps) {
  const [sortedVehicles, setSortedVehicles] = useState<Vehicle[]>([])

  return (
    <div className="space-y-6">
      {/* Vehicle Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Purchase Options
                </Button>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-1" />
                    Quick Look
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/inventory/${vehicle.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
