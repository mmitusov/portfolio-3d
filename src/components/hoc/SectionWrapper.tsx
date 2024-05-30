import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

// HOC - это функция, что возвращает функцию, что возвращает компонент
// React.ComponentType - типизация входящих Реакт компонентов
// Этот HOC отвечает не только за стилизацию, но и за применение "framer-motion" параметров ко всем дочерним компонентам
// "motion.section" можно заменить и на "motion.div", главное чтобы была обертка над другими "motion. " компонентами
const SectionWrapper = (Component: React.ComponentType, sectionId: string) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`padding max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={sectionId}>
          &nbsp; {/* Render empty space */}
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
