import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", followers: "25K" },
  { icon: Instagram, href: "#", label: "Instagram", followers: "18K" },
  { icon: Twitter, href: "#", label: "Twitter", followers: "12K" },
  { icon: Youtube, href: "#", label: "YouTube", followers: "8K" },
]

export function SocialSection() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente conectado con nosotros para las últimas noticias, ofertas especiales y contenido exclusivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{social.label}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{social.followers} seguidores</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Seguir
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                Lun - Sáb: 9AM - 8PM
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
        </div>
      </div>
    </section>
  )
}
