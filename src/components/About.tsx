import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/config'
import { fadeIn, textVariant } from '@/utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(2)}>
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        👋 Hi there! I'm dedicated and passionate AI Full Stack Engineer with 4+ years of hands-on experience in the dynamic world of web development. I began my journey as Full Stack JavaScript Developer, specializing in TypeScript, React.js, Next.js, Node.js and Nest.js. While also complimenting my main stack with the Git, Docker, Redux, Jest, CSS / SCSS / Tailwind, Firebase, SQL, NoSQL and OpenAI API.
        <br/> <br/>
        With time, I also decided to open exciting realm of Python and AI. Additionally mastering LangChain, Vector DB’s, embeddings, LLM’s fine-tuning, RAG, CoT, ToT and much more!
        <br/> <br/>
        💡What excites me most about my work is the ability to make an immediate impact on the world around me. That’s why I keep pursuing innovation and continuously learning new technologies.
        <br/> <br/>
        👨‍💻 Beyond technical proficiency, I firmly believe that a well-rounded developer excels not only in coding mastery but also in the areas of responsibility and communication.
        <br/> <br/>
        🚀 Let's get in touch and explore the ever-evolving landscape of web development together!
      </motion.p>
    </>
  )
}

export default About