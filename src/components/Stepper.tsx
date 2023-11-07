import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

const checkmarkVariants: Variants = {
  hide: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
  },
};

const checkmarkTransition: Transition = {
  duration: 0.3,
  delay: 0.15,
  ease: 'easeOut',
  type: 'tween',
};

function Stepper({ step, currentStep }: { step: number; currentStep: number }) {
  return (
    <motion.div className="w-8 h-8 rounded-full border-2 border-blue-600 text-blue-600 font-semibold flex items-center justify-center relative">
      <span>{step + 1}</span>
      <AnimatePresence>
        {step < currentStep && (
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <motion.path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
                variants={checkmarkVariants}
                initial={'hide'}
                animate={'show'}
                transition={checkmarkTransition}
               />
            </svg>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Stepper;
