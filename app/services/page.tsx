import Services from "@/components/services"

export const metadata = {
  title: "Services | Your Name",
  description: "Professional services including web development, workshops, and product development sprints.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Services />
    </div>
  )
}
