import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight, Calendar, Users, GraduationCap, X } from "lucide-react";

export default function CommunityOutreach() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const outreachPhotos = [
    {
      src: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747775341/IMG-20240311-WA0104_eaalaj.jpg",
      alt: "Children receiving educational materials",
      caption: "Distributing books and school supplies to eager young learners"
    },
    {
      src: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751806/IMG-20240311-WA0019_s3d88p.jpg",
      alt: "Volunteer teaching computer skills",
      caption: "Our volunteers conducting basic computer literacy workshops"
    },
    {
      src: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747776965/IMG-20240310-WA0052_dytfyt.jpg",
      alt: "Group photo with orphanage staff",
      caption: "Building lasting relationships with the orphanage community"
    },
    {
      src: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747777028/IMG_20240317_080611_540_jkiias.webp",
      alt: "Children reading new books",
      caption: "Seeing the immediate impact of educational materials"
    },
    {
      src: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747777040/IMG-20240311-WA0008_zay4pp.jpg",
      alt: "Art activity with children",
      caption: "Creative expression activities bringing joy and learning together"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % outreachPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [outreachPhotos.length]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % outreachPhotos.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? outreachPhotos.length - 1 : current - 1));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/api/placeholder/1920/1080')",
          opacity: 0.08
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-light/20 text-primary-dark rounded-full text-sm font-medium mb-4">
              Making a Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">Community Outreach</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              In collaboration with United Ummah Foundation, we organized a visit to Home Of Taqwah to donate
              educational supplies and spend quality time with the children.
            </p>
          </div>

          {/* Featured carousel */}
          <div className="mb-16 relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-96 bg-neutral-200">
                <img
                  src={outreachPhotos[activeIndex].src}
                  alt={outreachPhotos[activeIndex].alt}
                  className="w-full h-full object-cover justify-start transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">{outreachPhotos[activeIndex].caption}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-neutral-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-neutral-800" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {outreachPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-primary" : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail gallery */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-16">
            {outreachPhotos.map((photo, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all ${
                  activeIndex === index 
                    ? "ring-4 ring-primary scale-105 z-10" 
                    : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setSelectedImage(photo.src);
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div> */}

          {/* Impact and metrics */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-800">Quarterly Program</h3>
              </div>
              <p className="text-neutral-600">
                Established an ongoing mentorship program with quarterly follow-up visits and progress tracking.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-800">30+ Children</h3>
              </div>
              <p className="text-neutral-600">
                Reached over thirty children with resources, attention, and educational support.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-800">Digital Literacy</h3>
              </div>
              <p className="text-neutral-600">
                Conducted interactive learning sessions on basic computer skills and digital literacy.
              </p>
            </div>
          </div> */}

          {/* Detailed impact section */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100">
            <h3 className="text-2xl font-bold mb-6 text-primary-dark flex items-center">
              <Heart className="mr-3 h-6 w-6 text-primary" /> Our Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800">Educational Support</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="text-neutral-700">
                      Donated educational supplies, books, and learning materials to all children at the facility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="text-neutral-700">
                      Created a small library with age-appropriate books covering various subjects and interests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span className="text-neutral-700">
                      Provided portable electronic learning devices with educational apps and content
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800">Skills Development</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="text-neutral-700">
                      Conducted interactive learning sessions on basic computer skills and digital literacy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="text-neutral-700">
                      Organized creative workshops to develop artistic expression and critical thinking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span className="text-neutral-700">
                      Established an ongoing mentorship program with quarterly follow-up visits
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                Get involved in our next community event
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain" 
          />
        </div>
      )}
    </section>
  );
}