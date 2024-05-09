import { useState, useEffect } from "react";
import userData from "./data.json";
import { useNavigate } from "react-router-dom";
import usericon from "./Assets/person.png";
import passwordlicon from "./Assets/password.png";
import Nav from "../Menu/nav";
import Imagebackground from "./Assets/background.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      // ถ้ามีผู้ใช้ที่เข้าสู่ระบบอยู่แล้ว ให้ทำการ redirect ไปยังหน้าที่เหมาะสม
      navigate("/logged");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = userData.users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setIsLoggedin(true);
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    } else {
      alert("incorrect username or password");
    }
  };

  useEffect(() => {
    if (isLoggedin) {
      navigate("/logged", { state: { username, password } });
    }
  }, [isLoggedin, navigate, password, username]);
  return (
    <>
      <Nav />
      <div
        className="flex min-h-screen justify-center font-main bg-cover"
        style={{
          backgroundImage: `url(${Imagebackground})`,
        }}
      >
        <form
          className="bg-white w-fit h-fit p-10 text-center flex flex-col items-center justify-center m-auto rounded-3xl"
          onSubmit={handleLogin}
        >
          <label className="text-black text-4xl mb-10 font-semibold">
            Login
          </label>
          <div className="">
            <div className="text-left pl-8 text-xl">
              <label>Username</label>
            </div>
            <div className="flex flex-row my-auto">
              <img src={usericon} alt="" className="w-auto h-5 my-auto" />
              <input
                type="text"
                name="username"
                id="username"
                className="m-2 h-12 w-96 rounded-xl mb-5 text-xl pl-3 bg-gray-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="text-left pl-8 text-xl">
              <label>Password</label>
            </div>
            <div className="flex flex-row my-auto">
              <img src={passwordlicon} alt="" className="w-auto h-5 my-auto" />
              <input
                type="password"
                name="password"
                id="password"
                className="m-2 h-12 w-96 rounded-xl mb-5 text-xl pl-3 bg-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <button
              className="m-2 bg-green-400 text-white rounded mb-8 px-5"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="m-2 bg-gray-400 text-white rounded mb-8 px-5"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
