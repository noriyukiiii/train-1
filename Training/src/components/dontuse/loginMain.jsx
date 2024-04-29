import { useState } from "react";
import userData from "./data.json";
import { NavLink, useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
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

  if (isLoggedin) {
    navigate("/logged", { state: { username, password } });
  }

  return (
    <body className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inputbox">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="registerlink">
          <p>
            Don`t Have an account?
            <NavLink to="/register" className="register">
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </body>
  );
};

export default Login;
