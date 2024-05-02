import { NavLink } from "react-router-dom";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Navlogin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ลบข้อมูลการเข้าสู่ระบบออกจาก local storage
    localStorage.removeItem("loggedInUser");
    // ทำการ redirect ผู้ใช้ไปยังหน้า login
    navigate("/");
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <NavLink to="/home" className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
          <NavLink to="/table" className="navlink">
            BMI
          </NavLink>
        </ul>
        <div className="log-out-btn">
          <button className="btninin" onClick={handleLogout}>log out</button>
        </div>
      </nav>
    </>
  );
}

export default Navlogin;
