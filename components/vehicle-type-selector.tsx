"use client"

import { useState } from "react"
import { Car, Truck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const vehicleTypes = [
  {
    id: "sedan",
    name: "Sedanes",
    icon: Car,
    description: "Comodidad y eficiencia para el día a día",
    models: ["Camry", "Corolla", "Avalon"],
  },
  {
    id: "suv",
    name: "SUVs",
    icon: Truck,
    description: "Versatilidad y espacio para toda la familia",
    models: ["RAV4", "Highlander", "4Runner"],
  },
  {
    id: "hybrid",
    name: "Híbridos",
    icon: Zap,
    description: "Tecnología eco-friendly para el futuro",
    models: ["Prius", "Camry Hybrid", "RAV4 Hybrid"],
  },
]

export function VehicleTypeSelector() {
  const [selectedType, setSelectedType] = useState("sedan")

  const selectedVehicle = vehicleTypes.find((type) => type.id === selectedType)
  const SelectedIcon = selectedVehicle?.icon || Car

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Encuentra tu Tipo de Vehículo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra gama completa de vehículos Toyota diseñados para cada estilo de vida
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full h-14 text-lg bg-primary text-primary-foreground border-2 border-secondary">
              <div className="flex items-center gap-3">
                <SelectedIcon className="h-6 w-6" />
                <SelectValue placeholder="Selecciona el tipo de vehículo" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {vehicleTypes.map((type) => {
                const Icon = type.icon
                return (
                  <SelectItem key={type.id} value={type.id} className="text-lg py-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span>{type.name}</span>
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>

        {selectedVehicle && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border-2 border-primary rounded-lg p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                <SelectedIcon className="h-10 w-10 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">{selectedVehicle.name}</h3>
              <p className="text-muted-foreground mb-6">{selectedVehicle.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedVehicle.models.map((model) => (
                  <div
                    key={model}
                    className="bg-secondary text-secondary-foreground rounded-md py-2 px-3 text-sm font-medium"
                  >
                    {model}
                  </div>
                ))}
              </div>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3">
                Ver Todos los Modelos
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
