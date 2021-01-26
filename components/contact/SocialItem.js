import { motion } from 'framer-motion';

import { childVariants } from 'utils/framer';

const SocialItem = ({ label, link, name }) => {
  return (
    <motion.div
      className="flex flex-col space-y-1 lg:space-y-3 text-gray-600"
      variants={childVariants}
    >
      <h2 className="text-base lg:text-lg 2xl:text-xl font-bold">{label}</h2>
      <a className="text-lg lg:text-xl 2xl:text-2xl" href={link}>
        {name}
      </a>
    </motion.div>
  );
};

export default SocialItem;
