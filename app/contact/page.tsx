import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-black/20 flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Contáctanos</h1>
            <p className="text-xl text-white/90 text-pretty">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros hoy mismo.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Tu apellido" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Cuéntanos más detalles sobre tu consulta..." rows={5} />
                  </div>

                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Av. Principal 123
                        <br />
                        Ciudad, Estado 12345
                        <br />
                        Estados Unidos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        Ventas: +1 (555) 123-4567
                        <br />
                        Servicio: +1 (555) 123-4568
                        <br />
                        Repuestos: +1 (555) 123-4569
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        General: info@toyotadealer.com
                        <br />
                        Ventas: ventas@toyotadealer.com
                        <br />
                        Servicio: servicio@toyotadealer.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Horarios de Atención</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunes - Viernes: 9:00 AM - 8:00 PM</p>
                        <p>Sábado: 9:00 AM - 6:00 PM</p>
                        <p>Domingo: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Mapa de Ubicación</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
