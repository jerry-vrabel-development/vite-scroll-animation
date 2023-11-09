import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {opacity: 1, x: 0, transition: { delay: 0.1}},
};

const Nav = () => {
  return (
    <motion.ul initial="hidden" className="nav-list"animate="visible">
        <motion.li
          variants={menuItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to= '/' className={({ isActive }) => isActive ? 'active' : undefined} end>
            Home
          </NavLink>
        </motion.li>
        <motion.li
          variants={menuItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to= '/about' className={({ isActive }) => isActive ? 'active' : undefined} end>
            About
          </NavLink>
        </motion.li>
        <motion.li
          variants={menuItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to= '/contact' className={({ isActive }) => isActive ? 'active' : undefined} end>
            Contact
          </NavLink>
        </motion.li>
    </motion.ul>
  );
};

export default Nav;
