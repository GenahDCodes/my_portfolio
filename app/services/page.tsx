import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Services | Muhammed Aminu Umar",
  description: "Professional services including web development, product management, digital strategy and community programs.",
}

const services = [
  {
    title: "Web & Frontend Development",
    bullets: [
      "React & Next.js apps",
      "Responsive, accessible UIs with Tailwind",
      "Headless CMS & API integrations",
      "Performance & SEO optimizations",
    ],
  },
  {
    title: "Product Management",
    bullets: [
      "Discovery & roadmap creation",
      "Prototyping & validation",
      "Cross-functional delivery",
      "Metrics-driven prioritization",
    ],
  },
  {
    title: "Digital Strategy & Consultation",
    bullets: [
      "Go-to-market plans",
      "Conversion optimization",
      "Analytics & measurement",
      "Partnership activation",
    ],
  },
  {
    title: "Community & Social Impact",
    bullets: [
      "Program design & facilitation",
      "Community growth & engagement",
      "Partnerships with schools & NGOs",
      "Impact tracking & reporting",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Services</h1>
        <p className="text-neutral-700 mb-8">I work across product, engineering, strategy and community — here’s how I can help.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-semibold text-primary mb-3">{s.title}</h3>
              <ul className="list-disc list-inside text-neutral-700 space-y-1">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-primary text-white py-3 px-6 rounded-full">Discuss a project</Link>
        </div>
      </main>
    </div>
  )
}
