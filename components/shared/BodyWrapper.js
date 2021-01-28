import { motion } from 'framer-motion';
import { parentVariants } from 'utils/framer/variants';

const BodyWrapper = ({ children }) => {
  return (
    <motion.section
      className="w-full lg:w-2/5 lg:h-screen flex flex-col items-center justify-center"
      variants={parentVariants}
    >
      {children}
    </motion.section>
  );
};

export default BodyWrapper;
