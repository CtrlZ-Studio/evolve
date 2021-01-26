import Image from 'next/image';
import { motion } from 'framer-motion';

import { pageVariants, childVariants } from 'utils/framer';

const HomeHero = () => {
  return (
    <section className="relative h-screen-75 lg:h-screen w-full lg:w-2/5 flex items-center justify-center">
      <div className="absolute right-1/3 top-1/4 flex flex-col lg:space-y-3 z-50 text-2xl lg:text-5xl 2xl:text-6xl text-gray-600 font-bold">
        <motion.h1 variants={childVariants}>somos</motion.h1>

        <motion.h1
          className="ml-12 font-header tracking-tighter"
          variants={childVariants}
        >
          Evolve.
        </motion.h1>
      </div>

      <motion.div
        className="w-full h-full flex flex-col justify-center lg:p-12"
        variants={childVariants}
      >
        <Image
          src="/home-hero.png"
          layout="responsive"
          height={3}
          width={2}
          objectFit="contain"
          objectPosition="center"
        />
      </motion.div>
    </section>
  );
};

export default HomeHero;
