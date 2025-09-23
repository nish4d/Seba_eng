import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, Target, Rocket, Eye, Building2, Star } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "25+" },
  { icon: Award, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Team Members", value: "150+" },
  { icon: Target, label: "Client Satisfaction", value: "98%" },
]

const team = [
  {
    name: "Md. Abdul Karim",
    position: "Chairman",
    image: "/images/chairman.jpg",
    description: "Visionary leader driving company growth and innovation",
  },
  {
    name: "Engr. Md. Monnaf Hossain (Shakil)",
    position: "CEO & Founder",
    image: "/images/ceo-seba-eng.jpg",
    description: "25+ years in construction and engineering leadership",
  },
  {
    name: "Engr. Md. Shakil Islam",
    position: "Chief Engineer",
    image: "/images/Eng-shakil.jpg",
    description: "Structural engineering expert with international experience",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation placeholder */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-8 transform hover:scale-105 transition-all duration-300">
              <Building2 className="w-4 h-4 mr-2" />
              Excellence in Construction Since 1998
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              About 
              <span className="text-orange-500 block md:inline"> Sheba Engineering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we've been crafting exceptional construction solutions that shape communities and drive progress through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="mx-auto mb-6 p-4 bg-orange-500 rounded-xl w-fit shadow-lg group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600">
              Driving excellence through purpose and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="group cursor-pointer">
              <Card className="h-full p-8 border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    Our Mission
                  </h3>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To deliver exceptional construction and engineering services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Excellence in every project delivery</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Sustainable construction practices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Building lasting relationships</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Vision Card */}
            <div className="group cursor-pointer">
              <Card className="h-full p-8 border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    Our Vision
                  </h3>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To be the leading construction and engineering company recognized for innovation, sustainability, and excellence in every project we undertake.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Industry leadership in innovation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Contributing to stronger communities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Building for future generations</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Building2 className="w-5 h-5 mr-2" />
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-orange-600 text-sm font-semibold mb-6 shadow-sm">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise and commitment to excellence.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 max-w-sm bg-white border-0 shadow-lg">
                <div className="relative overflow-hidden group">
                  <img 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <Badge className="mb-3 bg-orange-500 hover:bg-orange-600 border-0 text-white">
                    {member.position}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <Footer></Footer>
    </main>
  )
}