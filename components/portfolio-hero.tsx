import { useState } from 'react';
import { Play } from 'lucide-react';

export default function SoundtrackSection() {
  const [email, setEmail] = useState('');
  
  return (
    <section className="w-full bg-gray-100 py-16 rounded-lg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left content area */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">S</span>
              </div>
              <span className="ml-2 font-medium">SOUNDTRACK</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 mb-12">
              <a href="#" className="text-gray-700 hover:text-gray-900">How it works</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Library</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
              <div className="flex-grow"></div>
              <a href="#" className="px-4 py-1 bg-white rounded-full text-sm">Login</a>
            </nav>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Melodies<br />
              that help you<br />
              stay focus
            </h2>
            
            {/* Placeholder text */}
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            
            {/* Email subscription form */}
            <div className="flex items-center space-x-2 max-w-lg">
              <div className="flex-grow bg-white rounded-full overflow-hidden px-4 py-2 flex items-center border border-gray-200">
                <span className="text-gray-400 text-sm mr-2">Your email address:</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="samantha@email.com" 
                  className="flex-grow outline-none text-gray-800"
                />
              </div>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors flex items-center justify-center">
                Get Started
              </button>
            </div>
            
            {/* Decorative dots */}
            <div className="hidden md:block relative">
              <div className="absolute -left-6 top-4 grid grid-cols-4 gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right image area with floating bubbles */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/500" 
                alt="Woman with headphones focusing on music"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating music bubbles */}
            <div className="absolute top-1/4 -left-12 h-12 w-12 bg-purple-400 rounded-full opacity-80"></div>
            <div className="absolute top-1/6 right-8 h-10 w-10 bg-blue-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-1/3 left-1/4 h-14 w-14 bg-pink-400 rounded-full opacity-80"></div>
            <div className="absolute top-2/3 right-1/4 h-16 w-16 bg-teal-400 rounded-full opacity-80"></div>
            
            {/* Wave line */}
            <div className="absolute top-1/2 w-full">
              <svg className="w-full" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C80 5 120 35 200 20C280 5 320 35 400 20" stroke="#CBD5E0" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}