import { motion } from "framer-motion";
import  star from "../assets/chi6star.png";

function Star() {
  return (
    <motion.div
    animate={{ opacity: 1, scale: 1, rotate: 360 }}
    transition={{
        duration: 3,
        delay: 0.3,
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ scale: 1.2 }}
    >
      <img src={star} className="logo" alt="Jerry Vrabel Development" />
    </motion.div>
  ); 
}

export default Star;

