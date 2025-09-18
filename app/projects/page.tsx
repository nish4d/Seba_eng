import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsSection from "@/components/sections/projects-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Explore our comprehensive portfolio of successful construction and engineering projects across commercial,
              residential, infrastructure, and industrial sectors.
            </p>
          </div>
        </div>
      </section> */}

      <ProjectsSection />
      <Footer />
    </main>
  )
}
