import {
  mainTransition,
  pageTransition,
  homeTitle1Transition,
  homeTitle2Transition,
  homePhotoTransition,
  homeBodyTransition,
  parentTransition,
  bodyTransition,
} from 'utils/framer/transitions';

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      pageTransition,
    },
  },
};

export const homeTitle1Variants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: homeTitle1Transition,
  },
};

export const homeTitle2Variants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: homeTitle2Transition,
  },
};

export const homePhotoVariants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: homePhotoTransition,
  },
};

export const homeBodyVariants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: homeBodyTransition,
  },
};

// ----------

export const bodyVariants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: bodyTransition,
  },
};

// ----------

export const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.1,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

export const childVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// ----------

export const headerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: mainTransition,
  },
};

export const drawerVariants = {
  initial: { y: '-100%' },
  animate: (custom) => ({
    y: custom ? 0 : '-100%',
    transition: mainTransition,
  }),
  exit: {
    y: '-100%',
    transition: mainTransition,
  },
};
