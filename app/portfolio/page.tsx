import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Portfolio | Muhammed Aminu Umar",
  description: "Showcase of web development, product management, and community projects",
}

const projects = [
  {
    category: "Product Management & Strategy",
    items: [
      {
        title: "Intelex",
        role: "Product Manager",
        slug: "intelex",
        href: "https://intelex.isupremehq.com/",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764964607/17f5fd41-3c04-4f77-98d3-8395fa43f386.png",
        desc: "Product discovery and feature delivery for an enterprise collaboration product.",
      },
      {
        title: "Connect by iSupreme",
        role: "PM & UX",
        slug: "connect-isupreme",
        href: "https://connect.isupremehq.com/",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764964430/c2196ea0-ea30-4196-9fcb-6600339277cf.png",
        desc: "Platform onboarding and integration work to connect partners and users.",
      },
     
    ],
  },
  {
    category: "Web & App Development",
    items: [
      {
        title: "Thinkhub Website",
        role: "Tech Officer",
        slug: "thinkhub-website",
        href: "https://thinkhub.onrender.com/",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747345517/Screenshot_2025-03-31_173653_p8hrpy.png",
        desc: "Design and development of the Thinkhub community website for community training.",
      },
      {
        title: "My Portfolio Website",
        role: "Developer",
        slug: "cs-department",
        href: "https://my-portfolio-nu-seven-38.vercel.app/",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747346337/f7f03bdd-330f-4925-a80c-a11bdfe4f998.png",
        desc: "Personal portfolio website showcasing projects and skills.",
      },
      {
        title: "Eugene Moyan Portfolio",
        role: "Developer",
        slug: "grading-system",
        href: "/portfolio/grading-system",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747346261/548d9461-348a-4542-9d88-c21ab76b2d3b.png",
        desc: "Portfolio website for Eugene Moyan, a Tech leader and STEM trainer.",
      },
    ],
  },
  {
    category: "Event & Workshop",
    items: [
      {
        title: "CEF 2025",
        role: "Social Media & Content",
        slug: "techies4impact",
        href: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_this-year-marked-my-second-time-working-on-activity-7389561706450010113-ow5o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764970220/BAVP1100_lpvmmm.jpg",
        desc: "Social media manager and core team member for the CEF 2025 ",
      },
      {
        title: "Next Einstein Forum — Arduino Workshop",
        role: "Facilitator",
        slug: "nef-workshop",
        href: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_stemaide-iotnetworkhub-afrovivo-activity-7252990675653218304-5wDq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652197/IMG_7935_bc6lsr.jpg",
        desc: "Arduino training and hands-on STEM sessions at the Next Einstein Forum.",
      },
      {
        title: "Future Of Work",
        role: "Volunteer",
        slug: "cef-events",
        href: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_futureofwork-betechconnected-volunteeringjourney-activity-7386857675164401665-0b_J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751779/5X7A9514_zl53nc.jpg",
        desc: "I was part of the volunteer (usher and publicity) team supporting the Future of Work conference organized by CEF.",
      },
      {
        title: "CEF 2024",
        role: "Organising Team",
        slug: "cef-1-0",  
        href: "https://www.linkedin.com/posts/kwabena-adarkwa003_excited-to-share-a-recap-of-the-creative-ugcPost-7248959385136185344-cRi5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746651821/IMG_0511_bbepvo.jpg",
        desc: "Organizing team member for the inaugural edition of the Creative Entrepreneurs Forum.",
      },
      {
        title: "Webinar Series",
        role: "Organizer",
        slug: "jazz-and-byte",
        href: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_tripleplay-webinarhost-3ccommunity-activity-7330113314951172096-Lx2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747761475/3C_COMMUNITY_WEBINAR_4_jbgsmb.png",
        desc: "Organizer and host for personal development webinar series for 3C Community",
      },
      {
        title: "Jazz n Byte",
        role: "Organizing member",
        slug: "future-of-work",
        href: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_3ccommunity-activity-7392286929968607233-KbTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764972762/WhatsApp_Image_2025-12-05_at_22.12.18_cmrvx9.jpg",
        desc: "Event organizing team member for Jazz n Byte, a networking event connecting tech enthusiasts and professionals.",
      }
    ],
  },
  {
    category: "Graphic Design ",
    items: [
      {
        title: "Flyer & Social Media Designs ",
        role: "Designer",
        slug: "cef-campaign",
        href: "https://www.canva.com/design/DAG6lFdK4gA/i0FSTIueWx9jBSZIF1SBmw/edit?utm_content=DAG6lFdK4gA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764973466/DIGITAL_WORKSHOP_xcwvsw.png",
        desc: "Flyers and social media graphics created by me",
      },
      {
        title: "Brochure Designs",
        role: "Designer",
        slug: "nana-gmb-25",
        href: "https://www.canva.com/design/DAGa24RCHmE/0Qx7_8Q-F3-lMIHfqiORBg/edit?utm_content=DAGa24RCHmE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764973422/db6ee5fe-3787-4026-a6c9-b584c0c5bb61.png",
        desc: "Brochures designed by me.",
      },
      {
        title: "UI Designs",
        role: "Designer",
        slug: "design-portfolio",
        href: "https://www.figma.com/design/52kjkGYR1mmKJeFu4v5RrB/Regional-News-App--Community-?node-id=0-1&t=IXAbUIkSrNVFwrR4-1",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747352260/7e056911-f244-4bc6-bfb0-17244bfd4e3f.png",
        desc: "UI designs for web and mobile applications.",
      },
    ],
  },
  {
    category: "Community & Social Media Management",
    items: [
      {
        title: "3C Opportunity Hub",
        role: "Founder",
        slug: "3c-hub",
        href: "https://chat.whatsapp.com/DpYO3gMQm4s4vv2MLcrckC",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747752713/Community_Logo_1_l83akb.png",
        desc: "Community program connecting learners to internships and opportunities.",
      },
      {
        title: "CEF Community & Socials",
        role: "Community Manager",
        slug: "united-ummah",
        href: "https://chat.whatsapp.com/BwNNyAFkaQ1H7QRhAEx7z5",
        image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764974239/CEF_Theme_Logo_wznisp.png",
        desc: "Managing the CEF community and social media channels. Sharing updates, engaging members, and coordinating events.",
      },
      
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Portfolio & Case Studies</h1>
        <p className="text-neutral-700 mb-8">Selected work across web development, product management and community programs.</p>

        {projects.map((group, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{group.category}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((p) => {
                const cover = (p as any).image ?? "/logo-placeholder.png"
                const href = (p as any).href ?? `/portfolio/${p.slug}`

                return (
                  <Link
                    key={p.slug}
                    href={href}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-lg transition"
                  >
                    <div className="h-44 w-full relative">
                      {/* decorative cover image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cover} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-primary mb-1">{p.title}</h3>
                      <p className="text-sm text-neutral-700 mb-2">Role: {p.role}</p>
                      <p className="text-sm text-neutral-600 mb-4">{(p as any).desc ?? ""}</p>
                      <span className="text-primary font-medium">View work →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

