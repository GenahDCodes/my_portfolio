import React from "react"

const professional = [
  {
    role: "Backend Engineer & Product Manager Intern",
    org: "iSupreme Labs",
    date: "Apr 2025 – Present",
    bullets: [
      "Product Manager for Intelex and Connect by iSupreme: feature definition, market research, and go-to-market planning",
      "Produced user personas, user stories, and authored user manuals",
      "Collaborated on UI and backend design and performed QA testing",
    ],
  },
  {
    role: "Backend Developer",
    org: "Product Miners (under iSupreme Labs)",
    date: "[Date]",
    bullets: [
      "Built a WordPress plugin (UI + backend) and managed its publishing to the WordPress marketplace",
    ],
  },
  {
    role: "Technical Support Officer",
    org: "Aldin Cycles",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Provided technical assistance to users and riders; trained learners on safe riding",
      "Improved system reliability through suggested improvements",
    ],
  },
  {
    role: "Junior Frontend Developer",
    org: "Afrovivo",
    date: "Jan 2024 – Present",
    bullets: [
      "Built responsive auth and dashboard flows with React and Tailwind CSS",
      "Hosted community programs and supported product development",
    ],
  },
  {
    role: "Intern / Team Lead",
    org: "Royal Priesthood Academy / The Phantom Troupe",
    date: "Feb 2024 – Aug 2024",
    bullets: [
      "Supported school administration and taught ICT to JHS students",
      "Led a software engineering project team building a solution for Yak Computers",
    ],
  },
]

const leadership = [
  {
    role: "Community Lead",
    org: "3C Opportunity Hub",
    date: "Oct 2024 – Present",
    bullets: [
      "Built and manage a 480+ member WhatsApp community",
      "Shared 1,000+ curated opportunities and organized webinars with partner organizations",
    ],
  },
  {
    role: "Program Lead / Organizer",
    org: "Techies4Impact, United Ummah, Afrikan STEM Force",
    date: "2022 – Present",
    bullets: [
      "Coordinated events like Jazz & Bytes and school outreach programs (Narkwa D/A JHS)",
      "Designed STEM curriculum and mentorship activities for partner schools",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "Lead For Ghana",
    date: "Nov 2024 – Present",
    bullets: ["Onboarded students into fellowship pathways and designed outreach strategies"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Experience & Impact</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {professional.map((p, i) => (
              <div key={i} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{p.role} — {p.org}</h3>
                    <p className="text-sm text-neutral-600">{p.date}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-3 text-neutral-700">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership & Community</h2>
          <div className="space-y-6">
            {leadership.map((l, i) => (
              <div key={i} className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{l.role} — {l.org}</h3>
                <ul className="list-disc list-inside mt-3 text-neutral-700">
                  {l.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
