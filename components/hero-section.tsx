import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-dvh bg-black/20 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-toyota-showroom-with-luxury-vehicles.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex flex-col sm:flex-row mt-[450px] gap-4">
            <Button className="bg-white !rounded-3xl text-black font-semibold hover:bg-white/90">
              Learn More
              <ChevronRight className="h-5 w-5 font-semibold" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
