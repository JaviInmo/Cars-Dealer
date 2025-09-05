"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Heart, MapPin, Fuel, Settings, Palette, Search, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    year: 2019,
    make: "CHEVROLET",
    model: "SILVERADO 3500 HD",
    trim: "CREW CAB",
    price: 42999,
    mileage: 79591,
    image: "/2019-chevrolet-silverado-3500-hd-white.jpg",
    bodyType: "Truck",
    drivetrain: "4WD",
    transmission: "AUTOMATIC",
    exteriorColor: "WHITE",
    interiorColor: "BLACK",
    fuelType: "DIESEL",
    cityMpg: 17,
    highwayMpg: 24,
    vin: "1GC4KXCY9KF134852",
    stockNumber: "AM134852",
    engine: "V8, TURBO DIESEL, 6.6 LITER",
  },
  {
    id: 2,
    year: 2024,
    make: "TOYOTA",
    model: "CAMRY",
    trim: "XLE",
    price: 32999,
    mileage: 12,
    image: "/2024-toyota-camry-xle-silver.jpg",
    bodyType: "Sedan",
    drivetrain: "FWD",
    transmission: "AUTOMATIC",
    exteriorColor: "SILVER",
    interiorColor: "BLACK",
    fuelType: "HYBRID",
    cityMpg: 51,
    highwayMpg: 53,
    vin: "4T1K61AK5RU123456",
    stockNumber: "TC123456",
    engine: "4-CYLINDER HYBRID, 2.5 LITER",
  },
  {
    id: 3,
    year: 2023,
    make: "TOYOTA",
    model: "RAV4",
    trim: "ADVENTURE",
    price: 38999,
    mileage: 8500,
    image: "/2023-toyota-rav4-adventure-blue.jpg",
    bodyType: "SUV",
    drivetrain: "AWD",
    transmission: "AUTOMATIC",
    exteriorColor: "BLUE",
    interiorColor: "BLACK",
    fuelType: "GASOLINE",
    cityMpg: 27,
    highwayMpg: 35,
    vin: "2T3K1RFV8PC123789",
    stockNumber: "TR123789",
    engine: "4-CYLINDER, 2.5 LITER",
  },
  {
    id: 4,
    year: 2024,
    make: "TOYOTA",
    model: "PRIUS",
    trim: "PRIME",
    price: 35999,
    mileage: 5,
    image: "/2024-toyota-prius-prime-white.jpg",
    bodyType: "Hatchback",
    drivetrain: "FWD",
    transmission: "CVT",
    exteriorColor: "WHITE",
    interiorColor: "BLACK",
    fuelType: "PLUG-IN HYBRID",
    cityMpg: 127,
    highwayMpg: 108,
    vin: "JTDKARFP8P3123456",
    stockNumber: "TP123456",
    engine: "4-CYLINDER PLUG-IN HYBRID, 2.0 LITER",
  },
  {
    id: 5,
    year: 2023,
    make: "TOYOTA",
    model: "HIGHLANDER",
    trim: "PLATINUM",
    price: 48999,
    mileage: 15000,
    image: "/2023-toyota-highlander-platinum-black.jpg",
    bodyType: "SUV",
    drivetrain: "AWD",
    transmission: "AUTOMATIC",
    exteriorColor: "BLACK",
    interiorColor: "BROWN",
    fuelType: "GASOLINE",
    cityMpg: 21,
    highwayMpg: 29,
    vin: "5TDBZRFH8PS123456",
    stockNumber: "TH123456",
    engine: "V6, 3.5 LITER",
  },
  {
    id: 6,
    year: 2022,
    make: "FORD",
    model: "F-150",
    trim: "LARIAT",
    price: 45999,
    mileage: 25000,
    image: "/2022-ford-f150-lariat-red.jpg",
    bodyType: "Truck",
    drivetrain: "4WD",
    transmission: "AUTOMATIC",
    exteriorColor: "RED",
    interiorColor: "BLACK",
    fuelType: "GASOLINE",
    cityMpg: 20,
    highwayMpg: 26,
    vin: "1FTFW1E84NFA12345",
    stockNumber: "FF123456",
    engine: "V8, 5.0 LITER",
  },
]

