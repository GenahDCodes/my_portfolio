// import Link from "next/link"
// import { Github, Twitter, Linkedin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-primary-dark text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-xl font-bold">Your Name</h3>
//             <p className="text-neutral-300 mt-2">Developer • Product Manager • Educator</p>
//           </div>

//           <div className="flex space-x-4">
//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
//             >
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a
//               href="https://twitter.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
//             >
//               <Twitter className="h-5 w-5" />
//               <span className="sr-only">Twitter</span>
//             </a>
//             <a
//               href="https://linkedin.com/in/yourname"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-primary p-2 rounded-full hover:bg-primary-light transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-primary mt-8 pt-8 text-center text-neutral-300 text-sm">
//           <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//           <div className="mt-4 flex justify-center space-x-6">
//             {[
//               { name: "Home", href: "/" },
//               { name: "Career", href: "/career" },
//               { name: "Services", href: "/services" },
//               { name: "Contact", href: "/contact" },
//             ].map((link) => (
//               <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { Github, Music2, Linkedin, Mail, Instagram, Youtube, } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-8 ">
      <div className="container mx-auto px-4 ">
        {/* Logo */}
        <div className="flex justify-center  ">
          <Image
            src="https://res.cloudinary.com/dfxjwtw86/image/upload/v1746660472/Muhammed_Aminu_Umar_Logo-removebg-preview_1_fw8xda.png"
            alt="Logo"
            width={200}
            height={200}
            className=" rounded-full"
          />

        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Muhammed Aminu Umar</h2> 


        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center text-sm mb-6 space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/community" className="hover:underline">
            Community
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/career" className="hover:underline">
            Career
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/aminu-umar-0356a5288/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark p-2 rounded-full hover:bg-accent-yellow  transition-opacity"
            aria-label="Facebook"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/its.aminumar/#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark p-2 rounded-full hover:bg-accent-yellow transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          {/* <a
            href="https://twitter.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark p-2 rounded-full hover:opacity-80 transition-opacity"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a> */}
          <a
            href="mailto:aminumar112@gmail.com"
            className="bg-white text-primary-dark p-2 rounded-full hover:bg-accent-yellow transition-opacity"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@aminu.umar60?_t=ZM-8wBfaP2vbyo&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark p-2 rounded-full hover:bg-accent-yellow transition-opacity"
            aria-label="YouTube"
          >
            <Music2 className="h-5 w-5" />
          </a>
        </div>

        {/* Language Selector */}
        {/* <div className="flex justify-center mb-6">
          <Link 
            href="/en" 
            className="border border-white rounded-md px-4 py-1 text-sm hover:bg-white hover:text-primary-dark transition-colors"
          >
            English
          </Link>
        </div> */}

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Muhammed Aminu Umar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}