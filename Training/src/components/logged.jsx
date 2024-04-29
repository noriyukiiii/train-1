import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./nav";

function Logged() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ลบข้อมูลการเข้าสู่ระบบออกจาก local storage
    localStorage.removeItem("loggedInUser");
    // ทำการ redirect ผู้ใช้ไปยังหน้า login
    navigate("/");
  };

  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูลการเข้าสู่ระบบอยู่หรือไม่
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      // หากไม่มี ให้ redirect ผู้ใช้ไปยังหน้า login โดยตรง
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Nav />
      <div className="hello">
        <h1>Loggin สำเร็จแล้วงับ</h1>
        <div className="log-out-btn">
          <button onClick={handleLogout}>log out</button>
        </div>
      </div>
    </>
  );
}

export default Logged;
