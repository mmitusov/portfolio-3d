import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import SectionWrapper from './hoc/SectionWrapper';
import { workProjects } from '@/config';
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <h2 className='sectionHeadText'> My Work </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Please take a look at the projects that I've worked on throughout my career.
          Each project is briefly described and has code repository links or/and live demos. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>

        {workProjects.map((project, index) => (
          <motion.div key={`project-${index}`} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              options={{
                max: 5,
                scale: 1.02,
                speed: 2000,
              }}
              className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
              <div className='relative w-full h-[230px]'>
                <Image
                  src={project.image}
                  alt='project image'
                  className='w-full h-full object-cover rounded-2xl'
                />
      
                {project.project_link_logo && (
                  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div
                      onClick={() => window.open(project.source_code_link, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <Image
                        src={project.project_link_logo}
                        alt='source code'
                        className='w-[60%] h-auto object-contain'
                      />
                    </div>
                  </div>
                )}
              </div>
      
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
              </div>
      
              <div className='mt-4 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <p
                    key={`${project.name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(Works, "");