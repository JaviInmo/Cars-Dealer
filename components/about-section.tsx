import { Award, Users, Wrench, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "Excelencia Comprobada",
    description: "Más de 50 años de experiencia en el mercado automotriz con reconocimientos internacionales.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales certificados comprometidos con brindar el mejor servicio y asesoría personalizada.",
  },
  {
    icon: Wrench,
    title: "Servicio Integral",
    description: "Desde la venta hasta el mantenimiento, ofrecemos soluciones completas para tu vehículo.",
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Respaldamos cada vehículo con garantías extendidas y programas de protección completos.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Acerca de Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos más que un concesionario. Somos tu socio de confianza en cada kilómetro del camino, comprometidos con
            ofrecerte la mejor experiencia automotriz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground mb-6">
                Conectar a las personas con vehículos Toyota de calidad excepcional, proporcionando una experiencia de
                compra transparente, confiable y centrada en el cliente. Nos esforzamos por superar las expectativas en
                cada interacción.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Vehículos en Stock</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/toyota-dealership-team-professional-photo.jpg" alt="Nuestro equipo" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
