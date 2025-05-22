import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content container with higher z-index */}
      <div className="relative z-10">
        <div className={`flex flex-row items-start absolute inset-0 top-[120px] max-w-7xl mx-auto gap-5 paddingX`}>
          {/* Vertical line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>

          {/* Main text */}
          <div className="relative z-20">
            <h1 className="heroHeadText text-white">Hi, I am <span className="text-[#915eff]">Maksym</span></h1>
            <p className="heroSubText mt-2 text-white-100 max-w-[750px]">
              I am experienced AI Full Stack Engineer (TypeScript & Python), 
              with more than 4+ years of professional journey behind my back
            </p>
          </div>
        </div>
      </div>

      {/* 3D Canvas with lower z-index */}
      <div className="absolute bottom-20 w-full h-[350px] sm:h-[600px] sm:bottom-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Button to scroll to the next section animated with the framer motion - moved outside main content container */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-25">
        <Link href={"#about"}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // We wan to animate only 'y' axis
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // Object that we want to animate
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero