import { navLinks } from "@/config"
import { logo, menu, close } from "../../public/media"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')

  return (
    <nav className="paddingX w-full flex items-center p-4 fixed top-0 z-20 bg-primary">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => {setActiveLink(''); window.scrollTo(0,0)}}
          className="flex items-center gap-2"
        >
          <Image
            src={logo}
            height={45}
            alt="logo"
            className="object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">Maksym Mitusov</p>
        </Link>

        {/* Navigation menu desktop */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                activeLink === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font font-medium cursor-pointer`}
              onClick={() => setActiveLink(link.title)}
            >
              <Link href={`#${link.id}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Navigation menu mobile (burger menu) */}
        <div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar