import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Background images for slideshow
  const backgroundImages = [
    "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746651821/IMG_0511_bbepvo.jpg", 
    "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751779/5X7A9514_zl53nc.jpg", 
    "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751788/IMG_9770_qp6qds.jpg",
    "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751797/IMG_8146_vxupjl.jpg",
    "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747751806/IMG-20240311-WA0019_s3d88p.jpg",
  ];
  
  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-96 md:h-screen overflow-hidden">
      {/* Background Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out  bg-cover bg-center ${
            index === currentImageIndex ? "opacity-80" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: "0"
          }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Connect. Collaborate. Change the World.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
            Building impact-driven communities for learning, growth, and purpose.
          </p>
          
          {/* Optional: Add a CTA button */}
          {/* <button className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 py-3 px-8 rounded-full font-medium text-lg">
            Join Our Community
          </button> */}
          
          {/* Slideshow Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;