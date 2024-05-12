/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//component
import Login from "./components/Loginform/login";
import Contact from "./components/Menu/contact";
import About from "./components/Menu/about";
import Nav from "./components/Menu/nav";
import Signup from "./components/Loginform/signup";
import Bmiside from "./components/sidebar/bmiside";
import Loggedside from "./components/sidebar/loggedside";
import Homeside from "./components/sidebar/homeside";
import Calside from "./components/sidebar/calside";
import Home_main from "./components/Menu/Homepage/Home_main";

function App() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path="/" element={<Home_main />} />
          <Route path="/homeside" element={<Homeside />} />
          <Route path="/home" element={<Home_main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logged" element={<Homeside />} />
          <Route path="/bmical" element={<Loggedside />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="navbar" element={<Nav/>}/>
          <Route path="/table" element={<Bmiside/>}/>
          <Route path="/cal" element={<Calside/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
