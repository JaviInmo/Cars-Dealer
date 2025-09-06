import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-lg font-bold">Toyota Dealership</span>
            </div>
            <p className="text-white mb-4">
              Tu concesionario de confianza para vehículos Toyota nuevos y usados.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Inventario</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/inventory" className="text-white hover:text-white">
                  Todos los Vehículos
                </Link>
              </li>
              <li>
                <Link href="/inventory?type=new" className="text-white hover:text-white">
                  Vehículos Nuevos
                </Link>
              </li>
              <li>
                <Link href="/inventory?type=used" className="text-white hover:text-white">
                  Vehículos Usados
                </Link>
              </li>
              <li>
                <Link href="/inventory?type=certified" className="text-white hover:text-white">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white hover:text-white">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-white hover:text-white">
                  Repuestos
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-white hover:text-white">
                  Financiamiento
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-white hover:text-white">
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
