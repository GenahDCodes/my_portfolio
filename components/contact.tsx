// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Mail, Phone, Linkedin } from "lucide-react"
// import { services } from "./services"

// const serviceOptions = [
//   "Lightning Launch Site",
//   "Brand-Boost Flyer",
//   "Arduino Kick-Start Workshop",
//   "Rapid Product Sprint",
//   "Engage & Educate Webinar",
//   "Other",
// ]

// export default function Contact() {
//   const searchParams = useSearchParams()

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   })

//   useEffect(() => {
//     const serviceParam = searchParams.get("service")
//     if (serviceParam) {
//       const service = services.find((s) => s.slug === serviceParam)
//       if (service) {
//         setFormData((prev) => ({
//           ...prev,
//           service: service.title.split(" ").slice(1).join(" "), // Remove emoji
//           message: `I'm interested in your ${service.title} service.`,
//         }))
//       }
//     }
//   }, [searchParams])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleServiceChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, service: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real implementation, you would send this data to your backend
//     console.log("Form submitted:", formData)
//     alert("Thanks for your message! I'll get back to you soon.")
//     setFormData({
//       name: "",
//       email: "",
//       service: "",
//       message: "",
//     })
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="section-heading">Get in Touch</h2>
//       <p className="section-subheading">
//         Ready to start a project or have questions? Reach out and let's discuss how I can help.
//       </p>

//       <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//         {/* Contact Form */}
//         <div className="bg-white rounded-lg shadow-md p-6 border border-neutral-300">
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   required
//                   className="border-neutral-300 focus:border-primary focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your.email@example.com"
//                   required
//                   className="border-neutral-300 focus:border-primary focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="service">Service Interested In</Label>
//                 <Select value={formData.service} onValueChange={handleServiceChange}>
//                   <SelectTrigger className="border-neutral-300 focus:ring-primary">
//                     <SelectValue placeholder="Select a service" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {serviceOptions.map((service) => (
//                       <SelectItem key={service} value={service}>
//                         {service}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project or inquiry"
//                   rows={5}
//                   required
//                   className="border-neutral-300 focus:border-primary focus:ring-primary"
//                 />
//               </div>

//               <Button type="submit" className="w-full btn-primary">
//                 Send Message
//               </Button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div className="flex flex-col justify-center">
//           <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Contact Information</h3>

//           <div className="space-y-6">
//             <div className="flex items-start">
//               <div className="icon-container p-3 rounded-full mr-4">
//                 <Mail className="h-6 w-6" />
//               </div>
//               <div>
//                 <h4 className="font-medium text-primary-dark">Email</h4>
//                 <a href="mailto:youremail@example.com" className="text-primary hover:underline">
//                   youremail@example.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <div className="icon-container p-3 rounded-full mr-4">
//                 <Phone className="h-6 w-6" />
//               </div>
//               <div>
//                 <h4 className="font-medium text-primary-dark">WhatsApp</h4>
//                 <a href="https://wa.me/1234567890" className="text-primary hover:underline">
//                   +123-456-7890
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <div className="icon-container p-3 rounded-full mr-4">
//                 <Linkedin className="h-6 w-6" />
//               </div>
//               <div>
//                 <h4 className="font-medium text-primary-dark">LinkedIn</h4>
//                 <a
//                   href="https://linkedin.com/in/yourname"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:underline"
//                 >
//                   linkedin.com/in/yourname
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";
import React, { useState } from "react";
import { Mail, Phone, Linkedin, Send, CheckCircle, Flame } from "lucide-react";
import Image from "next/image";

const serviceOptions = [
  "Lightning Launch Site",
  "Brand-Boost Flyer",
  "Arduino Kick-Start Workshop",
  "Rapid Product Sprint",
  "Engage & Educate Webinar",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-xl border-2 border-gray-200 
    focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
    transition-all duration-300 ease-out
    bg-white/80 backdrop-blur-sm 
    placeholder-gray-500 text-gray-800
    shadow-sm hover:shadow-md
  `;

  const labelClasses = `
    text-sm font-semibold text-white mb-2 block
    transition-colors duration-200
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-16">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row rounded-3xl shadow-2xl border border-neutral-200 bg-white/90 backdrop-blur-sm overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 flex items-stretch">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1747950475/IMG_9677_xaeqf5.jpg"
              alt="Hero Image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              style={{ aspectRatio: "1/1", minHeight: "100%" }}
              priority
            />
          </div>
        </div>
        {/* Border Separator */}
        <div className="w-px bg-neutral-300" />
        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-accent-yellow p-8">
          <div className="w-full max-w-md p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow mb-4">
                    <Flame className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Let's Connect</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-white">We'd love to hear from you</p>
                </div>
                <div>
                  <label className={labelClasses}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className={`${inputClasses} cursor-pointer`}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-2">Thank you for reaching out.</p>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
