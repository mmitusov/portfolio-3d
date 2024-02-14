import { navLinks } from "@/config"
import { logo, menu, close } from "../../public/media"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState('')
  
  return (
    <nav className="paddingX w-full flex items-center p-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href="/" 
          onClick={() => {setActive(''); window.scrollTo(0,0)}}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          Test
        </Link>
      </div>
    </nav>
  )
}

export default Navbar