"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Linkedin } from "lucide-react"
import { services } from "./services"

const serviceOptions = [
  "Lightning Launch Site",
  "Brand-Boost Flyer",
  "Arduino Kick-Start Workshop",
  "Rapid Product Sprint",
  "Engage & Educate Webinar",
  "Other",
]

export default function Contact() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      const service = services.find((s) => s.slug === serviceParam)
      if (service) {
        setFormData((prev) => ({
          ...prev,
          service: service.title.split(" ").slice(1).join(" "), // Remove emoji
          message: `I'm interested in your ${service.title} service.`,
        }))
      }
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="section-heading">Get in Touch</h2>
      <p className="section-subheading">
        Ready to start a project or have questions? Reach out and let's discuss how I can help.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-neutral-300">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-neutral-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-neutral-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Interested In</Label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="border-neutral-300 focus:ring-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry"
                  rows={5}
                  required
                  className="border-neutral-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <Button type="submit" className="w-full btn-primary">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="icon-container p-3 rounded-full mr-4">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-dark">Email</h4>
                <a href="mailto:youremail@example.com" className="text-primary hover:underline">
                  youremail@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="icon-container p-3 rounded-full mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-dark">WhatsApp</h4>
                <a href="https://wa.me/1234567890" className="text-primary hover:underline">
                  +123-456-7890
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="icon-container p-3 rounded-full mr-4">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-dark">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/yourname
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
