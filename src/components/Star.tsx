import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import  star from "../assets/chi6star.png";

function Star() {
  return (
    <motion.div
    animate={{ opacity: 1, scale: .8, rotate: 360 }}
    transition={{
        duration: 3,
        delay: 0.3,
    }}
    initial={{ opacity: 0, scale: .1 }}
    whileHover={{ scale: .5 }}
    >
      <NavLink to="/"><img src={star} className="logo" alt="Jerry Vrabel Development" /></NavLink>
    </motion.div>
  ); 
}

export default Star;

