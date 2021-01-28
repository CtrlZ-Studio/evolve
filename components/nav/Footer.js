import { motion } from 'framer-motion';

import { headerVariants } from 'utils/framer/variants';

const Footer = () => {
  return (
    <motion.div
      className="static lg:fixed bottom-0 left-0 right-0 flex justify-center mt-12 lg:mt-0 py-3 lg:py-4 2xl:py-6 text-xs lg:text-sm text-gray-300"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div>
        Powered by{' '}
        <a
          href="https://ctrl-z.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ctrl-Z Studio
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
