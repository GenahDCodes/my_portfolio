"use client"

import React from "react"
import Link from "next/link"

type Project = {
  title: string
  slug: string
  role?: string
  desc?: string
  image?: string
}

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-primary-dark">Featured Work & Case Studies</h2>
          <Link href="/portfolio" className="text-sm font-medium text-primary hover:underline">
            Browse all Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.slug} className="flex gap-6 p-6 rounded-lg bg-white shadow-md border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-28 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} className="w-full h-20 object-cover" />
                ) : (
                  <div className="w-full h-20 bg-neutral-200" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-1">{p.title}</h3>
                <p className="text-sm text-neutral-700 mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Role: {p.role || 'Contributor'}</span>
                  {/* <Link href={`/portfolio/${p.slug}`} className="text-sm text-primary font-medium">View case study →</Link> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
