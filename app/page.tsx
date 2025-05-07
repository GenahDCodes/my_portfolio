import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, CheckCircle, Award, Clock, Users, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/components/services"
import { blogPosts } from "@/components/blog"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import TestimonialCard from "@/components/testimonial-card"
import ToolsAndTechnologies from "@/components/toolsandtechnologies"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    content:
      "Working with this developer was a game-changer for my business. The website exceeded my expectations and has helped me attract new clients.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content:
      "The Arduino workshop was incredibly helpful. I learned so much in just a few hours and was able to implement what I learned right away.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "The product sprint helped us clarify our vision and create a roadmap that the whole team could get behind. Highly recommended!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

const benefits = [
  {
    title: "Professional Websites",
    description: "Get a responsive, SEO-optimized website that represents your brand",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Quick Turnaround",
    description: "Projects completed efficiently without sacrificing quality",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Hands-on Workshops",
    description: "Learn technical skills through interactive, practical sessions",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Ongoing Support",
    description: "Get help and guidance even after your project is complete",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
]

export default function Home() {
  // Featured services (show only 3)
  const featuredServices = services.slice(0, 3)
  // Latest blog posts (show only 2)
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section - Inspired by the e-learning design */}
          <div >
            <Hero />
          </div>
        

        {/* Partners/Tools Section */}
        <section className="py-10 bg-white border-b border-neutral-200">
          {/* <div className="container mx-auto px-4">
            <p className="text-center text-neutral-500 mb-6">Tools & Technologies I Work With</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-neutral-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div className="text-neutral-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
              </div>
              <div className="text-neutral-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="text-neutral-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div className="text-neutral-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
            </div>
          </div> */}
          <ToolsAndTechnologies />
        </section>

         {/* Certified Professional Section */}
    
    <section className="py-16 bg-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto border border-gray-100">
          {/* Left column - Content */}
          <div className="md:w-3/5 p-8 md:p-10">
            <h2 className="text-4xl font-bold text-primary mb-1">What I Do?</h2>
            {/* <p className="text-neutral-600 mb-6 inline-block border-b-2 border-primary pb-1">About Me</p> */}
            
            <p className="text-neutral-600 mb-8">
              With hands-on expertise in web development, product management, and Arduino programming, 
              I deliver real-world solutions tailored to your needs. Passionate about creating innovative 
              solutions that make a difference.
            </p>
            
            <div className="space-y-6 mb-8">
              {/* Education Section */}
              <div className="flex items-center">
             
                <div>
                  <p className="font-medium text-primary-dark">Fullstack Web Development</p>
                  <p className="text-neutral-600 text-sm">Building responsive, SEO-friendly sites and MVPs using React, Next.js, Node.js, and modern deployment workflows</p>
                </div>
              </div>
              
              {/* Experience Section */}
              <div className="flex items-center">
                
                <div>
                  <p className="font-medium text-primary-dark">Product Management</p>
                  <p className="text-neutral-600 text-sm">Applying agile methodologies and rapid-fire sprints to research, plan, and prototype products that align with your goals.</p>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="flex items-center">
                <div>
                  <p className="font-medium text-primary-dark">Arduino & Embedded Systems</p>
                  <p className="text-neutral-600 text-sm">Guiding hands-on workshops that teach you how to assemble, program, and deploy sensor-actuator projects from scratch.</p>
                </div>
              </div>
            </div>
            
            <Link href="/contact" className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-primary-dark transition-colors shadow-md">
              Contact Me Today
            </Link>
          </div>

          {/* Right column - Photo with decorative elements */}
          <div className="md:w-2/5 relative bg-gradient-to-br from-primary-light/20 to-primary-light/5">
            <div className="h-full flex items-center justify-center p-6">
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746619610/_YAZ3284_fzokug.jpg"
                    alt="Professional portrait"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Skills badges */}
                <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                  <p className="text-primary font-medium text-sm">Web Development</p>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                  <p className="text-primary font-medium text-sm">Arduino Expert</p>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                  <p className="text-primary font-medium text-sm">Product Manager</p>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-yellow/20 rounded-full -translate-x-1/3 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>

         {/* Benefits Section */}
         <section className="py-16 bg-neutral-100">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Benefits of Working With Me</h2>
            <p className="section-subheading">Get professional results with a personalized approach</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 card-hover">
                  <div className="icon-container inline-flex mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-dark">{benefit.title}</h3>
                  <p className="text-neutral-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Services Section */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Find the Right Service</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  className="pl-10 py-6 rounded-full border-neutral-300 focus:border-primary focus:ring-primary"
                />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full btn-primary">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section> */}

       

        {/* Featured Services Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Featured Services</h2>
            <p className="section-subheading">
              Professional solutions tailored to help you grow your online presence and technical skills.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredServices.map((service, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full border border-neutral-300 rounded-xl overflow-hidden card-hover"
                >
                  <div className="h-48 bg-neutral-200 relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg?height=200&width=300"}
                      alt={`${service.title} preview`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 accent-gradient text-white text-sm font-medium py-1 px-3 rounded-full">
                      {service.price.split("\n")[0]}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="icon-container mr-3">{service.icon}</div>
                      <CardTitle className="text-xl text-primary-dark">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-700">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/services#${service.slug}`} className="w-full">
                      <Button className="w-full btn-primary">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section> */}

       

        {/* Latest Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">My Posts</h2>
            <p className="section-subheading">Insights and tutorials on technology, design, and product development.</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
              {latestPosts.map((post, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full border border-neutral-300 rounded-xl overflow-hidden card-hover bg-gray-900"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
                    <p className="text-sm text-neutral-500">{post.date}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-white/80 mb-4">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    {/* <Link href={`/blog/${post.slug}`} className="w-full"> */}
                    <Link href={post.bloglink} target="_blank" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Read Article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-neutral-100">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Client Testimonials</h2>
            <p className="section-subheading">Here's what people are saying about working with me</p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 accent-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. Contact me today to discuss your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-neutral-100 rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
