import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, AlertCircle, Megaphone } from "lucide-react"

const notices = [
  {
    id: 1,
    type: "announcement",
    title: "New Safety Protocols Implementation",
    date: "2024-01-15",
    content:
      "We are implementing enhanced safety protocols across all our construction sites effective immediately. All team members are required to attend the safety briefing sessions scheduled for next week.",
    priority: "high",
    category: "Safety",
  },
  {
    id: 2,
    type: "tender",
    title: "Highway Bridge Construction Project - Tender Notice",
    date: "2024-01-10",
    content:
      "BuildTech Engineering is pleased to announce the opening of tenders for the State Highway 101 Bridge Construction Project. Interested contractors and suppliers are invited to submit their proposals.",
    priority: "medium",
    category: "Tender",
  },
  {
    id: 3,
    type: "update",
    title: "Q4 2023 Project Completion Report",
    date: "2024-01-05",
    content:
      "We are proud to announce the successful completion of 15 major projects in Q4 2023, including the Metropolitan Office Complex and Riverside Residential Tower. Thank you to all team members for their dedication.",
    priority: "low",
    category: "Update",
  },
  {
    id: 4,
    type: "announcement",
    title: "New Equipment Acquisition",
    date: "2023-12-28",
    content:
      "BuildTech Engineering has acquired state-of-the-art construction equipment including new cranes and excavators to enhance our project capabilities and efficiency.",
    priority: "medium",
    category: "Equipment",
  },
  {
    id: 5,
    type: "tender",
    title: "Green Energy Plant Construction - Expression of Interest",
    date: "2023-12-20",
    content:
      "We are seeking expressions of interest from qualified contractors for the upcoming Green Energy Plant construction project. This is a significant infrastructure development opportunity.",
    priority: "high",
    category: "Tender",
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "announcement":
      return Megaphone
    case "tender":
      return FileText
    case "update":
      return AlertCircle
    default:
      return FileText
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

export default function NoticeBoardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Notice Board
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Stay updated with the latest announcements, tender notices, project updates, and important information
              from BuildTech Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {notices.map((notice) => {
              const IconComponent = getIcon(notice.type)
              return (
                <Card key={notice.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 rounded-full">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-balance">{notice.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{notice.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant={getPriorityColor(notice.priority) as any}>
                          {notice.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{notice.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{notice.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
