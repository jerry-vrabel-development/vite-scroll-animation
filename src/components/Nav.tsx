import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Nav = () => {
  return (
    <motion.ul initial="hidden" animate="visible">
      {menuItems.map((item, index) => (
        <motion.li
          key={item.name}
          custom={index}
          variants={menuItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink
            to={item.to}
            activeClassName="active"
            exact
          >
            {item.name}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Nav;
