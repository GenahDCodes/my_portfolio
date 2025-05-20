import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Main content container with proper width to match UI */}
      <div className="max-w-5xl mx-auto py-16 px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Small badge at top with exact styling */}
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            Need an organizer or speaker?
          </div>
          
          {/* Main heading with proper sizing and spacing */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight text-center">
            Want to collaborate Or invite<br />
             me speak at an event?
          </h2>
          
          {/* Subheading text with matching width and styling */}
          <p className="text-gray-600 text-base mb-8 max-w-lg mx-auto text-center">
I'm always open to new opportunities to share knowledge and make a positive impact in communities.

          </p>
          
          {/* CTA Button with exact match to UI */}
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-dark hover:bg-accent-yellow  rounded-full px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative gradient elements that properly match the curved UI elements */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/4 w-64 h-64 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute -right-20 top-1/2 -translate-y-3/4 w-64 h-64 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
      
      {/* Sharp curved line elements that accurately represent the UI */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="opacity-70">
          <path d="M-100,200 Q0,100 100,200 T300,200" stroke="url(#purple-gradient)" strokeWidth="40" fill="none" />
          <defs>
            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8ECAE6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8ECAE6" />
              <stop offset="100%" stopColor="#8ECAE6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="opacity-70">
          <path d="M300,200 Q200,300 100,200 T-100,200" stroke="url(#purple-gradient-2)" strokeWidth="40" fill="none" />
          <defs>
            <linearGradient id="purple-gradient-2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8ECAE6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8ECAE6" />
              <stop offset="100%" stopColor="#8ECAE6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}