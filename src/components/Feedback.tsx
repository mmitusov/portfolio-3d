import Image from "next/image";
import { motion } from "framer-motion";

import SectionWrapper from './hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/utils/motion'
import { testimonials } from "@/config";

const Feedback = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`padding bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant(0.25)}>
          <h2 className='sectionHeadText'>Testimonials</h2>
        </motion.div>
      </div>
      
      <div className={`paddingX -mt-20 pb-14 flex flex-wrap gap-7`}>

        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
          >
            <p className='text-white font-black text-[48px]'>"</p>
        
            <div className='mt-1'>
              <p className='text-white tracking-wider text-[18px]'>{testimonial.testimonial}</p>
        
              <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                  <p className='text-white font-medium text-[16px]'>
                    <span className='blue-text-gradient'>@</span> {testimonial.name}
                  </p>
                  <p className='mt-1 text-secondary text-[12px]'>
                    {testimonial.designation} of {testimonial.company}
                  </p>
                </div>
                <Image
                  width={10} height={10}
                  src={testimonial.image}
                  alt={`feedback_by-${testimonial.name}`}
                  className='w-10 h-10 rounded-full object-cover'
                />
              </div>
            </div>
          </motion.div>
        ))}
        
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "");