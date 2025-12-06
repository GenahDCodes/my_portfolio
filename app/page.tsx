import React from "react"
import Link from "next/link"
import Hero from "@/components/hero"
import TestimonialCarousel from "@/components/testimonial"
import Footer from "@/components/footer"
import WhatIDoShowcase from "@/components/what-i-do-showcase"
import AboutSnapshot from "@/components/about-snapshot"
import FeaturedProjects from "@/components/featured-projects"
import CommunityCTA from "@/components/community-cta"

import Image from "next/image"

export default function Home() {
  const featured = [
    { title: "Yak Computers Website", slug: "yak-computers", role: "Lead Frontend", desc: "E-commerce frontend built with React; routing and async data flows." },
    { title: "Grading System App", slug: "grading-system", role: "Fullstack/Frontend", desc: "Teacher-focused grading and reporting system built with React." },
    { title: "Intelex & Connect", slug: "intelex", role: "Product Manager", desc: "Product discovery and GTM for enterprise features." },
  ]

  const whatIDo = [
    { title: "Product Management & Strategy", href: "/portfolio", desc: "I manage products from ideas to launch, turning concepts into real solutions." },
    { title: "Web & App Development", href: "/portfolio", desc: "I build responsive websites and web apps with polished UI/UX that users love." },
    { title: "STEM Training & Workshops", href: "/portfolio", desc: "I create Arduino and embedded projects and teach students practical STEM skills." },
    { title: "Digital Media & Community Leadership", href: "/portfolio", desc: "I design visual content, manage social platforms, and lead communities and events that make an impact." },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />

        <AboutSnapshot />

        <WhatIDoShowcase
          items={whatIDo.map((w, i) => ({
            title: w.title,
            desc: w.desc,
            image: [
              // 0 -> Product Management & Strategy
              "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747761640/WhatsApp_Image_2025-05-13_at_06.52.14_9508a1be_rdmxj9.jpg",
              // 1 -> Web & App Development
              "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747752713/Community_Logo_1_l83akb.png",
              // 2 -> STEM Training & Workshops
              "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652197/IMG_7935_bc6lsr.jpg",
              // 3 -> Digital Media & Community Leadership
              "https://res.cloudinary.com/dfxjwtw86/image/upload/v1763932778/Purple_and_Black_Elegant_Business_Pitch_Deck_Presentation_Laptop_Mockup_Instagram_Post_izfcen.png",
            ][i],
          }))}
        />

        {/* 4. Featured Work */}
        <FeaturedProjects
          projects={[
            {
              title: "Intelex",
              slug: "intelex",
              role: "Product Manager",
              desc: "Product discovery and feature delivery for an enterprise collaboration product.",
              image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764964607/17f5fd41-3c04-4f77-98d3-8395fa43f386.png",
            },
            {
              title: "CEF 2025",
              slug: "cef",
              role: "Social Media Manager",
              desc: "Social media manager and core team member for the CEF 2025",
              image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764970220/BAVP1100_lpvmmm.jpg",
            },
            {
              title: "My Portfolio Website",
              slug: "portfolio",
              role: "Developer",
              desc: "Personal portfolio website showcasing projects and skills.",
              image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747346337/f7f03bdd-330f-4925-a80c-a11bdfe4f998.png",
            },
            {
              title: "Brochure Designs",
              slug: "brochure-design",
              role: "Designer",
              desc: "Brochures designed by me.",
              image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1764973422/db6ee5fe-3787-4026-a6c9-b584c0c5bb61.png",
            },
          ]}
        />

        {/* 5. Experience & Impact — refined layout inspired by design */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl bg-gradient-to-br from-primary/20 via-primary-light/30 to-accent-yellow/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-dark mb-8">Measuring Success and Improving User Engagement</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-primary">480+</div>
                  <div className="text-sm text-neutral-700 mt-1">Community Members</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-accent-yellow">1,000+</div>
                  <div className="text-sm text-neutral-700 mt-1">Opportunities Shared</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-primary">4</div>
                  <div className="text-sm text-neutral-700 mt-1">Webinars Held</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-primary-dark">60%</div>
                  <div className="text-sm text-neutral-700 mt-1">Digital Access Project Progress</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-primary">Multiple</div>
                  <div className="text-sm text-neutral-700 mt-1">Platforms Developed</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold text-primary">6+</div>
                  <div className="text-sm text-neutral-700 mt-1">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Organizations marquee (replaces Skills & Expertise) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6 text-center">Organizations I’ve Worked With</h2>

            {/* horizontal marquee below — vertical version removed */}
              <div className="mx-auto max-w-4xl bg-white/30 rounded-2xl p-6 flex items-center justify-center">
                <div className="w-full overflow-hidden h-24">
                  {/* horizontal marquee wrapper */}
                  <div className="marquee-row flex items-center space-x-8" style={{willChange: 'transform'}}>
                    {/* logos (set repeated to enable seamless loop) */}
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685256/photo_2025-12-02_14-20-32_aqujme.jpg" alt="Yak Computers" className="h-12 object-contain" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685451/3519108_th1_afh5xq.jpg" alt="Grading System" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1745454994/iot_network_hub_logo_zge0zv.jpg" alt="Intelex" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685590/images_xewoh8.png" alt="Pyramid Plugin" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685723/czjno8Ah_400x400_pslgxl.jpg" alt="Partner B" className="h-12 object-contain opacity-80" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685852/images_1_cyghyx.jpg" alt="Yak Computers" className="h-12 object-contain" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764685954/CEF_Theme_Logo_uxognw.png" alt="Grading System" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764686022/download_4_bs9rhm.jpg" alt="Intelex" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764686100/images_2_a19a83.jpg" alt="Pyramid Plugin" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1764686152/download_6_mxbzpb.jpg" alt="Partner A" className="h-12 object-contain opacity-80" />

                    {/* repeated for seamless scroll */}
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1747752713/Community_Logo_1_l83akb.png" alt="Yak Computers" className="h-12 object-contain" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746619610/_YAZ3284_fzokug.jpg" alt="Grading System" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652197/IMG_7935_bc6lsr.jpg" alt="Intelex" className="h-12 object-contain rounded" />
                    <img src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1763932778/Purple_and_Black_Elegant_Business_Pitch_Deck_Presentation_Laptop_Mockup_Instagram_Post_izfcen.png" alt="Pyramid Plugin" className="h-12 object-contain rounded" />
                    <img src="/logo-placeholder.png" alt="Partner A" className="h-12 object-contain opacity-80" />
                    <img src="/logo-placeholder.png" alt="Partner B" className="h-12 object-contain opacity-80" />
                  </div>
                </div>
              </div>

              {/* inline styles for marquee animation and reduced-motion handling */}
              <style>{`
                @keyframes marquee-horizontal {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-row {
                  display: flex;
                  gap: 2rem;
                  align-items: center;
                  animation: marquee-horizontal 18s linear infinite;
                  will-change: transform;
                }
                .marquee-row img {
                  height: 48px;
                  width: auto;
                }
                @media (prefers-reduced-motion: reduce) {
                  .marquee-row { animation: none; }
                }
              `}</style>
          </div>
        </section>

        {/* 7. Testimonials / Social Proof */}
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Testimonials & Partners</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* 8. Current Focus */}
        {/* <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Current Focus</h2>
            <p className="text-neutral-700 mb-4">Building product experiences and community pipelines — currently focused on Intelex (product discovery) and scaling 3C Opportunity Hub.</p>
            <div className="flex gap-4">
              <Link href="/portfolio/intelex" className="inline-block bg-white border px-4 py-2 rounded-lg">Intelex — case study</Link>
              <Link href="/community" className="inline-block bg-primary text-white px-4 py-2 rounded-lg">3C Opportunity Hub</Link>
            </div>
          </div>
        </section> */}

        {/* 9. CTA */}
        {/* <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">Let’s build something together</h2>
            <p className="text-neutral-700 mb-6">If you have a product, idea or community program, I’ll help you design it and ship it.</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="inline-block bg-primary text-white py-3 px-6 rounded-full">Hire Me</Link>
              <Link href="/contact" className="inline-block border border-primary text-primary py-3 px-6 rounded-full">Contact Me</Link>
            </div>
          </div>
        </section> */}

        <CommunityCTA />

        {/* 10. Footer */}
      </main>
    </div>
  )
}
