import "../App.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <span>Header Component</span>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
}

export default Header;
