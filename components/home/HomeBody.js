import { motion } from 'framer-motion';

import { homeBodyVariants } from 'utils/framer/variants';

const HomeBody = () => {
  return (
    <motion.section
      className="w-full lg:w-2/5 lg:h-screen flex flex-col space-y-12 justify-center"
      variants={homeBodyVariants}
    >
      <p className="tw-body">
        Evolve Sport Material nace con el principal objetivo de abastecer con
        material deportivo a todo ese sector de la población interesado en la
        actividad física y que permita sacar el máximo rendimiento a cada
        entrenamiento o readaptación.
      </p>
    </motion.section>
  );
};

export default HomeBody;
