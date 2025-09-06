"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "/toyota-manufacturing-facility-with-workers.jpg",
    title: "Nuestra Fábrica",
    description: "Tecnología de punta en cada proceso de manufactura",
  },
  {
    id: 2,
    type: "video",
    src: "/toyota-hybrid-technology-showcase.jpg",
    title: "Tecnología Híbrida",
    description: "Liderando el futuro de la movilidad sostenible",
  },
  {
    id: 3,
    type: "image",
    src: "/toyota-safety-testing-laboratory.jpg",
    title: "Seguridad Toyota",
    description: "Comprometidos con tu seguridad y la de tu familia",
  },
  {
    id: 4,
    type: "image",
    src: "/toyota-customer-service-center.jpg",
    title: "Servicio al Cliente",
    description: "Atención personalizada que supera expectativas",
  },
]

export function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Discover Amaan Motors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre la historia, tecnología y compromiso que nos hace líderes en la industria automotriz
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={mediaItems[currentIndex].src || "/placeholder.svg"}
                alt={mediaItems[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {mediaItems[currentIndex].type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </Button>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{mediaItems[currentIndex].title}</h3>
                <p className="text-white/90">{mediaItems[currentIndex].description}</p>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-lg border-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-lg border-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
