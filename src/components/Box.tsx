import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Box = () => {
  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
    animate={{ x: 100 }}
    initial={{x: 0}}
    variants={boxVariant}
    className="box"
    >
      <h1>Hello Jerks</h1>
    </motion.div>
  );
};

export default Box;
