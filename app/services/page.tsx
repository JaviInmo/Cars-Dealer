import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Wrench, Shield, DollarSign, Calendar, Car, Users, Award, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento y Reparación",
    description: "Servicio técnico especializado con repuestos originales Toyota",
    features: ["Cambio de aceite", "Revisión de frenos", "Diagnóstico computarizado", "Mantenimiento preventivo"],
  },
  {
    icon: Shield,
    title: "Garantías Extendidas",
    description: "Protección adicional para tu inversión con cobertura completa",
    features: ["Garantía de motor", "Cobertura eléctrica", "Protección de pintura", "Asistencia en carretera"],
  },
  {
    icon: DollarSign,
    title: "Financiamiento",
    description: "Opciones flexibles de financiamiento adaptadas a tu presupuesto",
    features: ["Tasas competitivas", "Aprobación rápida", "Planes personalizados", "Trade-in disponible"],
  },
  {
    icon: Calendar,
    title: "Citas de Servicio",
    description: "Agenda tu cita de manera fácil y conveniente",
    features: ["Citas en línea", "Recordatorios automáticos", "Servicio express", "Transporte cortesía"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-black/20 flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Nuestros Servicios</h1>
            <p className="text-xl text-white/90 text-pretty">
              Servicios integrales para mantener tu Toyota en perfectas condiciones
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Más Información</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Service Stats */}
          <div className="bg-card rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Por Qué Elegirnos?</h2>
              <p className="text-lg text-muted-foreground">
                Números que respaldan nuestro compromiso con la excelencia
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>

              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
                <div className="text-muted-foreground">Servicios Realizados</div>
              </div>

              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>

              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Asistencia Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
