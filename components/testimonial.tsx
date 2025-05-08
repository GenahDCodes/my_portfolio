// "use client";

// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function TestimonialCarousel() {
//   const testimonials = [
//     {
//       content: "I really enjoyed working with this team. They were professional, responsive, and delivered high-quality work on time.",
//       name: "Someone Famous",
//       title: "Creative Designer",
//       avatar: "/api/placeholder/40/40"
//     },
//     {
//       content: "Our experience was fantastic! The team was attentive to our needs and provided excellent service throughout the project.",
//       name: "Abena Osei",
//       title: "Product Manager",
//       avatar: "/api/placeholder/40/40"
//     },
//     {
//       content: "The project exceeded our expectations. The attention to detail and commitment to quality was evident in every aspect of the work.",
//       name: "Jane Doe",
//       title: "Marketing Director",
//       avatar: "/api/placeholder/40/40"
//     },
//     {
//       content: "This was a game-changer for our business. The team's expertise and innovative approach helped us achieve our goals faster than we thought possible.",
//       name: "Eric Johnson",
//       title: "UX Researcher",
//       avatar: "/api/placeholder/40/40"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleTransitionEnd = () => {
//     setIsTransitioning(false);
//   };

//   // Touch handlers for mobile swiping
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 75) {
//       handleNext();
//     }
//     if (touchStart - touchEnd < -75) {
//       handlePrev();
//     }
//   };

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Calculate which items to display
//   const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
//   const nextIndex = (currentIndex + 1) % testimonials.length;

//   return (
//     <section className="py-20 bg-blue-500 relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white mb-4">Client Testimonials</h2>
//         <p className="text-xl text-center text-white opacity-80 mb-12">Here's what people are saying about working with me</p>

//         {/* Testimonial Carousel */}
//         <div 
//           className="relative max-w-6xl mx-auto overflow-hidden"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="flex justify-center">
//             {/* Prev Button */}
//             <button 
//               onClick={handlePrev}
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             {/* Testimonial Cards with 3D effect */}
//             <div className="flex justify-center items-center w-full">
//               {/* Previous testimonial (blurred in background) */}
//               <div className="absolute left-0 transform -translate-x-1/4 scale-90 opacity-50 blur-sm transition-all duration-300">
//                 <TestimonialCard testimonial={testimonials[prevIndex]} />
//               </div>
              
//               {/* Active testimonial */}
//               <div 
//                 className="relative z-10 transition-all duration-300 ease-in-out transform"
//                 onTransitionEnd={handleTransitionEnd}
//               >
//                 <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />
//               </div>
              
//               {/* Next testimonial (blurred in background) */}
//               <div className="absolute right-0 transform translate-x-1/4 scale-90 opacity-50 blur-sm transition-all duration-300">
//                 <TestimonialCard testimonial={testimonials[nextIndex]} />
//               </div>
//             </div>
            
//             {/* Next Button */}
//             <button 
//               onClick={handleNext}
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
          
//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (isTransitioning) return;
//                   setIsTransitioning(true);
//                   setCurrentIndex(index);
//                 }}
//                 className={`w-3 h-3 mx-1 rounded-full transition-all ${
//                   index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Testimonial Card Component
// interface Testimonial {
//   content: string;
//   name: string;
//   title: string;
//   avatar: string;
// }

// function TestimonialCard({ testimonial, isActive = false }: { testimonial: Testimonial; isActive?: boolean }) {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-lg p-8 mx-4 w-full max-w-md transition-all duration-300 ${
//         isActive ? 'opacity-100 scale-100' : 'opacity-80 scale-90'
//       }`}
//     >
//       {/* Quote icon */}
//       <div className="flex justify-end mb-4">
//         <div className="text-gray-300 text-6xl leading-none">"</div>
//       </div>
      
//       {/* Testimonial content */}
//       <p className="text-gray-600 mb-8">
//         {testimonial.content}
//       </p>
      
//       {/* Author info */}
//       <div className="flex items-center">
//         <img 
//           src={testimonial.avatar} 
//           alt={testimonial.name}
//           className="w-10 h-10 rounded-full mr-4 object-cover"
//         />
//         <div>
//           <h4 className="font-medium text-blue-500">{testimonial.name}</h4>
//           <p className="text-gray-500 text-sm">{testimonial.title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// components/TestimonialCarousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  title: string;
  avatar: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      content:
        "I really enjoyed working with this team. They were professional, responsive, and delivered high-quality work on time.",
      name: "Someone Famous",
      title: "Creative Designer",
      avatar: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746615434/IMG_20240322_054025_091-EDIT_yutoev.jpg",
    },
    {
      content:
        "Our experience was fantastic! The team was attentive to our needs and provided excellent service throughout the project.",
      name: "Abena Osei",
      title: "Product Manager",
      avatar: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746615434/IMG_20240322_054025_091-EDIT_yutoev.jpg",
    },
    {
      content:
        "The project exceeded our expectations. The attention to detail and commitment to quality was evident in every aspect of the work.",
      name: "Jane Doe",
      title: "Marketing Director",
      avatar: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746615434/IMG_20240322_054025_091-EDIT_yutoev.jpg",
    },
    {
      content:
        "This was a game-changer for our business. The team's expertise and innovative approach helped us achieve our goals faster than we thought possible.",
      name: "Eric Johnson",
      title: "UX Researcher",
      avatar: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746615434/IMG_20240322_054025_091-EDIT_yutoev.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentIndex((i) =>
      i === 0 ? testimonials.length - 1 : (i - 1) % testimonials.length
    );

  // Auto-rotate every 5s
  useEffect(() => {
    const iv = setInterval(handleNext, 5000);
    return () => clearInterval(iv);
  }, []);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart - touchEnd > 75) handleNext();
    if (touchEnd - touchStart > 75) handlePrev();
  };

  return (
    <section
      className="
        py-20 relative overflow-hidden bg-primary
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('https://res.cloudinary.com/dfxjwtw86/image/upload/v1746713075/Mesa_de_escrit%C3%B3rio_preta_moderna_com_material_de_escrit%C3%B3rio_e_espa%C3%A7o_de_c%C3%B3pia_l6kfcw.jpg')]
        before:bg-center before:bg-cover before:opacity-30
      "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-accent-yellow mb-4">
          Client Testimonials
        </h2>
        <p className="text-xl text-center text-white opacity-80 mb-12">
          Here’s what people are saying about working with me
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              z-20 p-2 rounded-full
              bg-white bg-opacity-20 hover:bg-opacity-30
              text-white transition
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Sliding strip */}
          <div
            ref={stripRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, idx) => {
              // compute circular distance from active index
              const rawDist = Math.abs(idx - currentIndex);
              const dist = Math.min(rawDist, testimonials.length - rawDist);

              // styling: only active card is full-size & sharp
              const scale = dist === 0 ? 1 : 0.9;
              const opacity = dist === 0 ? 1 : 0.6;
              const blur = dist === 0 ? "blur(0)" : "blur(4px)";

              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full px-4"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    filter: blur,
                    transition: "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease",
                  }}
                >
                  <TestimonialCard testimonial={t} />
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              z-20 p-2 rounded-full
              bg-white bg-opacity-20 hover:bg-opacity-30
              text-white transition
            "
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`
                w-3 h-3 rounded-full transition
                ${idx === currentIndex
                  ? "bg-white"
                  : "bg-white bg-opacity-30"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-light to-primary-dark rounded-lg shadow-lg p-8">
      {/* Quote Icon */}
      <div className="flex justify-end mb-4">
        <span className="text-gray-300 text-6xl leading-none">"</span>
      </div>

      {/* Content */}
      <p className="text-white mb-8">{testimonial.content}</p>

      {/* Author */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-medium text-primary-dark">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