interface VehicleGridProps {
  activeFilters?: {
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
}

export function VehicleGrid({ activeFilters }: VehicleGridProps) {
  const [sortBy, setSortBy] = useState("price-low")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [compareList, setCompareList] = useState<number[]>([])
  const { toast } = useToast()

  const filteredVehicles = vehicles.filter((vehicle) => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      const searchMatch =
        vehicle.make.toLowerCase().includes(searchLower) ||
        vehicle.model.toLowerCase().includes(searchLower) ||
        vehicle.trim.toLowerCase().includes(searchLower) ||
        vehicle.year.toString().includes(searchLower) ||
        vehicle.stockNumber.toLowerCase().includes(searchLower)

      if (!searchMatch) return false
    }

    // Apply active filters if provided
    if (activeFilters) {
      if (activeFilters.years.length > 0 && !activeFilters.years.includes(vehicle.year.toString())) {
        return false
      }
      if (activeFilters.makes.length > 0 && !activeFilters.makes.includes(vehicle.make)) {
        return false
      }
      if (activeFilters.models.length > 0 && !activeFilters.models.includes(vehicle.model)) {
        return false
      }
      if (activeFilters.bodyTypes.length > 0 && !activeFilters.bodyTypes.includes(vehicle.bodyType)) {
        return false
      }
      if (activeFilters.drivetrains.length > 0 && !activeFilters.drivetrains.includes(vehicle.drivetrain)) {
        return false
      }
      if (activeFilters.transmissions.length > 0 && !activeFilters.transmissions.includes(vehicle.transmission)) {
        return false
      }
      if (activeFilters.exteriorColors.length > 0 && !activeFilters.exteriorColors.includes(vehicle.exteriorColor)) {
        return false
      }

      // Price range filter
      if (activeFilters.priceRanges.length > 0) {
        const matchesPrice = activeFilters.priceRanges.some((range) => {
          const [min, max] = range.replace(/,/g, "").split(" - ").map(Number)
          return vehicle.price >= min && vehicle.price <= max
        })
        if (!matchesPrice) return false
      }

      // Mileage range filter
      if (activeFilters.mileageRanges.length > 0) {
        const matchesMileage = activeFilters.mileageRanges.some((range) => {
          const [min, max] = range.replace(/,/g, "").split(" - ").map(Number)
          return vehicle.mileage >= min && vehicle.mileage <= max
        })
        if (!matchesMileage) return false
      }

      // Highway MPG filter
      if (activeFilters.highwayMpg.length > 0) {
        const matchesHighwayMpg = activeFilters.highwayMpg.some((range) => {
          const [min, max] = range.split("-").map(Number)
          return vehicle.highwayMpg >= min && vehicle.highwayMpg <= max
        })
        if (!matchesHighwayMpg) return false
      }

      // City MPG filter
      if (activeFilters.cityMpg.length > 0) {
        const matchesCityMpg = activeFilters.cityMpg.some((range) => {
          const [min, max] = range.split("-").map(Number)
          return vehicle.cityMpg >= min && vehicle.cityMpg <= max
        })
        if (!matchesCityMpg) return false
      }
    }

    return true
  })

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "mileage-low":
        return a.mileage - b.mileage
      case "mileage-high":
        return b.mileage - a.mileage
      case "year-new":
        return b.year - a.year
      case "year-old":
        return a.year - b.year
      default:
        return 0
    }
  })

  const toggleFavorite = (vehicleId: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(vehicleId) ? prev.filter((id) => id !== vehicleId) : [...prev, vehicleId]

      toast({
        title: prev.includes(vehicleId) ? "Removed from favorites" : "Added to favorites",
        description: prev.includes(vehicleId)
          ? "Vehicle removed from your favorites list"
          : "Vehicle added to your favorites list",
      })

      return newFavorites
    })
  }

  const toggleCompare = (vehicleId: number) => {
    setCompareList((prev) => {
      if (prev.includes(vehicleId)) {
        const newList = prev.filter((id) => id !== vehicleId)
        toast({
          title: "Removed from comparison",
          description: "Vehicle removed from comparison list",
        })
        return newList
      } else if (prev.length >= 3) {
        toast({
          title: "Comparison limit reached",
          description: "You can only compare up to 3 vehicles at a time",
          variant: "destructive",
        })
        return prev
      } else {
        const newList = [...prev, vehicleId]
        toast({
          title: "Added to comparison",
          description: `Vehicle added to comparison (${newList.length}/3)`,
        })
        return newList
      }
    })
  }

  return (
    <div className="space-y-6">
      {/* Search and Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{filteredVehicles.length} Vehículos Encontrados</h2>
          <p className="text-muted-foreground">
            {searchQuery ? `Resultados para "${searchQuery}"` : "Mostrando todos los resultados"}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Buscar vehículos..."
              className="pl-10 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="mileage-low">Millaje: Menor a Mayor</SelectItem>
              <SelectItem value="mileage-high">Millaje: Mayor a Menor</SelectItem>
              <SelectItem value="year-new">Año: Más Nuevo</SelectItem>
              <SelectItem value="year-old">Año: Más Antiguo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {compareList.length > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="font-medium">Comparando {compareList.length} vehículos</span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  Ver Comparación
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setCompareList([])}>
                  Limpiar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Vehicle Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className={`rounded-full ${
                    favorites.includes(vehicle.id)
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : "bg-white/80 hover:bg-white"
                  }`}
                  onClick={() => toggleFavorite(vehicle.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(vehicle.id) ? "fill-current" : ""}`} />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className={`rounded-full ${
                    compareList.includes(vehicle.id)
                      ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      : "bg-white/80 hover:bg-white"
                  }`}
                  onClick={() => toggleCompare(vehicle.id)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {vehicle.mileage.toLocaleString("en-US")} mi
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
              </h3>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Stock: {vehicle.stockNumber}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{vehicle.drivetrain}</span>
                </div>
                <div className="flex items-center">
                  <Fuel className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>
                    {vehicle.cityMpg}/{vehicle.highwayMpg} MPG
                  </span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{vehicle.transmission}</span>
                </div>
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{vehicle.exteriorColor}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-primary">Our Price: ${vehicle.price.toLocaleString("en-US")}</p>
                <p className="text-sm text-muted-foreground">Mileage: {vehicle.mileage.toLocaleString("en-US")} mi</p>
              </div>

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
                    <Link href={`/inventory/${vehicle.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No se encontraron vehículos</h3>
            <p>Intenta ajustar tus filtros o búsqueda para ver más resultados.</p>
          </div>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Limpiar Búsqueda
          </Button>
        </div>
      )}

      {/* Load More */}
      {filteredVehicles.length > 0 && (
        <div className="text-center pt-8">
          <Button variant="outline" size="lg">
            Cargar Más Vehículos
          </Button>
        </div>
      )}
    </div>
  )
}
