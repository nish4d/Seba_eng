"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ImageIcon, X } from "lucide-react"

const mediaItems = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    title: "Metropolitan Office Complex Construction",
    category: "Commercial",
    description: "Modern office complex with state-of-the-art facilities",
  },
  {
    id: 2,
    src: "/images/gallery-3.jpg",
    title: "Residential Tower Interior",
    category: "Residential",
    description: "Luxury finishes and modern design elements",
  },
  {
    id: 3,
    src: "/images/gallery-4.jpg",
    title: "Industrial Facility",
    category: "Industrial",
    description: "State-of-the-art manufacturing facility",
  },
  {
    id: 4,
    src: "/images/gallery-6.jpg",
    title: "Sustainable Building Features",
    category: "Green Building",
    description: "Eco-friendly construction techniques and materials",
  },
  {
    id: 5,
    src: "/images/project-1.jpg",
    title: "Bridge Construction Project",
    category: "Infrastructure",
    description: "Modern bridge construction with advanced engineering",
  },
  {
    id: 6,
    src: "/images/project-2.jpg",
    title: "Shopping Mall Complex",
    category: "Commercial",
    description: "Large-scale retail and entertainment complex",
  },
]

export default function MediaGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof mediaItems)[0] | null>(null)
  const router = useRouter()

  const categories = ["All", "Commercial", "Residential", "Infrastructure", "Industrial", "Green Building"]

  const filteredItems =
    selectedCategory === "All" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  const handleViewFullGallery = () => {
    router.push("/media-gallery")
  }

  const openImageModal = (item: (typeof mediaItems)[0]) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Media Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our visual portfolio showcasing the progress, craftsmanship, and results of our construction and
              engineering projects through high-quality images.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`mb-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "!bg-orange-600 hover:!bg-orange-700 !text-white !border-orange-600"
                    : "!bg-white hover:!bg-orange-50 !text-gray-700 !border-gray-300 hover:!border-orange-300 hover:!text-orange-600"
                }`}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="break-inside-avoid group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                    onClick={() => openImageModal(item)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-orange-400/90 text-white border-0">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/90 rounded-full">
                      <ImageIcon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold mb-1 text-balance">{item.title}</h3>
                    <p className="text-sm text-white/90 text-pretty">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleViewFullGallery}>
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Component for Image Viewing */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
              <Badge variant="secondary" className="mb-2 bg-slate-900/90 text-white border-0">
                {selectedImage.category}
              </Badge>
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
