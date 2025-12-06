import React from "react"

const skillGroups = {
  "Programming & Development": ["JavaScript", "TypeScript", "React.js", "React Native", "HTML", "CSS", "Tailwind CSS", "REST APIs", "WordPress"],
  "Product Management & Strategy": ["Product Roadmapping", "User Personas", "User Stories", "Market Research", "Go-to-Market Strategy"],
  "Tools & Platforms": ["Git/GitHub", "VS Code", "Airtable", "Miro", "Figma", "Canva", "Loom"],
  "Productivity": ["Microsoft Office", "Notion", "Trello", "Slack"],
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Skills</h1>
        <p className="text-neutral-700 mb-8">Grouped skills for quick scanning — technical, product and productivity tools.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillGroups).map(([title, skills]) => (
            <div key={title} className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-neutral-100 text-sm text-neutral-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
