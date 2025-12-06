import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero () {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/10 to-primary/10 pt-32 pb-20 items-center">
        <Image 
          src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746640433/download_2_bwklju.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-20"
      />
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-dark">
            Muhammed <span className="text-primary">Aminu</span> Umar
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
           I build powerful web products, manage digital platforms, and drive communities through technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/portfolio" className="rounded-full inline-block">
              <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary-dark">View My Work</Button>
            </a>
            <a href="/contact" className="rounded-full inline-block">
              <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary-light hover:text-primary-dark">Hire Me</Button>
            </a>
            
          </div>
        </div>
        
        {/* Profile images section styled like Frameblox UI */}
        <div className="relative mt-16 max-w-5xl mx-auto h-96">
          {/* Center image - main profile */}
          <div className="relative z-20 w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746615434/IMG_20240322_054025_091-EDIT_yutoev.jpg" 
              alt="Muhammed Aminu Umar" 
              width={256} 
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Floating decorative images - can be replaced with project/work samples */}
          <div className="absolute z-10 left-8 top-16 w-48 h-48 rounded-2xl transform -rotate-6 overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746651821/IMG_0511_bbepvo.jpg" 
              alt="Portfolio sample" 
              width={192} 
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="absolute z-10 right-8 top-16 w-48 h-48 rounded-2xl transform rotate-6 overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746619610/_YAZ3284_fzokug.jpg" 
              alt="Portfolio sample" 
              width={192} 
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="absolute z-10 left-32 -bottom-6 w-40 h-40 rounded-2xl transform rotate-12 overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652083/training_a1bzzc.jpg" 
              alt="Portfolio sample" 
              width={160} 
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="absolute z-10 right-32 -bottom-6 w-40 h-40 rounded-2xl transform -rotate-12 overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746652197/IMG_7935_bc6lsr.jpg" 
              alt="Portfolio sample" 
              width={160} 
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        {/* Stats section */}
        <div className="flex justify-center gap-16 mt-24">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-neutral-700">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">480+</p>
            <p className="text-neutral-700">Community members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">1,000+</p>
            <p className="text-neutral-700">Opportunities shared</p>
          </div>
        </div>
      </div>
    </section>
  );
};
