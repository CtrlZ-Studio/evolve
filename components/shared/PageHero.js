import Image from 'next/image';
import { motion } from 'framer-motion';

import { homeTitle1Variants, homePhotoVariants } from 'utils/framer/variants';

const PageHero = ({ heroTitle, heroImage }) => {
  return (
    <section className="relative h-screen-75 lg:h-screen w-full lg:w-2/5 flex items-center justify-center lg:mt-0">
      <div className="absolute flex flex-col lg:space-y-3 z-50 text-2xl lg:text-5xl 2xl:text-6xl text-gray-600 font-bold">
        <motion.h1
          className="z-50 text-4xl lg:text-7xl 2xl:text-8xl text-gray-600 font-bold tracking-wider"
          variants={homeTitle1Variants}
        >
          {heroTitle}
        </motion.h1>
      </div>

      <motion.div
        className="w-full h-full flex flex-col justify-center"
        variants={homePhotoVariants}
      >
        <Image
          className="opacity-50"
          alt="Persona realizando actividad física."
          src={`/${heroImage}`}
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

export default PageHero;
