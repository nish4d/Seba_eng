"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"

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
  },
  {
    id: 4,
    name: "Smart Building Controls",
    category: "Technology",
    image: "/images/product-1.jpg",
    description: "Advanced building automation systems for energy management and operational efficiency.",
    features: ["IoT Integration", "Energy Monitoring", "Remote Control", "Analytics Dashboard"],
    rating: 4.9,
    price: "From $15,000",
  },
]

export default function ProductsSection() {
  const router = useRouter()

  const handleLearnMore = (productId: number) => {
    router.push(`/products/${productId}`)
  }

  const handleViewAllProducts = () => {
    router.push("/products")
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our range of high-quality construction materials, innovative building solutions, and cutting-edge
            technology products designed to enhance your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-orange-400/90">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-balance">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">{product.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-orange-500">{product.price}</span>
                </div>
                <Button variant="ghost" className="w-full group/btn border-2 hover:bg-orange-500" onClick={() => handleLearnMore(product.id)}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-500/90" onClick={handleViewAllProducts}>
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
