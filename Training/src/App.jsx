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
import Login from "./components/Loginform/login";
import Home from "./components/Menu/home";
import Contact from "./components/Menu/contact";
import About from "./components/Menu/about";
import Register from "./components/Loginform/register";
import Nav from "./components/Menu/nav";
import Signup from "./components/Loginform/signup";
import Bmiside from "./components/sidebar/bmiside";
import Loggedside from "./components/sidebar/loggedside";
import Homeside from "./components/sidebar/homeside";

function App() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeside" element={<Homeside />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logged" element={<Loggedside />} />
          <Route path="/bmical" element={<Loggedside />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="navbar" element={<Nav/>}/>
          <Route path="/table" element={<Bmiside/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
