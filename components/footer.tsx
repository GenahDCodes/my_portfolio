import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-neutral-300 mt-2">Developer • Product Manager • Educator</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 text-center text-neutral-300 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "Career", href: "/career" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
