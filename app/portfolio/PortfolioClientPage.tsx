"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Figma, ArrowRight, CheckCircle } from "lucide-react"

// Web Development Projects
const webProjects = [
  {
    title: "E-Learning Platform",
    description: "A responsive platform for online courses with user authentication and progress tracking",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "https://example.com/project1",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time dashboard for monitoring and controlling IoT devices with data visualization",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React", "Chart.js", "Node.js", "MQTT"],
    link: "https://example.com/project2",
  },
  {
    title: "Community Forum",
    description: "Discussion platform with categories, user profiles, and moderation tools",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["Next.js", "MongoDB", "Express", "Socket.io"],
    link: "https://example.com/project3",
  },
]

// Product Management Case Studies
const productCases = [
  {
    title: "Product Sprint: Local Business App",
    description: "Led a 2-day product sprint to conceptualize and prototype a mobile app for local businesses",
    phases: [
      {
        name: "Research",
        items: [
          "Conducted user interviews with 12 small business owners",
          "Analyzed competitor apps and identified gaps",
          "Created user personas and journey maps",
        ],
      },
      {
        name: "Plan",
        items: [
          "Defined MVP features and prioritized backlog",
          "Created user stories and acceptance criteria",
          "Developed project timeline and resource allocation",
        ],
      },
      {
        name: "Prototype",
        items: [
          "Designed wireframes and interactive mockups",
          "Conducted usability testing with 5 potential users",
          "Iterated on design based on feedback",
        ],
      },
    ],
    outcomes: [
      "Delivered prototype within 48 hours",
      "Secured stakeholder approval for development",
      "Reduced estimated development time by 30%",
    ],
  },
]

// Graphic Design Projects
const designProjects = [
  {
    title: "Tech Conference Branding",
    description:
      "Complete brand identity for a local tech conference including logo, social media assets, and print materials",
    image: "/placeholder.svg?height=250&width=350",
    tools: ["Figma", "Illustrator"],
    type: "Brand Identity",
  },
  {
    title: "Startup Marketing Flyers",
    description: "Series of promotional flyers for a tech startup's product launch campaign",
    image: "/placeholder.svg?height=250&width=350",
    tools: ["Photoshop", "InDesign"],
    type: "Print Design",
  },
  {
    title: "Mobile App UI Kit",
    description: "Comprehensive UI component library for a health and wellness mobile application",
    image: "/placeholder.svg?height=250&width=350",
    tools: ["Figma", "Sketch"],
    type: "UI Design",
  },
]

export default function PortfolioClientPage() {
  const [activeTab, setActiveTab] = useState("web")
    const [email, setEmail] = useState('');
  

  return (
    <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
         


<section className="w-full py-16 px-9 rounded-lg overflow-hidden relative bg-black">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746619610/_YAZ3284_fzokug.jpg"
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg opacity-50"
    />
    {/* Overlay to improve text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  </div>
  
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Content with glass effect */}
    <div className="max-w-lg backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-xl p-8 border border-white border-opacity-20 shadow-lg">
      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        My Projects
      </h2>
      
      {/* Description text */}
      <p className="text-white text-opacity-90 mb-8">
        Showcasing my work across web development, product management, and graphic design. Each project represents my
        commitment to quality, innovation, and user-centered solutions.
      </p>

      {/* Call to action button */}
      <div>
        <Link href="/contact">
          <Button size="lg" className="bg-accent-yellow text-primary hover:bg-primary-dark rounded-full px-8">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  </div>
  
  {/* Floating decorative elements */}
  <div className="absolute top-1/4 left-1/4 h-12 w-12 bg-purple-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute top-1/6 right-1/4 h-10 w-10 bg-blue-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute bottom-1/3 left-1/4 h-14 w-14 bg-pink-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute top-2/3 right-1/4 h-16 w-16 bg-teal-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  
  {/* Wave line */}
  <div className="absolute bottom-1/4 w-full z-10">
    <svg className="w-full" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C80 5 120 35 200 20C280 5 320 35 400 20" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
    </svg>
  </div>
</section>


      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark text-center">My Portfolio</h1>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto text-center mb-12">
          Showcasing my work across web development, product management, and graphic design. Each project represents my
          commitment to quality, innovation, and user-centered solutions.
        </p>

        {/* Tabs Navigation */}
        <Tabs defaultValue="web" className="max-w-5xl mx-auto mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="web" className="text-base py-3">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="product" className="text-base py-3">
              Product Management
            </TabsTrigger>
            <TabsTrigger value="design" className="text-base py-3">
              Graphic Design
            </TabsTrigger>
          </TabsList>

          {/* Web Development Tab */}
          <TabsContent value="web">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">Web Development Projects</h2>
              <p className="text-neutral-700 mb-8">
                I build responsive, performant, and accessible web applications using modern frameworks and best
                practices. Here are some of my recent projects:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <Card key={index} className="flex flex-col h-full border border-neutral-300 card-hover">
                  <div className="h-48 bg-neutral-200 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-dark">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-primary-light/10 text-primary border-primary-light"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-neutral-700">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Product Management Tab */}
          <TabsContent value="product">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">Product Management</h2>
              <p className="text-neutral-700 mb-8">
                I apply agile methodologies and user-centered design principles to guide products from concept to
                launch. Here's a case study of my product management work:
              </p>
            </div>

            {productCases.map((caseStudy, index) => (
              <Card key={index} className="border border-neutral-300 card-hover mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-dark">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-lg text-neutral-700 mt-2">{caseStudy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {caseStudy.phases.map((phase, i) => (
                      <div key={i} className="bg-primary-light/10 p-6 rounded-lg border border-primary-light/30">
                        <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                          <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            {i + 1}
                          </span>
                          {phase.name}
                        </h3>
                        <ul className="space-y-2">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent-yellow/10 p-6 rounded-lg border border-accent-yellow/30">
                    <h3 className="text-xl font-semibold mb-4 text-primary-dark">Outcomes</h3>
                    <ul className="space-y-2">
                      {caseStudy.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="btn-primary">
                    Request Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {/* Graphic Design Tab */}
          <TabsContent value="design">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">Graphic Design</h2>
              <p className="text-neutral-700 mb-8">
                I create visually compelling designs that communicate brand values and engage target audiences. Here are
                some examples of my design work:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((project, index) => (
                <Card key={index} className="flex flex-col h-full border border-neutral-300 card-hover">
                  <div className="h-64 bg-neutral-200 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-primary-dark">{project.title}</CardTitle>
                      <Badge className="accent-gradient text-white border-0">{project.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-neutral-700 mb-4">{project.description}</CardDescription>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-neutral-500">Tools:</span>
                      <div className="flex space-x-2">
                        {project.tools.map((tool, i) => (
                          <Badge key={i} variant="outline" className="bg-white">
                            {tool === "Figma" ? (
                              <Figma className="h-3 w-3 mr-1" />
                            ) : tool === "Illustrator" ? (
                              <Code className="h-3 w-3 mr-1" />
                            ) : (
                              <Code className="h-3 w-3 mr-1" />
                            )}
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      View Full Design
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-xl primary-gradient text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-neutral-100 rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
