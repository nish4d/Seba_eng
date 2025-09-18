import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductsSection from "@/components/sections/products-section"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Discover our range of high-quality construction materials, innovative building solutions, and cutting-edge
              technology products designed to enhance your projects.
            </p>
          </div>
        </div>
      </section> */}

      <ProductsSection />
      <Footer />
    </main>
  )
}
