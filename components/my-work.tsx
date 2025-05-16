import { link } from 'fs';
import { useState } from 'react';

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('web');
  
  // Sample data for different tabs (from original code)
  const webProjects = [
    {
      title: "Thinkhub Website",
      description: "Responsive website for a human-resource training company",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747345517/Screenshot_2025-03-31_173653_p8hrpy.png",
      techStack: ["React",  "Tailwind CSS", "Framer Motion"],
      link: "https://thinkhub.onrender.com/"
    },
    {
      title: "Eugene Website",
      description: "Portfolio website for a STEM Professional",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747346261/548d9461-348a-4542-9d88-c21ab76b2d3b.png",
      techStack: ["Next.js", "Tailwind CSS"],
      link: "https://eugene-website.onrender.com/"
    },
    {
      title: "My Portfolio",
      description: "Personal portfolio showcasing my work and skills",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747346337/f7f03bdd-330f-4925-a80c-a11bdfe4f998.png",
      techStack: ["Nextjs", "Supabase", "Tailwind CSS"],
      link: "#"
    }
  ];
  
  const productCases = [
    {
      title: "iSupreme Connect Case Study",
      description: "Improving user engagement and feature discoverability",
      phases: [
        {
          name: "Research",
          items: ["User interviews", "Competitor analysis", "Pain point identification"]
        },
        {
          name: "Design",
          items: ["Wireframing", "Prototyping", "User testing"]
        },
        {
          name: "Implementation",
          items: ["Developer handoff", "Sprint planning", "Feature prioritization"]
        }
      ],
      outcomes: [
        "Detailed user personas created",
        "Better user engagement metrics",
        "Increased feature discoverability",
      ]
    }
  ];
  
  const designProjects = [
    {
      title: "Flyer Design",
      description: "Promotional flyer for a local business",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747351355/Hafsa_beads_design_1_hp7o5j.png",
      type: "Marketing",
      tools: ["Canva"],
      link: "https://www.canva.com/design/DAGnPeV7iM8/XrUWtVsQUABqeoCnQf8h8g/edit?utm_content=DAGnPeV7iM8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Mobile App UI",
      description: "User interface design for 3C Connect mobile app",
      type: "UI/UX",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747352260/7e056911-f244-4bc6-bfb0-17244bfd4e3f.png",
      tools: ["Figma"],
        link: "https://www.figma.com/design/52kjkGYR1mmKJeFu4v5RrB/Regional-News-App--Community-?node-id=0-1&t=4Lv2MKlJJ8m0oAo0-1"
    },
    {
      title: "Political Campaign Poster",
      description: "Poster design for a political campaign",
      image: "https://res.cloudinary.com/dfxjwtw86/image/upload/v1747352428/Mariama_Flyer_1_tseqgr.png",
      type: "Campaign",
      tools: ["Illustrator", "InDesign"],
        link: "https://www.canva.com/design/DAGnExSWaaU/Q95GhlfrAxOj3slDO4THJA/edit?utm_content=DAGnExSWaaU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }
  ];
  
  return (
    <div className="max-w-5xl mx-auto mb-12">
      {/* Tab List - Styled to match the UI in the image */}
      <div className="grid grid-cols-3 mb-8">
        <button
          onClick={() => setActiveTab('web')}
          className={`text-base py-3 rounded-full transition-colors duration-200 ${
            activeTab === 'web'
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab('product')}
          className={`text-base py-3 rounded-full transition-colors duration-200 ${
            activeTab === 'product'
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Product Management
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`text-base py-3 rounded-full transition-colors duration-200 ${
            activeTab === 'design'
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Graphic Design
        </button>
      </div>
      
      {/* Tab Content */}
      {/* Web Development Tab Content */}
      {activeTab === 'web' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Web Development Projects</h2>
            <p className="text-neutral-700 mb-8">
              I build responsive, performant, and accessible web applications using modern frameworks and best
              practices. Here are some of my recent projects:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <div key={index} className="flex flex-col h-full border border-neutral-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-neutral-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-primary-dark">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary-light/10 text-primary border border-primary-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-neutral-700 mt-3">{project.description}</p>
                  <div className="mt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <button className="w-full py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Management Tab Content */}
      {activeTab === 'product' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Product Management</h2>
            <p className="text-neutral-700 mb-8">
              I apply agile methodologies and user-centered design principles to guide products from concept to
              launch. Here's a case study of my product management work:
            </p>
          </div>

          {productCases.map((caseStudy, index) => (
            <div key={index} className="border border-neutral-300 rounded-lg hover:shadow-md transition-shadow mb-8">
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-primary">{caseStudy.title}</h3>
                <p className="text-lg text-neutral-700 mt-2">{caseStudy.description}</p>
              
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {caseStudy.phases.map((phase, i) => (
                    <div key={i} className="bg-primary-light/10 p-6 rounded-lg border border-primary-light/30">
                      <h4 className="text-xl font-semibold mb-4 text-primary flex items-center">
                        <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                          {i + 1}
                        </span>
                        {phase.name}
                      </h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span className="text-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="text-xl font-semibold mb-4 text-primary-dark">Outcomes</h4>
                  <ul className="space-y-2">
                    {caseStudy.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        <span className="text-neutral-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                    <a href="https://connect.isupremehq.com/" className="w-full" target="_blank" rel="noopener noreferrer">
                  <button className="py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
                    Read More Here
                  </button>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Graphic Design Tab Content */}
      {activeTab === 'design' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Graphic Design</h2>
            <p className="text-neutral-700 mb-8">
              I create visually compelling designs that communicate brand values and engage target audiences. Here are
              some examples of my design work:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <div key={index} className="flex flex-col h-full border border-neutral-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-64 bg-neutral-200 relative overflow-hidden">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-primary-dark">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-neutral-700 mt-3 mb-4">{project.description}</p>
                  {/* <div className="flex items-center space-x-4">
                    <span className="text-sm text-neutral-500">Tools:</span>
                    <div className="flex space-x-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-2 py-1 text-xs border rounded bg-white">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div> */}
                  <div className="mt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                      View Full Design
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}