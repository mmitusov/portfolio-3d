import { BallCanvas } from "./canvas";
import SectionWrapper from './hoc/SectionWrapper'
import { technologies } from "@/config";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        technology.name && technology.icon ?
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        :
          <div>Err: Some tech property is missing</div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");