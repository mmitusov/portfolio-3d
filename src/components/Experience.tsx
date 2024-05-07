import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from './hoc/SectionWrapper'
import { experiences } from '@/config'
import { textVariant } from '@/utils/motion'
import useIsInView from "@/hooks/useIsInView";

const Experience = () => {
  const timelineElementRef = useRef(null);
  const isInView = useIsInView(timelineElementRef);


  return (
    <div ref={timelineElementRef}>
      <motion.div variants={textVariant(0.25)}>
        <p className={`sectionSubText text-center`}>
          What I have done so far
        </p>
        <h2 className={`sectionHeadText text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>

          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              
              visible={isInView}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
            >
            
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");