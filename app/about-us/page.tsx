import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, Target } from "lucide-react"

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "25+" },
  { icon: Award, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Team Members", value: "150+" },
  { icon: Target, label: "Client Satisfaction", value: "98%" },
]

const team = [
  {
    name: "Md. Monnaf Hossain (Shakil)",
    position: "CEO & Founder",
    image: "/images/team-1.jpg",
    description: "25+ years in construction and engineering leadership",
  },
  {
    name: "Sarah Chen",
    position: "Chief Engineer",
    image: "/images/team-2.jpg",
    description: "Structural engineering expert with international experience",
  },
  {
    name: "Michael Rodriguez",
    position: "Project Director",
    image: "/images/team-3.jpg",
    description: "Specializes in large-scale infrastructure projects",
  },
  
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              About BuildTech Engineering
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              For over 25 years, we've been at the forefront of construction and engineering excellence, delivering
              innovative solutions that shape communities and drive progress.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-balance">Our Mission</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                To deliver exceptional construction and engineering services that exceed client expectations while
                maintaining the highest standards of safety, quality, and environmental responsibility. We are committed
                to building lasting relationships and creating structures that stand the test of time.
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-balance">Our Vision</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                To be the leading construction and engineering company recognized for innovation, sustainability, and
                excellence in every project we undertake. We envision a future where our work contributes to stronger,
                more resilient communities and a better world for generations to come.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our experienced leadership team brings decades of expertise and a shared commitment to excellence in every
              project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-balance">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground text-pretty">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
