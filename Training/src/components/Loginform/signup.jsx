import { useState , useEffect} from "react";
import userData from "./data.json";
import { NavLink, useNavigate } from "react-router-dom";
import './signup.css'
import emailicon from './Assets/email.png'
import usericon from './Assets/person.png'
import passwordlicon from './Assets/password.png'
import Nav from "../Menu/nav";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = userData.users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setIsLoggedin(true);
      alert("logged");
    } else {
      alert("incorrect username or password");
    }
  };

  useEffect(() => {
    if (isLoggedin) {
      navigate("/logged", { state: { username, password } });
    }
  }, [isLoggedin, navigate, password, username]);
  return (<>
    <Nav/>
    <div className="container-2" onSubmit={handleLogin}>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={usericon} alt="" />
                <input type="text" name="username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" required/>
            </div>
            <div className="input">
                <img src={emailicon} alt="" />
                <input type="email" name="email" id="email" placeholder="Email" required ></input>
            </div>
            <div className="input">
                <img src={passwordlicon} alt="" />
                <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" required/>
            </div>
        </div>
        <div className="forgot-password">Lost Password ?<NavLink to={'/register'} className={"navLinak"}>Register</NavLink></div>
        <div className="submit-container">
            <div className="submit"><NavLink to="/regiser" className="signup-btn">Sign up</NavLink></div>
        </div>
    </div>
    </>
  );
};

export default Signup;
