import SectionWrapper from './hoc/SectionWrapper'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/config'
import { fadeIn, textVariant } from '@/utils/motion'

// Корневые параметры "framer-motion" находятся в HOC компоненте - SectionWrapper
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <h2 className='sectionHeadText'>Introduction</h2>
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

      {/* Прописываем анимацию контента внутри наших карточек воспользуемся "index * 0.5", чтобы анимация каждой последующей карточки появлялась по очереди с одинаковой задержкой */}
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Tilt 
            key={service.title} 
            className='xs:w-[250px] w-full'
            options={{
              max: 15,
              scale: 1.03,
              speed: 2500,
            }}
          >
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <Image
                  src={service.icon}
                  alt='web-development'
                  className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")