import { Link, useNavigate } from "react-router-dom";
import Nav from "./nav";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <>
      <Nav/> 
      <h1>หน้า Contact นะคับ</h1>
      <Link to="/" state={"Hello from contact"}>
        hello
      </Link>
      <div>
        <button onClick={() => navigate("/")}>redirect</button>
      </div>
    </>
  );
};

export default Contact;
