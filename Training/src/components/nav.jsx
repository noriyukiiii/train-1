import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <NavLink to="/home" className="navlink">Home</NavLink>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
        </ul>
        <NavLink to="/login" className="navlink">Login</NavLink>
    </nav>
    </>
  );
}

export default Nav;
