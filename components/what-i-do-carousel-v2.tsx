"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Item = {
  title: string
  href: string
  desc: string
  image?: string
}

export default function WhatIDoCarouselV2({ items }: { items: Item[] }) {
  const total = items.length
  // create a 3x buffer for seamless looping
  const slides = [...items, ...items, ...items]

  const [index, setIndex] = useState(total) // start at middle copy
  const [playing] = useState(true)
  const [inView, setInView] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setInView(entry.isIntersecting)),
      { threshold: 0.25 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !inView) return
    timerRef.current = window.setInterval(() => setIndex((i) => i + 1), 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [playing, inView])

  const prev = () => setIndex((i) => i - 1)
  const next = () => setIndex((i) => i + 1)

  // when transition ends, if we've moved into clones, jump back to middle set without animation
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onTransitionEnd = () => {
      if (index >= total * 2) {
        // jumped past right buffer -> reset to middle copy
        setTransitionEnabled(false)
        setIndex((idx) => idx - total)
      } else if (index < total) {
        // jumped past left buffer -> reset into middle copy
        setTransitionEnabled(false)
        setIndex((idx) => idx + total)
      }
    }
    track.addEventListener("transitionend", onTransitionEnd)
    return () => track.removeEventListener("transitionend", onTransitionEnd)
  }, [index, total])

  // re-enable transition after programmatic jump
  useEffect(() => {
    if (!transitionEnabled) {
      // next microtask re-enable
      const t = setTimeout(() => setTransitionEnabled(true), 20)
      return () => clearTimeout(t)
    }
  }, [transitionEnabled])

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
            <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-white/8 hover:bg-white/12">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-white/8 hover:bg-white/12">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-3xl" />

          <div ref={trackRef} className={`flex will-change-transform ${transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((it, i) => (
              <div key={`${it.title}-${i}`} className="flex-shrink-0 w-full px-2 md:px-4" aria-hidden={i !== index}>
                <article className={`relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl transform transition-all duration-500 ${i === index ? "scale-100" : "scale-95 opacity-70"} group`} style={{ perspective: 1200 }}>
                  <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: `linear-gradient(180deg, rgba(4,6,23,0.35), rgba(4,6,23,0.45)), url('${it.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e3f6a6a0f8f0f2e"}')`,
                    filter: i === index ? "none" : "grayscale(30%) brightness(0.85)",
                  }} />

                  <div className="relative p-6 md:p-10">
                    <div className="rounded-xl p-6 md:p-8 shadow-xl transform transition-all duration-400 group-hover:scale-102" style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{it.title}</h3>
                      <p className="text-sm md:text-base text-white/90 mb-4">{it.desc}</p>
                      <a href={it.href} className="inline-block text-sm font-medium text-primary bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full">Learn more</a>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-primary/30 to-accent-yellow/20 blur-3xl opacity-80" />
                </article>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6 z-10 relative">
            {items.map((_, i) => {
              const logical = ((index % total) + total) % total
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${logical === i ? "bg-primary scale-110" : "bg-white/40"}`}
                  onClick={() => setIndex(total + i)}
                />
              )
            })}
          </div>

          <span className="sr-only" aria-live="polite">Slide {index + 1} of {items.length}</span>
        </div>
      </div>
    </section>
  )
}
