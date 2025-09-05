import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-black/20 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-toyota-showroom-with-luxury-vehicles.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Encuentra tu Toyota Perfecto</h1>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Descubre nuestra amplia selección de vehículos Toyota nuevos y usados. Calidad, confiabilidad y el mejor
            servicio al cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Ver Inventario
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
