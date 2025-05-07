import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileImage, Cpu, Zap, Video } from "lucide-react"

export const services = [
  {
    title: "⚡ Lightning Launch Site",
    description: "Get your online presence up and running quickly with a professional website",
    icon: <Globe className="h-8 w-8 text-primary" />,
    deliverables: [
      "Up to 5 pages (Home, About, Services, Contact, Blog)",
      "Fully responsive design",
      "Basic SEO setup (meta tags + sitemap)",
      "Deployment on GitHub Pages / Netlify / Vercel",
    ],
    price: "$300",
    image: "/placeholder.svg?height=200&width=300",
    slug: "lightning-launch-site",
  },
  {
    title: "🎨 Brand-Boost Flyer",
    description: "Professional marketing materials to promote your business",
    icon: <FileImage className="h-8 w-8 text-primary" />,
    deliverables: [
      "Custom A4/A5 flyer (print-ready PDF + PNG)",
      "Two rounds of revisions",
      "Source file (Figma / Illustrator)",
    ],
    price: "$50",
    image: "/placeholder.svg?height=200&width=300",
    slug: "brand-boost-flyer",
  },
  {
    title: "🔌 Arduino Kick-Start Workshop",
    description: "Hands-on learning experience for beginners in electronics",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    deliverables: [
      "2-hour hands-on session (in-person or Zoom)",
      "Assemble & program a sensor-actuator demo",
      "PDF Quick-Start Guide",
    ],
    price: "Group: $20/student (min. 5)\nPrivate: $50/hour",
    image: "/placeholder.svg?height=200&width=300",
    slug: "arduino-workshop",
  },
  {
    title: "⚡ Rapid Product Sprint",
    description: "Accelerate your product development with a focused sprint",
    icon: <Zap className="h-8 w-8 text-primary" />,
    deliverables: [
      "2-day sprint (remote/in-person)",
      "Pre-sprint research (personas, market scan)",
      "Prioritized feature roadmap & wireframes",
      "Post-sprint report with next steps",
    ],
    price: "$500",
    image: "/placeholder.svg?height=200&width=300",
    slug: "product-sprint",
  },
  {
    title: "🎤 Engage & Educate Webinar",
    description: "Professional webinar setup and hosting for your audience",
    icon: <Video className="h-8 w-8 text-primary" />,
    deliverables: [
      "Full webinar setup (slides, registration page)",
      "Live hosting + Q&A facilitation",
      "Recording & follow-up email template",
    ],
    price: "$100/webinar",
    image: "/placeholder.svg?height=200&width=300",
    slug: "webinar",
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="section-heading">Services</h2>
      <p className="section-subheading">
        Tailored solutions to help you establish your online presence and grow your technical skills.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full border border-neutral-300 card-hover">
            <CardHeader>
              <div className="flex justify-center mb-4 icon-container">{service.icon}</div>
              <CardTitle className="text-xl text-center text-primary-dark">{service.title}</CardTitle>
              <CardDescription className="text-center text-neutral-700">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`Example of ${service.title}`}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <h4 className="font-medium mb-2 text-primary-dark">What You Get:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="text-neutral-700">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="font-bold text-lg">
                Price: <span className="text-primary whitespace-pre-line">{service.price}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/contact?service=${service.slug}`} className="w-full">
                <Button className="w-full btn-primary">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
