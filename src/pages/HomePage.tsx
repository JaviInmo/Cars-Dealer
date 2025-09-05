import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CompanyCarousel } from "@/components/company-carousel"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { VehicleTypeSelector } from "@/components/vehicle-type-selector"
import { AboutSection } from "@/components/about-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CompanyCarousel />
        <VehicleTypeSelector />
        <FeaturedVehicles />
        <AboutSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  )
}
