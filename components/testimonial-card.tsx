import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialProps {
  testimonial: {
    name: string
    role: string
    content: string
    avatar: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card className="border border-neutral-300 rounded-xl overflow-hidden card-hover">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <Avatar className="h-10 w-10 mr-4 border-2 border-primary-light">
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
            <AvatarFallback className="bg-primary-light/20 text-primary">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-primary-dark">{testimonial.name}</h4>
            <p className="text-sm text-neutral-500">{testimonial.role}</p>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary-light/30 rotate-180" />
          <p className="text-neutral-700 pl-5">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  )
}
