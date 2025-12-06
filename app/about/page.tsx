import React from "react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-16 px-4">
        <section className="container mx-auto max-w-6xl">
          <div className="mx-auto bg-gradient-to-br from-primary/20 via-primary-light/30 to-accent-yellow/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
            <div className="max-w-4xl mx-auto prose prose-neutral">
              <h1 className="text-4xl font-bold text-primary-dark mb-4">About Me</h1>

          <article>
            <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
            <p>
              Hi, I’m Muhammed Aminu Umar, a Computer Science student at the University of Ghana passionate about
              building impactful digital solutions. I specialize in web and web app development, embedded systems,
              UI/UX design, and product management  combining technology with creativity and leadership to solve
              real-world problems.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">Skills &amp; Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6 text-neutral-700">
              <div>
                <h3 className="font-medium">Web &amp; Web App Development</h3>
                <p className="text-sm">Functional, responsive, and user-focused websites and applications.</p>

                <h3 className="font-medium mt-4">Product Management</h3>
                <p className="text-sm">Managing products like Intelex and Connect from ideation to launch.</p>

                <h3 className="font-medium mt-4">UI/UX Design</h3>
                <p className="text-sm">Designing intuitive interfaces and polished digital experiences.</p>
              </div>

              <div>
                <h3 className="font-medium">Embedded Systems &amp; Arduino</h3>
                <p className="text-sm">Hands-on hardware projects, prototyping, and student training.</p>

                <h3 className="font-medium mt-4">Digital Media &amp; Content Creation</h3>
                <p className="text-sm">Video editing, flyers, brochures, and social media campaigns.</p>

                <h3 className="font-medium mt-4">Community Building</h3>
                <p className="text-sm">Organizing programs, managing communities, and coordinating events that create impact.</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">Professional Experience</h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>
                <strong>iSupreme</strong>: Product Management Intern, oversaw product work for Intelex and Connect.
              </li>
              <li>
                <strong>STEMAIDE &amp; Afrikan STEM Force</strong>: Embedded systems and Arduino development and training.
              </li>
              <li>
                <strong>Royal Priesthood Academy</strong>: Administration and accounting support.
              </li>
              <li>
                <strong>Afrovivo</strong>: Tech support and representation under the Entrepreneurship with Bola Ray program.
              </li>
              <li>
                <strong>ThinkHub</strong>: Website development and frontend work.
              </li>
              <li>
                <strong>Aldin Cycle</strong>: Technical assistant, helping customers with platform issues.
              </li>
              <li>
                <strong>Next Einstein Forum</strong>: Facilitator for Arduino training workshops.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">Leadership &amp; Community</h2>
            <div className="grid md:grid-cols-2 gap-6 text-neutral-700">
              <div>
                <h3 className="font-medium">Roles</h3>
                <p className="text-sm">Campus ambassador for Lead For Ghana; President of the Ghana Muslim Students Association (Jean Nelson Aka Hall).</p>

                <h3 className="font-medium mt-4">Community Coordination</h3>
                <p className="text-sm">Volunteer coordinator for Better Dream Foundation; led donation programs with United Ummah for orphanages.</p>
              </div>

              <div>
                <h3 className="font-medium">Community Management &amp; Events</h3>
                <p className="text-sm">Founder of 3C Community and manager of CEF Community. Led logistics, proposals, and technical execution for events such as CEF, Jazz &amp; Byte, and Future of Work.</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">Projects &amp; Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4 text-neutral-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Developed websites and web applications for clients and community programs.</li>
                <li>Designed UI interfaces, flyers, and brochures for campaigns and events.</li>
                <li>Edited videos used in project showcases and social campaigns.</li>
                <li>Managed product lifecycles from ideation through launch.</li>
              </ul>

              <ul className="list-disc list-inside space-y-2">
                <li>Handled social media campaigns for CEF and Nana GMB 25.</li>
                <li>Facilitated STEM workshops and Arduino training at the Next Einstein Forum.</li>
                <li>Organized community events impacting hundreds of students and early professionals.</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">Hobbies &amp; Interests</h2>
            <p className="text-neutral-700">Running, participated in three major races and member of Runner Alliance. Active in Islamic community engagement and volunteer work. I enjoy continuous learning, exploring new technologies, and building side projects that solve practical problems.</p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mt-8">What Drives Me</h2>
            <p className="text-neutral-700">I believe technology, creativity, and leadership can create opportunities and change lives. My mission is to build products, manage solutions, and lead communities that empower individuals and organizations to reach their full potential.</p>
          </article>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-primary text-white py-3 px-6 rounded-full">Work with me</Link>
          </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
