import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from './hoc/SectionWrapper'
import useIsInView from "@/hooks/useIsInView";
import { experiences } from '@/config'
import { textVariant } from '@/utils/motion'
import Image from "next/image";

// Чтобы и заморачиваться, оспользуемся готовой библиотекой для отображения нашего опыта работы
// Компонент библиотеки имеет параметр "visible={}". 
// И желательно мы хотим чтобы ее елементы появлялись с анимацией, только когда мы до них доскролим, а не сразу во время рендера
// Для этого создадим кастомный хук useIsInView. И как только мы доскролим до секции Experience, он поменяет ее параметр на "visible={true}"
const Experience = () => {
  const timelineElementRef = useRef<HTMLInputElement | null>(null);
  const isInView = useIsInView(timelineElementRef);

  return (
    <div ref={timelineElementRef}>
      <motion.div variants={textVariant(0.25)}>
        <h2 className={`sectionHeadText text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className="vertical-timeline-fix">

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
                experience.icon ?
                  <div className='flex justify-center items-center w-full h-full'>
                    <Image
                      src={experience.icon}
                      alt="experience.company_name"
                      className='w-[75%] h-[75%] object-contain'
                    />
                  </div>
                : 
                  <div />
              }
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}

        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");