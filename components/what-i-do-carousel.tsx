"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Item = {
  title: string
  href: string
  desc: string
  image?: string
}

export default function WhatIDoCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0)
  const [playing] = useState(true)
  const [inView, setInView] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting))
      },
      { threshold: 0.25 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !inView) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [playing, inView, items.length])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      className="py-12"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(6,8,20,0.55), rgba(6,8,20,0.6)), url('https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c6a1b5d3b8f9a6a')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-yellow mb-1">
              What I Do
            </h2>
            <p className="text-sm text-muted-foreground">Design & build modern web products, lead discovery, and grow communities.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-2 rounded-full bg-white/8 hover:bg-white/12"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="p-2 rounded-full bg-white/8 hover:bg-white/12"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-3xl" />

          {/* sliding track */}
          <div
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it, i) => (
              <div key={it.title} className="flex-shrink-0 w-full px-2 md:px-4" aria-hidden={i !== index}>
                <article
                  className={`relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl transform transition-all duration-500 ${
                    i === index ? "scale-100" : "scale-95 opacity-70"
                  } group`}
                  style={{ perspective: 1200 }}
                >
                  {/* Background visual layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(4,6,23,0.35), rgba(4,6,23,0.45)), url('${
                        it.image ||
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e3f6a6a0f8f0f2e"
                      }')`,
                      filter: i === index ? "none" : "grayscale(30%) brightness(0.85)",
                      transform: i === index ? "scale(1)" : "scale(1.02)",
                    }}
                  />

                  {/* Glass card */}
                  <div className="relative p-6 md:p-10">
                    <div
                      className="rounded-xl p-6 md:p-8 shadow-xl transform transition-all duration-400 group-hover:scale-102"
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{it.title}</h3>
                      <p className="text-sm md:text-base text-white/90 mb-4">{it.desc}</p>
                      <a href={it.href} className="inline-block text-sm font-medium text-primary bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full">
                        Learn more
                      </a>
                    </div>
                  </div>

                  {/* decorative glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-primary/30 to-accent-yellow/20 blur-3xl opacity-80" />
                </article>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-6 z-10 relative">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-primary scale-110" : "bg-white/40"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <span className="sr-only" aria-live="polite">
            Slide {index + 1} of {items.length}
          </span>
        </div>
      </div>
    </section>
  )
}
"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Item = {
  title: string
  href: string
  desc: string
  image?: string
}

export default function WhatIDoCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0)
  const [playing] = useState(true)
  const [inView, setInView] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting))
      },
      { threshold: 0.25 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !inView) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [playing, inView, items.length])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-yellow mb-1">What I Do</h2>
            <p className="text-sm text-muted-foreground">Design & build modern web products, lead discovery, and grow communities.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-2 rounded-full bg-white/8 hover:bg-white/12"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="p-2 rounded-full bg-white/8 hover:bg-white/12"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl" style={{
          backgroundImage: `linear-gradient(180deg, rgba(6,8,20,0.55), rgba(6,8,20,0.6)), url('https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c6a1b5d3b8f9a6a')`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${50 - index * 3}%`,
        }}>
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          {/* sliding track */}
          <div
            className={`flex transition-transform duration-700 ease-in-out will-change-transform`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it, i) => (
              <div
                key={it.title}
                className="flex-shrink-0 w-full px-2 md:px-4"
                aria-hidden={i !== index}
              >
                <article
                  className={`relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl transform transition-all duration-500 ${
                    i === index ? "scale-100" : "scale-95 opacity-70"
                  } group`} 
                  style={{
                    perspective: 1200,
                  }}
                >
                  {/* Background visual layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(4,6,23,0.35), rgba(4,6,23,0.45)), url('${
it.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e3f6a6a0f8f0f2e"} ')`,
                      filter: i === index ? "none" : "grayscale(30%) brightness(0.85)",
                    }}
                  />

                  {/* Glass card */}
                  <div className="relative p-8 md:p-12">
                    <div
                      className="backdrop-blur-md bg-white/6 border border-white/8 rounded-xl p-6 md:p-8 shadow-xl hover:scale-102 transition-transform duration-400"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{it.title}</h3>
                      <p className="text-sm md:text-base text-white/90 mb-4">{it.desc}</p>
                      <a
                        href={it.href}
                        className="inline-block text-sm font-medium text-primary bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  {/* decorative glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-primary/30 to-accent-yellow/20 blur-3xl opacity-80" />
                </article>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-6">
            {items.map((_, i) => (
                  <div className="relative p-6 md:p-10">
                    <div
                      className="backdrop-blur-md bg-white/6/30 border border-white/6 rounded-xl p-6 md:p-8 shadow-xl transform transition-all duration-400 group-hover:scale-102"
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        backgroundColor: 'rgba(255,255,255,0.04)'
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{it.title}</h3>
                      <p className="text-sm md:text-base text-white/90 mb-4">{it.desc}</p>
                      <a
                        href={it.href}
                        className="inline-block text-sm font-medium text-primary bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
