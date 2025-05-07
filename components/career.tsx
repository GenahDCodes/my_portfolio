import { Briefcase, GraduationCap, Code, Award, Calendar } from "lucide-react"

const timelineItems = [
  {
    year: "2021 - Present",
    title: "Computer Science Student",
    description: "Third-year CS student focusing on web development and IoT",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    year: "2022",
    title: "Internship at Royal Priesthood",
    description: "Developed web applications and managed digital assets",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    year: "2023",
    title: "Internship at IoTnetworkhub",
    description: "Worked on IoT solutions and sensor integration projects",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    year: "2022 - 2023",
    title: "Arduino Workshop Facilitator",
    description: "Conducted hands-on workshops teaching Arduino programming",
    icon: <Code className="h-6 w-6" />,
  },
  {
    year: "2023",
    title: "Product Development Sprint",
    description: "Led a 2-day product development sprint for a local startup",
    icon: <Award className="h-6 w-6" />,
  },
]

export default function Career() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="section-heading">Career & Academic Journey</h2>
      <p className="section-subheading">
        My professional path and educational experiences that have shaped my skills and expertise.
      </p>

      <div className="max-w-4xl mx-auto">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative pl-16 pb-12 mb-6">
            {/* Timeline line */}
            {index < timelineItems.length - 1 && (
              <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-primary-light/30"></div>
            )}

            {/* Icon badge */}
            <div className="absolute left-0 top-0 bg-primary text-white rounded-full p-2.5">{item.icon}</div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-300 card-hover">
              <div className="flex items-center mb-2 text-sm text-neutral-500">
                <Calendar className="h-4 w-4 mr-2" />
                {item.year}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">{item.title}</h3>
              <p className="text-neutral-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
