"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Figma, ArrowRight, CheckCircle } from "lucide-react"
import MyWork from "@/components/my-work"






export default function PortfolioClientPage() {
  const [activeTab, setActiveTab] = useState("web")
    const [email, setEmail] = useState('');
  

  return (
    <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
         


<section className="w-full py-16 px-9 rounded-lg overflow-hidden relative bg-black">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652197/IMG_7935_bc6lsr.jpg"
      alt="Background Image"
      
      objectFit="cover"
      width={1920}
      height={1080}
      className="rounded-lg opacity-50"
    />
    {/* Overlay to improve text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  </div>
  
  <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-end justify-center h-full">
    {/* Content with glass effect */}
    <div className="max-w-lg backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-xl p-8 border border-white border-opacity-20 shadow-lg">
      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        My Projects
      </h2>
      
      {/* Description text */}
      <p className="text-white text-opacity-90 mb-8">
        Showcasing my work across web development, product management, and graphic design. Each project represents my
        commitment to quality, innovation, and user-centered solutions.
      </p>

      {/* Call to action button */}
      <div>
        <Link href="/contact">
          <Button size="lg" className="bg-accent-yellow text-primary hover:bg-primary-dark rounded-full px-8">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  </div>
  
  {/* Floating decorative elements */}
  <div className="absolute top-1/4 left-1/4 h-12 w-12 bg-purple-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute top-1/6 right-1/4 h-10 w-10 bg-blue-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute bottom-1/3 left-1/4 h-14 w-14 bg-pink-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  <div className="absolute top-2/3 right-1/4 h-16 w-16 bg-teal-400 rounded-full opacity-40 backdrop-blur-sm z-10"></div>
  
  {/* Wave line */}
  <div className="absolute bottom-1/4 w-full z-10">
    <svg className="w-full" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C80 5 120 35 200 20C280 5 320 35 400 20" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
    </svg>
  </div>
</section>


      <div className="container mx-auto px-4 py-16">

        <MyWork />
        

        



        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-xl primary-gradient text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-accent-yellow rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
