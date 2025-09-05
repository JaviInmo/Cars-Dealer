import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-primary font-bold">T</span>
              </div>
              <span className="text-lg font-bold">Toyota Dealership</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Tu concesionario de confianza para vehículos Toyota nuevos y usados.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-primary-foreground/80 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Inventario</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/inventory" className="text-primary-foreground/80 hover:text-white">
                  Todos los Vehículos
                </Link>
              </li>
              <li>
                <Link to="/inventory?type=new" className="text-primary-foreground/80 hover:text-white">
                  Vehículos Nuevos
                </Link>
              </li>
              <li>
                <Link to="/inventory?type=used" className="text-primary-foreground/80 hover:text-white">
                  Vehículos Usados
                </Link>
              </li>
              <li>
                <Link to="/inventory?type=certified" className="text-primary-foreground/80 hover:text-white">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-primary-foreground/80 hover:text-white">
                  Repuestos
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-primary-foreground/80 hover:text-white">
                  Financiamiento
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-primary-foreground/80 hover:text-white">
                  Garantías
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Av. Principal 123</li>
              <li>Ciudad, Estado 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@toyotadealer.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">© 2024 Toyota Dealership. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
