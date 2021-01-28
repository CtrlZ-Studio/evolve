import { easing, pageEasing, mainEasing } from 'utils/framer/easings';

export const mainTransition = {
  duration: 0.6,
  ease: mainEasing,
};

export const pageTransition = {
  duration: 1,
  ease: pageEasing,
  when: 'beforeChildren',
  staggerChildren: 0.3,
};

export const homeTitle1Transition = {
  delay: 0.3,
  duration: 2,
  ease: easing,
};

export const homeTitle2Transition = {
  delay: 0.5,
  duration: 2,
  ease: easing,
};

export const homePhotoTransition = {
  delay: 0.8,
  duration: 2,
  ease: easing,
};

export const homeBodyTransition = {
  delay: 2,
  duration: 2,
  ease: easing,
};

export const bodyTransition = {
  delay: 2,
  duration: 2,
  ease: easing,
  when: 'beforeChildren',
  staggerChildren: 0.3,
};
