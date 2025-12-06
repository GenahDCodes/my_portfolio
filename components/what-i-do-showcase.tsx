"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Item = {
  title: string
  desc: string
  image?: string
}

export default function WhatIDoShowcase({ items }: { items: Item[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.2 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={rootRef}
        className="py-12  bg-white from-primary/10 via-primary-light/6 to-accent-yellow/6"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto bg-gradient-to-br rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left content */}
            <div className="md:col-span-7 p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-2 tracking-tight">What I Do</h2>
              <p className="text-neutral-600 mb-8 max-w-xl">Design and ship user-centered products, lead discovery and strategy, and build communities that connect talent to opportunity.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.slice(0, 4).map((it, idx) => (
                  <div
                    key={it.title}
                    className={`flex gap-4 items-start transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary-dark w-10 flex-shrink-0">{idx + 1}.</div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark">{it.title}</h3>
                      <p className="text-sm text-neutral-600">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image mosaic */}
            <div className="md:col-span-5 bg-neutral-50 p-6 md:p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {items.slice(0, 4).map((it, i) => (
                  <figure
                    key={i}
                    className={`rounded-lg overflow-hidden shadow-sm transform transition-transform duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-4'}`}
                    style={{ transitionDelay: `${i * 90 + 200}ms` }}
                  >
                    {it.image ? (
                      // small, fast images as decorative mosaic; using img to avoid Next/Image layout complications here
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={it.image}
                        alt={it.title}
                        className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-36 bg-neutral-200" />
                    )}
                    <figcaption className="sr-only">{it.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
