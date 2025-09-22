import Footer from "@/components/footer";
import HeroBanner from "@/components/sections/hero-banner";
import ProjectsSection from "@/components/sections/projects-section";
import ServicesSection from "@/components/sections/services-section";
import MediaGallerySection from "@/components/sections/media-gallery-section";
import ProductsSection from "@/components/sections/products-section";
import Navbar from "@/components/navbar";
import ContactFormSection from "@/components/sections/contact-form-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <ProjectsSection />
      <div className="text-center bg-[#FAFBFD] -mt-8 pb-8">
        <Link href="/projects">
          <Button
            size="lg"
            className="bg-orange-500 -mt-12 hover:bg-orange-600 text-white"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <ServicesSection />

      <div className="text-center -mt-8 pb-12">
        <Link href="/our-services">
          <Button
            size="lg"
            className="bg-orange-500 -mt-12 hover:bg-orange-600 text-white"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <MediaGallerySection />

      <div className="text-center bg-[#FAFBFD] -mt-8 pb-8">
        <Link href="/media-gallery">
          <Button
            size="lg"
            className="bg-orange-500 -mt-12 hover:bg-orange-600 text-white"
          >
            View All Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <ProductsSection />

      <div className="text-center -mt-8 pb-12">
        <Link href="/products">
          <Button
            size="lg"
            className="bg-orange-500 -mt-12 hover:bg-orange-600 text-white"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <ContactFormSection />
      <Footer />
    </main>
  );
}
