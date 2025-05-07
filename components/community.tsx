import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Video } from "lucide-react"

const communityItems = [
  {
    title: "Arduino Training",
    description: "Conducted workshops for over 50 students, teaching the basics of Arduino programming and electronics",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
  {
    title: "WhatsApp Community",
    description: "Manage a community of 200+ tech enthusiasts, sharing resources and answering questions",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Educational Webinars",
    description: "Hosted monthly webinars on topics ranging from web development to IoT integration",
    icon: <Video className="h-10 w-10 text-primary" />,
  },
]

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="section-heading">Community Involvement</h2>
      <p className="section-subheading">
        I'm passionate about sharing knowledge and building communities around technology and innovation.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {communityItems.map((item, index) => (
          <Card
            key={index}
            className="border border-neutral-300 shadow-md hover:shadow-lg transition-shadow card-hover"
          >
            <CardHeader className="flex flex-col items-center pt-6">
              <div className="mb-4 icon-container">{item.icon}</div>
              <CardTitle className="text-xl text-center text-primary-dark">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-neutral-700">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
