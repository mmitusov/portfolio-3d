import { navLinks } from "@/config"
import { logo, menu, close } from "../../public/media"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav className="paddingX w-full flex items-center p-4 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href="/" 
          onClick={() => {setActive(''); window.scrollTo(0,0)}}
          className="flex items-center gap-2"
        >
          <Image
            src={logo}
            height={45}
            alt="logo"
            className="object-contain"
          />
          Test
        </Link>
      </div>
    </nav>
  )
}

export default Navbar