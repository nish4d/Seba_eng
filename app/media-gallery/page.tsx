import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MediaGallerySection from "@/components/sections/media-gallery-section"

export default function MediaGalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Media Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Take a visual journey through our projects with our comprehensive gallery of photos and videos showcasing
              our craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section> */}

      <MediaGallerySection />
      <Footer />
    </main>
  )
}
