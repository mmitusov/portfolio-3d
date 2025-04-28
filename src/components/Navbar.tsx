import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";

import { slideIn } from "@/utils/motion";
import { navLinks } from "@/config"
import { logo, menu, close } from "../../public/media"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleNavClick = (title: string, id: string) => {
    setActiveLink(title);
    if (toggleMenu) {
      setToggleMenu(false);
      // Wait for menu to close before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Match this with your menu close animation duration
    } else {
      // If menu is already closed, scroll immediately
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial='hidden' whileInView='show'
      className="paddingX py-4 w-full flex items-center fixed top-0 z-20 bg-primary"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        {/* Для Link плавный переход на ссылку не работает. Работает только на id. Можно попытаться использовать 'next/router' */}
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
        >
          <Link 
            href="/" 
            onClick={() => {
              setActiveLink('');
              window.scrollTo({top: 0, behavior: 'smooth'});
            }} 
            className="flex items-center gap-2"
          >
            <Image
              src={logo}
              height={45}
              alt="logo"
              className="object-contain"
            />
            {/* <p className="flex text-white text-[18px] font-bold cursor-pointer">Maksym Mitusov</p> */}
          </Link>
        </motion.div>

        {/* Navigation menu desktop */}
        <motion.ul
          variants={slideIn("up", "tween", 0.2, 1)}
          className="list-none hidden sm:flex flex-row gap-10"
        >
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                activeLink === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font font-medium cursor-pointer`}
              onClick={() => handleNavClick(link.title, link.id)}
            >
              <Link href={`#${link.id}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Navigation menu mobile (burger menu) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={toggleMenu ? close : menu}
              height={28}
              alt="menu"
              className="object-contain cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </motion.div>

          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed top-[72px] right-0 w-[280px] h-[calc(100vh-72px)] bg-primary/95 backdrop-blur-sm shadow-lg z-10"
              >
                <div className="p-6">
                  <ul className="list-none flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <motion.li 
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className={`${
                          activeLink === link.title
                          ? "text-white"
                          : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[18px] hover:text-white transition-colors duration-200`}
                        onClick={() => handleNavClick(link.title, link.id)}
                      >
                        <Link href={`#${link.id}`}>
                          {link.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar