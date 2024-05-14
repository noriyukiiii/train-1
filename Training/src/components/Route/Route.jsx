
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "/src/components/Loginform/login"
import Contact from "/src/components/Menu/contact";
import About from "/src/components/Menu/about";
import Nav from "/src/components/Menu/nav";
import Signup from "/src/components/Loginform/signup";
import Homeside from "/src/components/sidebar/homeside";
import Bmiside from "/src/components/sidebar/addtableside/bmiside";
import Calside from "/src/components/sidebar/calside";
import Home_main from "/src/components/Menu/Homepage/Home_main";
import Bmical from "../sidebar/Bmical";

const AppRoutes = () => {
  return (
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
        <Route path="/bmical" element={<Bmical />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="navbar" element={<Nav/>}/>
        <Route path="/table" element={<Bmiside/>}/>
        <Route path="/cal" element={<Calside/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
