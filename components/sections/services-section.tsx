"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Bold as Road, Factory, Wrench, Users, ArrowRight } from "lucide-react"

const services = [
  {
    id: 0,
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Complete commercial building solutions from office complexes to retail spaces with modern design and functionality.",
    features: ["Office Buildings", "Retail Centers", "Warehouses", "Mixed-Use Developments"],
  },
  {
    id: 1,
    icon: Home,
    title: "Residential Building",
    description:
      "Quality residential construction services for single-family homes, apartments, and luxury developments.",
    features: ["Custom Homes", "Apartment Complexes", "Townhouses", "Luxury Estates"],
  },
  {
    id: 2,
    icon: Road,
    title: "Infrastructure Development",
    description:
      "Large-scale infrastructure projects including roads, bridges, and public utilities with engineering excellence.",
    features: ["Highway Construction", "Bridge Building", "Utility Systems", "Public Works"],
  },
  {
    id: 3,
    icon: Factory,
    title: "Industrial Construction",
    description:
      "Specialized industrial facilities designed for manufacturing, processing, and distribution operations.",
    features: ["Manufacturing Plants", "Distribution Centers", "Processing Facilities", "Industrial Parks"],
  },
  {
    id: 4,
    icon: Wrench,
    title: "Engineering Consulting",
    description:
      "Expert engineering consultation services for project planning, design optimization, and technical solutions.",
    features: ["Structural Engineering", "Project Planning", "Design Review", "Technical Analysis"],
  },
  {
    id: 5,
    icon: Users,
    title: "Project Management",
    description:
      "Comprehensive project management services ensuring timely delivery and quality control throughout construction.",
    features: ["Timeline Management", "Quality Control", "Budget Oversight", "Stakeholder Coordination"],
  },
]

export default function ServicesSection() {
  const router = useRouter()

  const handleLearnMore = (serviceId: number) => {
    router.push(`/our-services/${serviceId}`)
  }

  const handleViewAllServices = () => {
    router.push("/our-services")
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We offer comprehensive construction and engineering services tailored to meet the unique needs of each
            project, ensuring quality and excellence in every aspect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-orange-500/10 rounded-full w-fit group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-balance">{service.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group/btn border-2 hover:bg-orange-500" onClick={() => handleLearnMore(service.id)}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500-400 hover:bg-orange-500/90" onClick={handleViewAllServices}>
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
