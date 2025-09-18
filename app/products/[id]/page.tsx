"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, ShoppingCart, CheckCircle, Info } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Steel Beams",
    category: "Structural Materials",
    image: "/images/product-1.jpg",
    description:
      "High-grade structural steel beams engineered for maximum strength and durability in commercial construction.",
    features: ["Grade A Steel", "Corrosion Resistant", "Custom Lengths", "Certified Quality"],
    rating: 4.9,
    price: "Contact for Quote",
    fullDescription:
      "Our Premium Steel Beams represent the pinnacle of structural engineering materials. Manufactured from Grade A steel using advanced metallurgical processes, these beams offer exceptional strength-to-weight ratios and superior durability. Each beam undergoes rigorous quality testing and comes with comprehensive certification documentation.",
    specifications: {
      "Material Grade": "ASTM A992 Grade 50",
      "Yield Strength": "50 ksi minimum",
      "Tensile Strength": "65 ksi minimum",
      "Standard Lengths": "20', 30', 40', 50'",
      "Custom Lengths": "Available up to 60'",
      Coating: "Primer or galvanized options",
    },
    applications: [
      "High-rise building construction",
      "Industrial facility frameworks",
      "Bridge construction",
      "Commercial building structures",
      "Warehouse and distribution centers",
    ],
    certifications: ["AISC Certified", "AWS D1.1 Welding", "ISO 9001:2015", "OSHA Compliant"],
  },
  {
    id: 2,
    name: "Concrete Mix Solutions",
    category: "Building Materials",
    image: "/images/product-2.jpg",
    description:
      "Specialized concrete mixes designed for various construction applications with superior strength and workability.",
    features: ["High Strength", "Fast Setting", "Weather Resistant", "Eco-Friendly"],
    rating: 4.8,
    price: "From $120/cubic yard",
    fullDescription:
      "Our Concrete Mix Solutions are engineered for optimal performance across diverse construction applications. These specialized mixes combine carefully selected aggregates, high-quality cement, and advanced admixtures to deliver superior strength, durability, and workability. Each mix is designed to meet specific project requirements while maintaining environmental responsibility.",
    specifications: {
      "Compressive Strength": "3,000 - 8,000 PSI",
      "Slump Range": '3" - 8"',
      "Air Content": "4% - 7%",
      "Set Time": "Initial: 45 min, Final: 6 hours",
      "Aggregate Size": '3/4" maximum',
      "Water-Cement Ratio": "0.35 - 0.55",
    },
    applications: [
      "Foundation and footings",
      "Structural elements",
      "Pavement and sidewalks",
      "Precast concrete products",
      "Architectural concrete features",
    ],
    certifications: ["ASTM C94", "ACI 318 Compliant", "Green Building Certified", "DOT Approved"],
  },
  {
    id: 3,
    name: "Modular Building Systems",
    category: "Prefab Solutions",
    image: "/images/product-3.jpg",
    description: "Innovative modular building components for rapid construction and flexible architectural solutions.",
    features: ["Quick Assembly", "Customizable", "Energy Efficient", "Cost Effective"],
    rating: 4.7,
    price: "Starting at $50,000",
    fullDescription:
      "Our Modular Building Systems revolutionize construction through innovative prefabricated components that enable rapid assembly and maximum flexibility. These systems are designed for easy transportation, quick installation, and long-term durability. Each module is precision-manufactured in controlled factory conditions to ensure consistent quality and performance.",
    specifications: {
      "Module Sizes": "8'x20', 8'x40', 12'x40'",
      "Load Capacity": "Up to 40 PSF live load",
      Insulation: "R-19 walls, R-30 roof",
      Windows: "Double-pane, energy efficient",
      Electrical: "200A service, LED lighting",
      HVAC: "High-efficiency systems included",
    },
    applications: [
      "Temporary office buildings",
      "Educational facilities",
      "Healthcare clinics",
      "Retail spaces",
      "Emergency housing",
    ],
    certifications: ["IBC Compliant", "Energy Star Rated", "HUD Approved", "UL Listed"],
  },
  {
    id: 4,
    name: "Smart Building Controls",
    category: "Technology",
    image: "/images/product-4.jpg",
    description: "Advanced building automation systems for energy management and operational efficiency.",
    features: ["IoT Integration", "Energy Monitoring", "Remote Control", "Analytics Dashboard"],
    rating: 4.9,
    price: "From $15,000",
    fullDescription:
      "Our Smart Building Controls represent the future of building management technology. These advanced automation systems integrate IoT sensors, intelligent controls, and powerful analytics to optimize building performance, reduce energy consumption, and enhance occupant comfort. The system provides real-time monitoring and control capabilities accessible from anywhere.",
    specifications: {
      "Control Points": "Up to 10,000 points",
      Communication: "BACnet, Modbus, Ethernet",
      "User Interface": "Web-based dashboard",
      "Mobile App": "iOS and Android compatible",
      "Data Storage": "Cloud-based with local backup",
      Integration: "Third-party system compatible",
    },
    applications: [
      "Commercial office buildings",
      "Industrial facilities",
      "Educational institutions",
      "Healthcare facilities",
      "Retail complexes",
    ],
    certifications: ["BACnet Certified", "FCC Approved", "UL Listed", "Cybersecurity Compliant"],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/products")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => router.push("/products")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mr-4">{product.name}</h1>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                </div>
              </div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>
              <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
              <div className="text-2xl font-bold text-accent">{product.price}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Image */}
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground font-medium">{key}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Applications</h3>
              <div className="space-y-2">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications & Standards</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Product Features */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Ready to Order?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our sales team for pricing, availability, and custom specifications.
              </p>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => router.push("/contact-us")}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Info className="mr-2 h-4 w-4" />
                  Download Specs
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Contact</h3>
              <div className="space-y-2 text-sm">
                <p>📞 (555) 123-4567</p>
                <p>✉️ sales@engineeringco.com</p>
                <p>📍 123 Construction Ave, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
