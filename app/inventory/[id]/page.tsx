import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleDetailsContent } from "@/components/vehicle-details-content"

// Sample vehicle data - in a real app this would come from a database
const vehicles = [
  {
    id: 1,
    year: 2019,
    make: "CHEVROLET",
    model: "SILVERADO 3500 HD",
    trim: "CREW CAB",
    price: 42999,
    mileage: 79591,
    images: [
      "/2019-chevrolet-silverado-3500-hd-white.jpg",
      "/2019-chevrolet-silverado-interior.jpg",
      "/2019-chevrolet-silverado-engine.jpg",
      "/2019-chevrolet-silverado-rear.jpg",
      "/2019-chevrolet-silverado-side.jpg",
    ],
    bodyType: "PICKUP",
    drivetrain: "4WD",
    transmission: "AUTOMATIC",
    exteriorColor: "WHITE",
    interiorColor: "BLACK",
    fuelType: "DIESEL",
    cityMpg: 17,
    highwayMpg: 24,
    vin: "1GC4KXCY9KF134852",
    stockNumber: "AM134852",
    engine: "V8, TURBO DIESEL, 6.6 LITER",
    doors: 4,
    trimDetails: "LTZ PICKUP 4D 6 1/2 FT",
    equipment: [
      "POWER TAILGATE RELEASE",
      "FOG LIGHTS",
      "KEYLESS START",
      "DUAL POWER SEATS",
      "CD/MP3 (SINGLE DISC)",
      "CRUISE CONTROL",
      "AM/FM/HD RADIO",
      "POWER SLIDING REAR WINDOW",
      "HILL START ASSIST CONTROL",
      "PREMIUM WHEELS",
      "ABS (4-WHEEL)",
      "TILT & TELESCOPING WHEEL",
      "POWER STEERING",
      "VENTILATED SEATS",
      "ANTI-THEFT SYSTEM",
      "BLUETOOTH WIRELESS",
      "TRACTION CONTROL",
      "DUAL AIR BAGS",
      "STABILITRAK",
      "POWER WINDOWS",
      "POWER DOOR LOCKS",
      "HEATED SEATS",
      "KEYLESS ENTRY",
      "DURAMAX PLUS PKG",
      "ONSTAR",
      "AIR CONDITIONING",
      "TOWING PKG",
      "NAVIGATION SYSTEM",
      "LEATHER",
      "BACKUP CAMERA",
      "DAYTIME RUNNING LIGHTS",
      "SIRIUSXM SATELLITE",
    ],
  },
  {
    id: 2,
    year: 2024,
    make: "TOYOTA",
    model: "CAMRY",
    trim: "XLE",
    price: 32999,
    mileage: 12,
    images: ["/2024-toyota-camry-xle-silver.jpg", "/2024-toyota-camry-interior.jpg", "/2024-toyota-camry-engine.jpg"],
    bodyType: "SEDAN",
    drivetrain: "FWD",
    transmission: "AUTOMATIC",
    exteriorColor: "SILVER",
    interiorColor: "BLACK",
    fuelType: "HYBRID",
    cityMpg: 51,
    highwayMpg: 53,
    vin: "4T1K61AK5RU123456",
    stockNumber: "TC123456",
    engine: "4-CYLINDER HYBRID, 2.5 LITER",
    doors: 4,
    trimDetails: "XLE SEDAN 4D",
    equipment: [
      "HYBRID POWERTRAIN",
      "LEATHER SEATS",
      "NAVIGATION SYSTEM",
      "BACKUP CAMERA",
      "BLUETOOTH WIRELESS",
      "KEYLESS START",
      "DUAL POWER SEATS",
      "HEATED SEATS",
      "SUNROOF",
      "PREMIUM AUDIO",
      "SAFETY SENSE 2.0",
      "ADAPTIVE CRUISE CONTROL",
    ],
  },
]

interface PageProps {
  params: {
    id: string
  }
}

export default function VehicleDetailsPage({ params }: PageProps) {
  const vehicle = vehicles.find((v) => v.id === Number.parseInt(params.id))

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VehicleDetailsContent vehicle={vehicle} />
      </main>
      <Footer />
    </div>
  )
}
