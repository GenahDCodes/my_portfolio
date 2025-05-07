
"use client"

import React, { useState, useEffect } from "react";

interface ToolCardProps {
  name: string;
  imageUrl?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="group flex-shrink-0 mx-4 w-24">
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500">
        {/* Glowing accent effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image container */}
        <div className="p-4 flex justify-center items-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <img 
              src={imageUrl || `/api/placeholder/400/400`} 
              alt={`${name} logo`}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        
        {/* Tool name with animated underline */}
        <div className="pb-3 text-center">
          <h3 className="text-xs font-medium text-gray-800 relative inline-block">
            {name}
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
          </h3>
        </div>
      </div>
    </div>
  );
};

interface ToolData {
  name: string;
  imageUrl?: string;
}

const MarqueeContainer: React.FC<{ children: React.ReactNode, direction?: 'left' | 'right' }> = ({ 
  children, 
  direction = 'left' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="overflow-hidden relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex whitespace-nowrap ${
          isHovered 
            ? 'transition-transform duration-200' 
            : `animate-marquee-${direction === 'left' ? 'left' : 'right'}`
        }`}
      >
        {children}
        {/* Duplicate children for seamless loop */}
        {children}
      </div>
    </div>
  );
};

const ToolsAndTechnologies: React.FC = () => {
  const tools: ToolData[] = [
    { name: "VS Code", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617417/Visual_Studio_Code_-_Download_and_install_on_Windows___Microsoft_Store_kuo5l2.jpg"},
    { name: "Figma", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617557/Figma_Logo_PNG_Transparent_SVG_Vector_-_Freebie_Supply_npdsfw.jpg"},
    { name: "Canva", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617654/Canva_essentials_-_Canva_Design_School_inas74.jpg"},
    { name: "GitHub", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617898/GitHub_Logo_PNG_Vector_AI_Free_Download_gligqa.jpg"},
    { name: "Tinkercad", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617846/Tinkercad_Logo_Download_-_AI_-_All_Vector_Logo_bpatvp.jpg"},
    { name: "React", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617732/Developer_Stickers_for_Sale_h3gb6k.jpg"},
    { name: "Node.js", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746617957/Node_js_Development_Service_rmn7zs.jpg"},
    { name: "Google Workspace", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618033/Best_Google_Workspace_Provider_in_Kolkata_xd66fv.jpg"},
    { name: "Arduino", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618111/Arduino_IDE_Logo_PNG_Vector_SVG_Free_Download_xunedg.jpg"},
    { name: "Slack", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618190/Slack_Logo_PNG_Vector_SVG_Free_Download_exzgy9.jpg"},
    { name: "MongoDB", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618272/MongoDB_Logo_PNG_Vector_SVG_Free_Download_oywsmd.jpg"},
    { name: "Supabase", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618330/Supabase_Logo_PNG_Vector_SVG_Free_Download_tlz6hi.jpg"},
    { name: "Postman", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618428/Postman_Logo_PNG_Vector_SVG_Free_Download_sntlw5.jpg"},
    { name: "Trello", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746618475/Trello_Referral_Links_Free_month_of_Trello_Gold_for_referrer___ReferCodes_zgzp5s.jpg"},
    { name: "Miro", imageUrl: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1746619025/Miro_Logo_PNG_Vector_SVG_Free_Download_ubaivu.jpg"},
    
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      
      <div className="container mx-auto px-2 relative">
        {/* Section heading with animated reveal */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            I leverage these powerful tools to design, develop, and manage products 
            while teaching the next generation of makers.
          </p>
        </div>
        
        {/* Marquee rows with alternating directions */}
        <div className="space-y-6">
          <MarqueeContainer direction="left">
            {tools.slice(0, 7).map((tool, index) => (
              <ToolCard key={index} name={tool.name} imageUrl={tool.imageUrl} />
            ))}
          </MarqueeContainer>
          
          <MarqueeContainer direction="right">
            {tools.slice(7).map((tool, index) => (
              <ToolCard key={index + 7} name={tool.name} imageUrl={tool.imageUrl} />
            ))}
          </MarqueeContainer>
        </div>
      </div>
    </section>
  );
};

// Add keyframe animations to tailwind.config.js
// Add this to your CSS or global stylesheet:
// @keyframes marquee-left {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// @keyframes marquee-right {
//   0% { transform: translateX(-50%); }
//   100% { transform: translateX(0); }
// }
// .animate-marquee-left {
//   animation: marquee-left 30s linear infinite;
// }
// .animate-marquee-right {
//   animation: marquee-right 30s linear infinite;
// }

export default ToolsAndTechnologies;