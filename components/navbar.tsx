"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown, Calendar, Car, Truck, Zap, DollarSign, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/inventory?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">AMAAN MOTORS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a className="flex items-center space-x-1 hover:text-primary text-sm font-medium">
                    <span>Inventory</span>
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuLabel>Ver por Categoría</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory" className="flex items-center">
                      <Car className="h-4 w-4 mr-2" />
                      See all
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?bodyType=sedan" className="flex items-center">
                      <Car className="h-4 w-4 mr-2" />
                      Sedanes
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?bodyType=suv" className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      SUVs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?bodyType=truck" className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      Camionetas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?bodyType=hybrid" className="flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Híbridos
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Filtros Rápidos</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?year=2024" className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Modelos 2024
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?price=0-25000" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Menos de $25,000
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/inventory?mileage=0-50000" className="flex items-center">
                      <Gauge className="h-4 w-4 mr-2" />
                      Bajo Millaje
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/services"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                  href=""
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Apply only
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Search and User */}
          {/*<div className="hidden md:flex items-center space-x-4">*/}
          {/*  <form onSubmit={handleSearch} className="relative">*/}
          {/*    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />*/}
          {/*    <Input*/}
          {/*      type="search"*/}
          {/*      placeholder="Buscar vehículos..."*/}
          {/*      className="pl-10 w-64"*/}
          {/*      value={searchQuery}*/}
          {/*      onChange={(e) => setSearchQuery(e.target.value)}*/}
          {/*    />*/}
          {/*  </form>*/}

          {/*  <DropdownMenu>*/}
          {/*    <DropdownMenuTrigger asChild>*/}
          {/*      <Button variant="ghost" size="icon" className="rounded-full">*/}
          {/*        <User className="h-5 w-5" />*/}
          {/*      </Button>*/}
          {/*    </DropdownMenuTrigger>*/}
          {/*    <DropdownMenuContent align="end">*/}
          {/*      <DropdownMenuItem asChild>*/}
          {/*        <Link href="/about">Acerca de Nosotros</Link>*/}
          {/*      </DropdownMenuItem>*/}
          {/*      <DropdownMenuItem asChild>*/}
          {/*        <Link href="/contact">Contactar</Link>*/}
          {/*      </DropdownMenuItem>*/}
          {/*      <DropdownMenuSeparator />*/}
          {/*      <DropdownMenuItem asChild>*/}
          {/*        <Link href="/financing">Financiamiento</Link>*/}
          {/*      </DropdownMenuItem>*/}
          {/*      <DropdownMenuItem asChild>*/}
          {/*        <Link href="/warranty">Garantías</Link>*/}
          {/*      </DropdownMenuItem>*/}
          {/*    </DropdownMenuContent>*/}
          {/*  </DropdownMenu>*/}
          {/*</div>*/}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link
                href="/inventory"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Inventario
              </Link>
              <div className="pl-6 space-y-1">
                <Link
                  href="/inventory?bodyType=sedan"
                  className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                >
                  • Sedanes
                </Link>
                <Link
                  href="/inventory?bodyType=suv"
                  className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                >
                  • SUVs
                </Link>
                <Link
                  href="/inventory?bodyType=truck"
                  className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                >
                  • Camionetas
                </Link>
              </div>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Servicios
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Contacto
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Acerca de Nosotros
              </Link>

              <div className="pt-4">
                <form onSubmit={handleSearch}>
                  <Input
                    type="search"
                    placeholder="Buscar vehículos..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
