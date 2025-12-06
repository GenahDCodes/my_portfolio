"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Twitter, Facebook, Instagram } from "lucide-react"

export default function AboutSnapshot() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => setInView(e.isIntersecting))
    }, { threshold: 0.2 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left image */}
          <div className="md:col-span-6 lg:col-span-5 relative">
            <div className={`rounded-xl overflow-hidden shadow-xl border bg-white transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <Image
                src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1763934962/IMG-20251119-WA0073_2_wndcid.jpg"
                alt="Muhammed Aminu Umar"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-md">
              <div className="w-6 h-6 bg-primary rounded-full" />
            </div>
          </div>

          {/* Right text */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            {/* Large decorative background heading */}
            <h2 className="pointer-events-none absolute -top-8 right-0 text-7xl md:text-[7rem] font-extrabold text-[rgba(0,0,0,0.06)] tracking-tight select-none">ABOUT</h2>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">Gentle Genah</h3>
              <p className="text-neutral-700 mb-6">
                {/* I’m Muhammed Aminu Umar — a Frontend Developer, Product Manager, Digital Strategist and Community Builder. I design and ship user-focused web products and run community programs that connect learners to opportunities. */}
                I’m Muhammed Aminu Umar, a Computer Science student at the University of Ghana who loves building web products, embedded systems, and digital solutions that make a real impact. Over the years, I’ve gained hands-on experience with projects and internships at iSupreme, STEMAIDE, Afrikan STEM Force, Afrovivo, ThinkHub, and Aldin Cycle, where I worked on everything from product management to UI design and technical support. I enjoy turning ideas into tools and experiences that are both useful and user-friendly.
              </p>
              <p className="text-neutral-700 mb-6">
                {/* I’m passionate about building clear interfaces, measurable products, and sustainable communities. I focus on outcomes, measurable impact, and scalable systems. */}
                Beyond tech, I’m passionate about community and leadership. I’ve led and organized events like CEF, Jazz & Byte, and Future of Work, managed communities like 3C and CEF, and volunteered with organizations such as Better Dream Foundation. When I’m not building or managing projects, you’ll usually find me running with the Runner Alliance or taking part in initiatives that help people learn, grow, and create opportunities.
                </p>

              <div className="flex items-center gap-6 mt-6">
                <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                <a aria-label="Facebook" href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
                <a aria-label="Instagram" href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
              </div>

              <div className="mt-8">
                <a href="/about" className="inline-block bg-primary text-white py-3 px-6 rounded-full shadow">Read my full story</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
