import { Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import ServicesPage from "@/pages/ServicesPage"
import InventoryPage from "@/pages/InventoryPage"
import VehicleDetailsPage from "@/pages/VehicleDetailsPage"

function App() {
  return (
    <div className="font-sans">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<VehicleDetailsPage />} />
        </Routes>
        <Toaster />
      </Suspense>
    </div>
  )
}

export default App
