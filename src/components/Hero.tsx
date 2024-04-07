import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`flex flex-row items-start absolute inset-0 top-[120px] max-w-7xl mx-auto gap-5 paddingX`}>
        {/* Vertical line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        {/* Main text */}
        <div className="">
          <h1 className="heroHeadText text-white">Hi, I am <span className="text-[#915eff]">Maksym</span></h1>
          <p className="heroSubText mt-2 text-white-100 max-w-[700px]">
            I am passionate Full Stack JavaScript developer, that is passionate in both web development and AI.
          </p>
        </div>
      </div>

        <ComputersCanvas />
    </section>
  )
}

export default Hero