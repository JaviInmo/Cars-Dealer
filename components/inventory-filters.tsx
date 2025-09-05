"use client"

import { useState } from "react"
import { ChevronDown, Calendar, Car, Truck, DollarSign, Gauge, Palette, Fuel, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const filterData = {
  years: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
  makes: ["Toyota", "Chevrolet", "Ford", "Honda", "Nissan", "Hyundai", "Kia", "Mazda"],
  models: {
    Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Tacoma", "Tundra", "Sienna"],
    Chevrolet: ["Silverado", "Equinox", "Malibu", "Traverse", "Tahoe", "Suburban"],
    Ford: ["F-150", "Explorer", "Escape", "Mustang", "Edge", "Expedition"],
  },
  bodyTypes: ["Sedan", "SUV", "Truck", "Hatchback", "Coupe", "Convertible", "Wagon", "Minivan"],
  priceRanges: [
    "0 - 5,000",
    "5,000 - 10,000",
    "10,000 - 15,000",
    "15,000 - 20,000",
    "20,000 - 25,000",
    "25,000 - 30,000",
    "30,000 - 35,000",
    "35,000 - 40,000",
    "40,000 - 50,000",
  ],
  drivetrains: ["FWD", "RWD", "AWD", "4WD"],
  transmissions: ["Automatic", "Manual", "CVT"],
  mileageRanges: [
    "0 - 50,000",
    "50,000 - 60,000",
    "60,000 - 70,000",
    "70,000 - 80,000",
    "80,000 - 90,000",
    "90,000 - 100,000",
    "100,000 - 110,000",
    "110,000 - 120,000",
    "120,000 - 130,000",
    "130,000 - 140,000",
    "140,000 - 150,000",
    "150,000 - 160,000",
    "160,000 - 170,000",
    "170,000 - 180,000",
  ],
  exteriorColors: ["White", "Black", "Silver", "Gray", "Red", "Blue", "Green", "Brown", "Gold"],
  highwayMpg: ["15-20", "20-25", "25-30", "30-35", "35-40"],
  cityMpg: ["15-20", "20-25", "25-30", "30-35", "35-40"],
}

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

interface InventoryFiltersProps {
  activeFilters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function InventoryFilters({ activeFilters, onFiltersChange }: InventoryFiltersProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    year: true,
    make: true,
    model: false,
    bodyType: false,
    price: false,
    drivetrain: false,
    transmission: false,
    mileage: false,
    exteriorColor: false,
    highwayMpg: false,
    cityMpg: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleFilterChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = {
      ...activeFilters,
      [category]: checked
        ? [...activeFilters[category], value]
        : activeFilters[category].filter((item) => item !== value),
    }
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    onFiltersChange({
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
  }

  const getActiveFiltersCount = () => {
    return Object.values(activeFilters).reduce((total, filterArray) => total + filterArray.length, 0)
  }

  const availableModels =
    activeFilters.makes.length > 0
      ? activeFilters.makes.flatMap((make) => filterData.models[make as keyof typeof filterData.models] || [])
      : Object.values(filterData.models).flat()

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filtros</CardTitle>
          {getActiveFiltersCount() > 0 && (
            <Button variant="outline" size="sm" onClick={clearAllFilters}>
              Limpiar ({getActiveFiltersCount()})
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Year Filter */}
        <Collapsible open={openSections.year} onOpenChange={() => toggleSection("year")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Año</span>
                {activeFilters.years.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.years.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.year ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.years.map((year) => (
              <div key={year} className="flex items-center space-x-2">
                <Checkbox
                  id={`year-${year}`}
                  checked={activeFilters.years.includes(year)}
                  onCheckedChange={(checked) => handleFilterChange("years", year, checked as boolean)}
                />
                <label htmlFor={`year-${year}`} className="text-sm cursor-pointer">
                  {year}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Make Filter */}
        <Collapsible open={openSections.make} onOpenChange={() => toggleSection("make")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-primary" />
                <span className="font-medium">Marca</span>
                {activeFilters.makes.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.makes.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.make ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.makes.map((make) => (
              <div key={make} className="flex items-center space-x-2">
                <Checkbox
                  id={`make-${make}`}
                  checked={activeFilters.makes.includes(make)}
                  onCheckedChange={(checked) => handleFilterChange("makes", make, checked as boolean)}
                />
                <label htmlFor={`make-${make}`} className="text-sm cursor-pointer">
                  {make}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Model Filter */}
        <Collapsible open={openSections.model} onOpenChange={() => toggleSection("model")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-primary" />
                <span className="font-medium">Modelo</span>
                {activeFilters.models.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.models.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.model ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {availableModels.map((model) => (
              <div key={model} className="flex items-center space-x-2">
                <Checkbox
                  id={`model-${model}`}
                  checked={activeFilters.models.includes(model)}
                  onCheckedChange={(checked) => handleFilterChange("models", model, checked as boolean)}
                />
                <label htmlFor={`model-${model}`} className="text-sm cursor-pointer">
                  {model}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Body Type Filter */}
        <Collapsible open={openSections.bodyType} onOpenChange={() => toggleSection("bodyType")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-primary" />
                <span className="font-medium">Tipo de Carrocería</span>
                {activeFilters.bodyTypes.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.bodyTypes.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.bodyType ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.bodyTypes.map((bodyType) => (
              <div key={bodyType} className="flex items-center space-x-2">
                <Checkbox
                  id={`bodyType-${bodyType}`}
                  checked={activeFilters.bodyTypes.includes(bodyType)}
                  onCheckedChange={(checked) => handleFilterChange("bodyTypes", bodyType, checked as boolean)}
                />
                <label htmlFor={`bodyType-${bodyType}`} className="text-sm cursor-pointer">
                  {bodyType}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Price Filter */}
        <Collapsible open={openSections.price} onOpenChange={() => toggleSection("price")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-medium">Precio</span>
                {activeFilters.priceRanges.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.priceRanges.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.price ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.priceRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={`price-${range}`}
                  checked={activeFilters.priceRanges.includes(range)}
                  onCheckedChange={(checked) => handleFilterChange("priceRanges", range, checked as boolean)}
                />
                <label htmlFor={`price-${range}`} className="text-sm cursor-pointer">
                  ${range}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Drivetrain Filter */}
        <Collapsible open={openSections.drivetrain} onOpenChange={() => toggleSection("drivetrain")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-primary" />
                <span className="font-medium">Tracción</span>
                {activeFilters.drivetrains.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.drivetrains.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.drivetrain ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.drivetrains.map((drivetrain) => (
              <div key={drivetrain} className="flex items-center space-x-2">
                <Checkbox
                  id={`drivetrain-${drivetrain}`}
                  checked={activeFilters.drivetrains.includes(drivetrain)}
                  onCheckedChange={(checked) => handleFilterChange("drivetrains", drivetrain, checked as boolean)}
                />
                <label htmlFor={`drivetrain-${drivetrain}`} className="text-sm cursor-pointer">
                  {drivetrain}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Transmission Filter */}
        <Collapsible open={openSections.transmission} onOpenChange={() => toggleSection("transmission")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-primary" />
                <span className="font-medium">Transmisión</span>
                {activeFilters.transmissions.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.transmissions.length}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openSections.transmission ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.transmissions.map((transmission) => (
              <div key={transmission} className="flex items-center space-x-2">
                <Checkbox
                  id={`transmission-${transmission}`}
                  checked={activeFilters.transmissions.includes(transmission)}
                  onCheckedChange={(checked) => handleFilterChange("transmissions", transmission, checked as boolean)}
                />
                <label htmlFor={`transmission-${transmission}`} className="text-sm cursor-pointer">
                  {transmission}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Mileage Filter */}
        <Collapsible open={openSections.mileage} onOpenChange={() => toggleSection("mileage")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-primary" />
                <span className="font-medium">Millaje</span>
                {activeFilters.mileageRanges.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.mileageRanges.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.mileage ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.mileageRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={`mileage-${range}`}
                  checked={activeFilters.mileageRanges.includes(range)}
                  onCheckedChange={(checked) => handleFilterChange("mileageRanges", range, checked as boolean)}
                />
                <label htmlFor={`mileage-${range}`} className="text-sm cursor-pointer">
                  {range} mi
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Exterior Color Filter */}
        <Collapsible open={openSections.exteriorColor} onOpenChange={() => toggleSection("exteriorColor")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4 text-primary" />
                <span className="font-medium">Color Exterior</span>
                {activeFilters.exteriorColors.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.exteriorColors.length}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openSections.exteriorColor ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.exteriorColors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={activeFilters.exteriorColors.includes(color)}
                  onCheckedChange={(checked) => handleFilterChange("exteriorColors", color, checked as boolean)}
                />
                <label htmlFor={`color-${color}`} className="text-sm cursor-pointer">
                  {color}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Highway MPG Filter */}
        <Collapsible open={openSections.highwayMpg} onOpenChange={() => toggleSection("highwayMpg")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Fuel className="h-4 w-4 text-primary" />
                <span className="font-medium">Highway MPG</span>
                {activeFilters.highwayMpg.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.highwayMpg.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.highwayMpg ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.highwayMpg.map((mpg) => (
              <div key={mpg} className="flex items-center space-x-2">
                <Checkbox
                  id={`highway-${mpg}`}
                  checked={activeFilters.highwayMpg.includes(mpg)}
                  onCheckedChange={(checked) => handleFilterChange("highwayMpg", mpg, checked as boolean)}
                />
                <label htmlFor={`highway-${mpg}`} className="text-sm cursor-pointer">
                  {mpg} MPG
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* City MPG Filter */}
        <Collapsible open={openSections.cityMpg} onOpenChange={() => toggleSection("cityMpg")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Fuel className="h-4 w-4 text-primary" />
                <span className="font-medium">City MPG</span>
                {activeFilters.cityMpg.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {activeFilters.cityMpg.length}
                  </span>
                )}
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${openSections.cityMpg ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {filterData.cityMpg.map((mpg) => (
              <div key={mpg} className="flex items-center space-x-2">
                <Checkbox
                  id={`city-${mpg}`}
                  checked={activeFilters.cityMpg.includes(mpg)}
                  onCheckedChange={(checked) => handleFilterChange("cityMpg", mpg, checked as boolean)}
                />
                <label htmlFor={`city-${mpg}`} className="text-sm cursor-pointer">
                  {mpg} MPG
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
