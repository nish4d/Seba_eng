"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Metropolitan Office Complex",
    category: "Commercial",
    location: "Downtown District",
    year: "2024",
    image: "/images/project-1.jpg",
    description: "A 25-story modern office complex featuring sustainable design and smart building technology.",
    status: "Completed",
  },
  {
    id: 2,
    title: "Riverside Residential Tower",
    category: "Residential",
    location: "Riverside Area",
    year: "2023",
    image: "/images/project-2.jpg",
    description: "Luxury residential tower with 200 units and premium amenities overlooking the river.",
    status: "Completed",
  },
  {
    id: 3,
    title: "Highway Bridge Construction",
    category: "Infrastructure",
    location: "State Highway 101",
    year: "2024",
    image: "/images/project-3.jpg",
    description: "Major infrastructure project connecting two cities with a 2-mile suspension bridge.",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Green Energy Plant",
    category: "Industrial",
    location: "Industrial Zone",
    year: "2023",
    image: "/images/project-4.jpg",
    description: "State-of-the-art renewable energy facility with solar and wind power generation.",
    status: "Completed",
  },
  {
    id: 5,
    title: "Shopping Mall Renovation",
    category: "Commercial",
    location: "City Center",
    year: "2024",
    image: "/images/project-5.jpg",
    description: "Complete renovation and modernization of a 500,000 sq ft shopping center.",
    status: "In Progress",
  },
  {
    id: 6,
    title: "University Campus Expansion",
    category: "Educational",
    location: "University District",
    year: "2023",
    image: "/images/project-6.jpg",
    description: "New academic buildings and student facilities for growing university campus.",
    status: "Completed",
  },
]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const router = useRouter()
  const categories = ["All", "Commercial", "Residential", "Infrastructure", "Industrial", "Educational"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleViewDetails = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  const handleViewAllProjects = () => {
    router.push("/projects")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our portfolio of successful construction and engineering projects that showcase our expertise and
            commitment to excellence across various sectors.
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
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-orange-200/90">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                <Button variant="ghost" className="w-full group/btn border-2 hover:bg-orange-500" onClick={() => handleViewDetails(project.id)}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
