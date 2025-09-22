"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Metropolitan Office Complex",
    category: "Commercial",
    location: "Downtown District",
    year: "2024",
    image: "/images/project-1.jpg",
    description:
      "A 25-story modern office complex featuring sustainable design and smart building technology.",
    status: "Completed",
    fullDescription:
      "The Metropolitan Office Complex stands as a testament to modern architectural excellence and sustainable construction practices. This 25-story tower incorporates cutting-edge smart building technology, energy-efficient systems, and premium materials throughout. The project features state-of-the-art HVAC systems, advanced security infrastructure, and flexible office spaces designed to meet the evolving needs of modern businesses.",
    specifications: {
      area: "850,000 sq ft",
      floors: "25 floors",
      parking: "500 spaces",
      completion: "18 months",
    },
    features: [
      "LEED Platinum Certified",
      "Smart Building Technology",
      "Energy-Efficient Systems",
      "Premium Office Spaces",
      "Advanced Security",
      "Flexible Floor Plans",
    ],
  },
  {
    id: 2,
    title: "Riverside Residential Tower",
    category: "Residential",
    location: "Riverside Area",
    year: "2023",
    image: "/images/project-2.jpg",
    description:
      "Luxury residential tower with 200 units and premium amenities overlooking the river.",
    status: "Completed",
    fullDescription:
      "The Riverside Residential Tower offers luxury living with breathtaking river views. This 30-story residential complex features 200 premium units ranging from studios to three-bedroom penthouses. The building includes world-class amenities such as a rooftop pool, fitness center, concierge services, and landscaped gardens.",
    specifications: {
      area: "650,000 sq ft",
      floors: "30 floors",
      units: "200 units",
      completion: "24 months",
    },
    features: [
      "River Views",
      "Rooftop Pool",
      "Fitness Center",
      "Concierge Services",
      "Landscaped Gardens",
      "Premium Finishes",
    ],
  },
  {
    id: 3,
    title: "Highway Bridge Construction",
    category: "Infrastructure",
    location: "State Highway 101",
    year: "2024",
    image: "/images/project-3.jpg",
    description:
      "Major infrastructure project connecting two cities with a 2-mile suspension bridge.",
    status: "In Progress",
    fullDescription:
      "This major infrastructure project involves the construction of a 2-mile suspension bridge connecting two major cities. The bridge features advanced engineering solutions to withstand extreme weather conditions and heavy traffic loads. The project includes comprehensive environmental impact mitigation and state-of-the-art safety systems.",
    specifications: {
      length: "2 miles",
      lanes: "6 lanes",
      capacity: "80,000 vehicles/day",
      completion: "36 months",
    },
    features: [
      "Suspension Bridge Design",
      "Weather Resistant",
      "Heavy Load Capacity",
      "Environmental Protection",
      "Advanced Safety Systems",
      "Seismic Resistant",
    ],
  },
  {
    id: 4,
    title: "Green Energy Plant",
    category: "Industrial",
    location: "Industrial Zone",
    year: "2023",
    image: "/images/project-4.jpg",
    description:
      "State-of-the-art renewable energy facility with solar and wind power generation.",
    status: "Completed",
    fullDescription:
      "The Green Energy Plant represents our commitment to sustainable construction and renewable energy. This facility combines solar and wind power generation with advanced energy storage systems. The plant is designed to provide clean energy to over 50,000 homes while maintaining minimal environmental impact.",
    specifications: {
      capacity: "100 MW",
      area: "500 acres",
      homes: "50,000 homes",
      completion: "20 months",
    },
    features: [
      "Solar Power Generation",
      "Wind Power Generation",
      "Energy Storage Systems",
      "Smart Grid Integration",
      "Environmental Protection",
      "Automated Operations",
    ],
  },
  {
    id: 5,
    title: "Shopping Mall Renovation",
    category: "Commercial",
    location: "City Center",
    year: "2024",
    image: "/images/project-5.jpg",
    description:
      "Complete renovation and modernization of a 500,000 sq ft shopping center.",
    status: "In Progress",
    fullDescription:
      "This comprehensive renovation project transforms a traditional shopping center into a modern retail destination. The project includes structural upgrades, new facades, enhanced lighting systems, and improved customer amenities. The renovation maintains operations while upgrading all major systems.",
    specifications: {
      area: "500,000 sq ft",
      stores: "150 stores",
      parking: "2,000 spaces",
      completion: "15 months",
    },
    features: [
      "Modern Design",
      "Enhanced Lighting",
      "Improved Amenities",
      "Structural Upgrades",
      "Energy Efficiency",
      "Accessibility Features",
    ],
  },
  {
    id: 6,
    title: "University Campus Expansion",
    category: "Educational",
    location: "University District",
    year: "2023",
    image: "/images/project-6.jpg",
    description:
      "New academic buildings and student facilities for growing university campus.",
    status: "Completed",
    fullDescription:
      "The University Campus Expansion project adds state-of-the-art academic and student facilities to support the growing student population. The project includes new lecture halls, laboratories, student housing, and recreational facilities, all designed to enhance the educational experience.",
    specifications: {
      area: "400,000 sq ft",
      buildings: "5 buildings",
      capacity: "3,000 students",
      completion: "22 months",
    },
    features: [
      "Modern Lecture Halls",
      "Advanced Laboratories",
      "Student Housing",
      "Recreational Facilities",
      "Technology Integration",
      "Sustainable Design",
    ],
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number.parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/projects")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant={
                    project.status === "Completed" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="space-y-6">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />

            {/* Project Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground capitalize">
                      {key}
                    </div>
                    <div className="font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t">
              <Link href="/contact-us">
                <Button size="lg" className="w-full md:w-auto">
                  Contact Us About This Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
