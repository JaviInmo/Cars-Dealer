import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Información de Contacto</h2>
              <p className="text-lg text-muted-foreground">
                Estamos aquí para ayudarte. Contáctanos de la manera que prefieras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123
                    <br />
                    Ciudad, Estado 12345
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 123-4568
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@toyotadealer.com
                    <br />
                    ventas@toyotadealer.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Horarios</h3>
                  <p className="text-muted-foreground">
                    Lun - Vie: 9AM - 8PM
                    <br />
                    Sáb: 9AM - 6PM
                    <br />
                    Dom: 12PM - 5PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
