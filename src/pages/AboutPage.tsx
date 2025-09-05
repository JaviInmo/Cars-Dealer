import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-black/20 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/toyota-dealership-team-professional-photo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Acerca de Nosotros</h1>
            <p className="text-xl text-white/90 text-pretty">
              Más de 50 años conectando familias con vehículos Toyota de calidad excepcional
            </p>
          </div>
        </div>
      </section>

      <main>
        <AboutSection />

        {/* Contact Information */}
        <section className="py-16 bg-card"></section>
      </main>

      <Footer />
    </div>
  )
}
