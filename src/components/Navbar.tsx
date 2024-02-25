import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/config"
import { logo, menu, close } from "../../public/media"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="paddingX py-4 w-full flex items-center fixed top-0 z-20 bg-primary">
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
          <p className="flex text-white text-[18px] font-bold cursor-pointer">Maksym Mitusov</p>
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
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggleMenu ? close : menu}
            height={28}
            alt="menu"
            className="object-contain cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          <div className={`${ !toggleMenu ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
            }
          >
            <ul className="list-none flex flex-col gap-4"> {/* maybe also add: justify-end items-start */}
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${
                    activeLink === link.title
                    ? "text-white"
                    : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActiveLink(link.title);
                    setToggleMenu(!toggleMenu)
                  }}
                >
                  <Link href={`#${link.id}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar