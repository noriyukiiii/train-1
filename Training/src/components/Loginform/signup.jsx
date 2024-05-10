import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import usericon from "./Assets/person.png";
import passwordlicon from "./Assets/password.png";
import Nav from "../Menu/nav";
import Imagebackground from "./Assets/background.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();


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
        >
          <label className="text-black text-4xl mb-10 font-semibold">
            Login
          </label>
          <div className="">
            <div className="text-left pl-8 text-xl">
              <label>Username</label>
            </div>
            <div className="flex flex-row my-auto mb-4">
              <img src={usericon} alt="" className="w-auto h-5 my-auto" />
              <input
                type="text"
                name="username"
                id="username"
                className="m-2 h-12 w-96 rounded-xl text-xl pl-3 bg-gray-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="text-left pl-8 text-xl">
              <label>Password</label>
            </div>
            <div className="flex flex-row my-auto mb-4">
              <img src={passwordlicon} alt="" className="w-auto h-5 my-auto" />
              <input
                type="password"
                name="password"
                id="password"
                className="m-2 h-12 w-96 rounded-xl text-xl pl-3 bg-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <button
              className="m-2 bg-gray-400 text-white rounded mb-8 px-5 py-2"
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

export default Signup;
