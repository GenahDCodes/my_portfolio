import React from "react"
import Contact from "@/components/contact"

export const metadata = {
  title: "Contact | Muhammed Aminu Umar",
  description: "Get in touch to discuss projects, partnerships or community initiatives.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact</h1>
        <p className="text-neutral-700 mb-6">Use the form below or reach me directly via email or LinkedIn.</p>

        <div className="max-w-2xl">
          <Contact />
        </div>
      </main>
    </div>
  )
}
