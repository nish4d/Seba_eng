import Footer from "@/components/footer"
import HeroBanner from "@/components/sections/hero-banner"
import ProjectsSection from "@/components/sections/projects-section"
import ServicesSection from "@/components/sections/services-section"
import MediaGallerySection from "@/components/sections/media-gallery-section"
import ProductsSection from "@/components/sections/products-section"
import Navbar from "@/components/navbar"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <ProjectsSection />
      <ServicesSection />
      <MediaGallerySection />
      <ProductsSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
