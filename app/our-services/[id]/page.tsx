"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, Home, Bold as Road, Factory, Wrench, Users, CheckCircle } from "lucide-react"

const services = [
  {
    id: 0,
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Complete commercial building solutions from office complexes to retail spaces with modern design and functionality.",
    features: ["Office Buildings", "Retail Centers", "Warehouses", "Mixed-Use Developments"],
    fullDescription:
      "Our commercial construction services encompass the complete development lifecycle from initial planning to final delivery. We specialize in creating functional, aesthetically pleasing commercial spaces that meet the unique needs of businesses across various industries. Our team combines innovative design with proven construction methodologies to deliver projects on time and within budget.",
    benefits: [
      "Expert project management from start to finish",
      "Sustainable building practices and materials",
      "Compliance with all local building codes and regulations",
      "Flexible design solutions to meet specific business needs",
      "Advanced technology integration for smart buildings",
      "Cost-effective construction methods",
    ],
    process: [
      "Initial consultation and needs assessment",
      "Design development and planning",
      "Permit acquisition and regulatory approval",
      "Construction phase with regular progress updates",
      "Quality assurance and final inspection",
      "Project handover and ongoing support",
    ],
  },
  {
    id: 1,
    icon: Home,
    title: "Residential Building",
    description:
      "Quality residential construction services for single-family homes, apartments, and luxury developments.",
    features: ["Custom Homes", "Apartment Complexes", "Townhouses", "Luxury Estates"],
    fullDescription:
      "We create beautiful, functional residential spaces that families love to call home. Our residential construction services range from custom single-family homes to large-scale apartment complexes. We focus on quality craftsmanship, energy efficiency, and creating spaces that enhance the quality of life for residents.",
    benefits: [
      "Custom design solutions tailored to your lifestyle",
      "Energy-efficient construction for lower utility costs",
      "High-quality materials and finishes",
      "Flexible floor plans and modern amenities",
      "Compliance with all safety and building standards",
      "Warranty coverage for peace of mind",
    ],
    process: [
      "Design consultation and planning",
      "Site preparation and foundation work",
      "Structural construction and framing",
      "Mechanical, electrical, and plumbing installation",
      "Interior finishing and final details",
      "Final walkthrough and project completion",
    ],
  },
  {
    id: 2,
    icon: Road,
    title: "Infrastructure Development",
    description:
      "Large-scale infrastructure projects including roads, bridges, and public utilities with engineering excellence.",
    features: ["Highway Construction", "Bridge Building", "Utility Systems", "Public Works"],
    fullDescription:
      "Our infrastructure development services support community growth and economic development through the construction of essential public works. We have extensive experience in highway construction, bridge building, utility systems, and other critical infrastructure projects that serve the public interest.",
    benefits: [
      "Expertise in large-scale infrastructure projects",
      "Advanced engineering and construction techniques",
      "Environmental impact mitigation strategies",
      "Compliance with government standards and regulations",
      "Long-term durability and reliability",
      "Community-focused development approach",
    ],
    process: [
      "Feasibility studies and environmental assessments",
      "Engineering design and technical specifications",
      "Regulatory approvals and permit acquisition",
      "Construction execution with safety protocols",
      "Quality testing and performance verification",
      "Project commissioning and handover",
    ],
  },
  {
    id: 3,
    icon: Factory,
    title: "Industrial Construction",
    description:
      "Specialized industrial facilities designed for manufacturing, processing, and distribution operations.",
    features: ["Manufacturing Plants", "Distribution Centers", "Processing Facilities", "Industrial Parks"],
    fullDescription:
      "We design and build specialized industrial facilities that optimize operational efficiency and productivity. Our industrial construction services include manufacturing plants, distribution centers, processing facilities, and complete industrial parks. We understand the unique requirements of industrial operations and deliver solutions that enhance productivity.",
    benefits: [
      "Specialized knowledge of industrial requirements",
      "Optimized layouts for operational efficiency",
      "Heavy-duty construction for industrial equipment",
      "Safety-focused design and construction",
      "Scalable solutions for future expansion",
      "Integration of advanced industrial systems",
    ],
    process: [
      "Operational requirements analysis",
      "Facility design and engineering",
      "Site preparation and utilities installation",
      "Structural construction and equipment installation",
      "Systems integration and testing",
      "Commissioning and operational handover",
    ],
  },
  {
    id: 4,
    icon: Wrench,
    title: "Engineering Consulting",
    description:
      "Expert engineering consultation services for project planning, design optimization, and technical solutions.",
    features: ["Structural Engineering", "Project Planning", "Design Review", "Technical Analysis"],
    fullDescription:
      "Our engineering consulting services provide expert technical guidance throughout the project lifecycle. We offer structural engineering, project planning, design review, and technical analysis services to ensure optimal project outcomes. Our experienced engineers bring deep technical knowledge and innovative solutions to complex challenges.",
    benefits: [
      "Expert technical guidance and analysis",
      "Cost-effective design optimization",
      "Risk assessment and mitigation strategies",
      "Compliance with engineering standards",
      "Innovative solutions to complex challenges",
      "Ongoing technical support and consultation",
    ],
    process: [
      "Technical requirements assessment",
      "Engineering analysis and design development",
      "Design review and optimization",
      "Technical documentation and specifications",
      "Construction support and oversight",
      "Performance evaluation and recommendations",
    ],
  },
  {
    id: 5,
    icon: Users,
    title: "Project Management",
    description:
      "Comprehensive project management services ensuring timely delivery and quality control throughout construction.",
    features: ["Timeline Management", "Quality Control", "Budget Oversight", "Stakeholder Coordination"],
    fullDescription:
      "Our project management services ensure successful project delivery through comprehensive planning, coordination, and oversight. We manage all aspects of construction projects from initial planning through final completion, ensuring quality, schedule, and budget objectives are met while maintaining clear communication with all stakeholders.",
    benefits: [
      "Comprehensive project planning and scheduling",
      "Proactive risk management and problem-solving",
      "Clear communication and regular progress updates",
      "Quality assurance and control processes",
      "Budget management and cost control",
      "Stakeholder coordination and management",
    ],
    process: [
      "Project initiation and planning",
      "Resource allocation and scheduling",
      "Progress monitoring and reporting",
      "Quality control and assurance",
      "Risk management and issue resolution",
      "Project closure and evaluation",
    ],
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const serviceId = Number.parseInt(params.id as string)
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => router.push("/our-services")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </div>
      </div>
    )
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => router.push("/our-services")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
          <div className="flex items-center">
            <div className="p-3 bg-accent/10 rounded-full mr-4">
              <IconComponent className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{service.title}</h1>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <span>{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Features */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Service Includes</h3>
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact us today to discuss your project requirements and get a personalized quote.
              </p>
              <Button className="w-full" onClick={() => router.push("/contact-us")}>
                Get a Quote
              </Button>
            </div>

            {/* Contact Info */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Need More Information?</h3>
              <div className="space-y-2 text-sm">
                <p>📞 +88 01716-475689</p>
                <p>✉️ shebaengineering2021@gmail.com</p>
                <p>📍 C/52, Soronika Residential Area, Savar, Dhaka-1340</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
