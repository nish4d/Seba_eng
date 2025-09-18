import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesSection from "@/components/sections/services-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Comprehensive construction and engineering services tailored to meet your project needs with quality,
              efficiency, and innovation at every step.
            </p>
          </div>
        </div>
      </section> */}

      <ServicesSection />
      <Footer />
    </main>
  )
}
