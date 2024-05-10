import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className="font-main flex justify-between text-center p-3 pr-5 bg-blue-900 sticky top-0 z-1">
      <ul className="flex justify-between">
        <NavLink to="/home" className="bg-sky-500 text-white mr-4 p-2 rounded-xl hover:bg-sky-600 ">Home</NavLink>
        <NavLink to="/about" className="bg-sky-500 text-white mr-4 p-2 rounded-xl hover:bg-sky-600">About</NavLink>
        <NavLink to="/contact" className="bg-sky-500 text-white mr-4 p-2 rounded-xl hover:bg-sky-600">Contact</NavLink>
        </ul>
        <NavLink to="/login" className="bg-sky-500 text-white mr-4 p-2 rounded-xl hover:bg-sky-600">Login</NavLink>
    </nav>
    </>
  );
}

export default Nav;
