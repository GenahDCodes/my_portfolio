"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, ExternalLink, Heart, Award, MessageSquare, Megaphone } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import HeroSection from "@/components/community-hero"
import CommunityOutreach from "@/components/community-outreach"
import CommunityCTA from "@/components/community-cta"


const webinars = [
  
  {
    title: "Triple Play: School, Work, Life",
    date: "May 2025",
    image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747761640/WhatsApp_Image_2025-05-13_at_06.52.14_9508a1be_rdmxj9.jpg",
    description: "Exploring different career options in the tech industry",
  },
  {
    title: "Self-Discovery Workshop",
    date: "January 2025",
    image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747761475/3C_COMMUNITY_WEBINAR_4_jbgsmb.png",
    description: "Interactive session on finding your purpose and passion",
  },
  
]

const outreachPhotos = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Distributing supplies at United Ummah Foundation orphanage",
    caption: "Distributing educational supplies",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Group photo with children at the orphanage",
    caption: "Group photo with the children",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Interactive learning session with the children",
    caption: "Interactive learning session",
  },
]

const volunteeringHighlights = [
  {
    organization: "Creative Entrepreneurs Forum",
    role: "Orrganizing Committee Member",
    description: "Organized a forum to connect young entrepreneurs with industry leaders",
    achievements: [
      "Connected with 50+ entrepreneurs and industry leaders",
      "Assited in setting up the event space and logistics",
      "Ushered guests and ensured smooth event flow",
    ],
    image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746651821/IMG_0511_bbepvo.jpg",
  },
  {
    organization: "Future of Work 2.0",
    role: "Volunteer Usher",
    description: "Assisted the publicity team and the ushering team in organizing the event",
    achievements: [
      "Honed team-building and leadership skills",
      "Assisted in outreach to audience of 100+ participants",
      "Connected with industry leaders and innovators",
    ],
    image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751779/5X7A9514_zl53nc.jpg",
  },
]

const galleryImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Community workshop session",
    caption: "Arduino workshop for beginners",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Group discussion during webinar",
    caption: "Group discussion on tech ethics",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Networking event",
    caption: "Tech networking mixer",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Panel discussion",
    caption: "Panel on emerging technologies",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Community outreach",
    caption: "Teaching basic computer skills",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Award ceremony",
    caption: "Recognition for community service",
  },
]

export default function CommunityPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Call to Action */}
      {/* <section className="relative py-20 dark-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect. Collaborate. Change the World.</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building impact-driven communities for learning, growth, and purpose.
          </p>
        </div>
      </section> */}

      {/* 3C Community Overview */}
      <section className="py-16 bg-primary-dark border-b border-neutral-300 px-9 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-accent-yellow ">3C Community</h2>
              <p className="text-lg text-white mb-6">
                I founded and manage the 3C (Connect✨, Collaborate💯, Change the world🌍) WhatsApp community, a vibrant space where
                over 400 STEM enthusiasts, students, and professionals come together to share knowledge and
                opportunities.
              </p>
              <p className="text-lg text-white mb-6">
                Through this platform, I regularly share job opportunities, host interactive webinars, and provide
                resources for personal and professional development. The community has become a valuable network for
                many members who have found mentorship, job opportunities, and collaborators for their projects.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-accent-yellow">
                  <Users className="mr-2 h-5 w-5" />
                  <span className="font-medium">400+ Members</span>
                </div>
                <div className="flex items-center text-accent-yellow">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span className="font-medium">Occasional Webinars</span>
                </div>
                <div className="flex items-center text-accent-yellow">
                  <Megaphone className="mr-2 h-5 w-5" />
                  <span className="font-medium">Job Updates</span>
                </div>
              </div>
              <a href="https://chat.whatsapp.com/DpYO3gMQm4s4vv2MLcrckC" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent-yellow hover:bg-primary">
                Join the Community <ExternalLink className="ml-2 h-4 w-4 " />
              </Button>
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-full overflow-hidden shadow-lg border-4 border-white relative">
                <div className="absolute inset-0   z-10"></div>
                <Image
                  src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1747752713/Community_Logo_1_l83akb.png"
                  alt="3C WhatsApp Community Screenshot"
                  width={400}
                  height={600}
                  className=" w-90 h-auto object-cover z-20 rounded-full"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary-light rounded-full opacity-20"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-accent-yellow rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="py-16 bg-gradient-to-t from-primary-light to-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-primary-dark text-center">Webinars & Events</h2>
          <p className="text-lg text-white mb-12 text-center max-w-3xl mx-auto">
            I regularly host webinars and events on various topics to help community members develop new skills and
            expand their knowledge.
          </p>

          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-6  mb-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="overflow-hidden border border-neutral-300 card-hover bg-primary-dark shadow-lg">
                <div className="relative h-64">
                  <Image src={webinar.image || "/placeholder.svg"} alt={webinar.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <Badge className="bg-accent-yellow border-0 text-primary-dark">{webinar.date}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-white/60">{webinar.title}</h3>
                  <p className="text-white">{webinar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-10">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Events
            </Button>
          </div> */}
        </div>
      </section>

      {/* Community Outreach */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark text-center">Community Outreach</h2>
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
            In collaboration with United Ummah Foundation, we organized a visit to a local orphanage to donate
            educational supplies and spend quality time with the children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {outreachPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(photo.src)}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-light/10 rounded-lg p-6 border border-primary-light/30 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary-dark flex items-center">
              <Heart className="mr-2 h-5 w-5 text-primary" /> Impact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-neutral-700">
                  Donated educational supplies, books, and learning materials to 30+ children
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-neutral-700">
                  Conducted interactive learning sessions on basic computer skills and digital literacy
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-neutral-700">
                  Established an ongoing mentorship program with quarterly follow-up visits
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <CommunityOutreach />

      {/* Volunteering Highlights */}
      <section className="py-16 bg-gradient-to-t from-primary-light to-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark text-center">Volunteering Highlights</h2>
          <p className="text-lg text-white mb-12 text-center max-w-3xl mx-auto">
            I'm passionate about giving back to the community through volunteering and mentorship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {volunteeringHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-300 card-hover"
              >
                <div className="h-48 relative">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.organization}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark">{highlight.organization}</h3>
                      <p className="text-primary">{highlight.role}</p>
                    </div>
                    <Badge className="accent-gradient text-white border-0">Volunteer</Badge>
                  </div>
                  <p className="text-neutral-700 mb-4">{highlight.description}</p>
                  <div>
                    <h4 className="font-medium text-primary-dark flex items-center mb-2">
                      <Award className="mr-2 h-5 w-5 text-accent-orange" /> Achievements
                    </h4>
                    <ul className="space-y-1">
                      {highlight.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-neutral-700 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark text-center">Community Gallery</h2>
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
            Moments captured from various community events, workshops, and gatherings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-medium">View</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <p className="mt-2 text-neutral-700">{image.caption}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 accent-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to collaborate or invite me to speak at your event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities to share knowledge and make a positive impact in communities.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-neutral-100 rounded-full px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section> */}

      <CommunityCTA />

      {/* Footer */}

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
