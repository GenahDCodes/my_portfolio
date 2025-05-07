import Contact from "@/components/contact"

export const metadata = {
  title: "Contact | Your Name",
  description: "Get in touch to discuss your project or ask questions about my services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Contact />
    </div>
  )
}
