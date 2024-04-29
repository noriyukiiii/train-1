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
import Login from "./components/login";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Logged from "./components/logged";
import Register from "./components/register";
import Nav from "./components/nav";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="navbar" element={<Nav/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
