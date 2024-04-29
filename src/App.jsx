import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vehicle_model from "./Pages/Vehicle_models";
import Testimonial from "./Pages/Testimonial";
import Our_team from "./Pages/Our_team";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";




const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle_model" element={<Vehicle_model />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/our_team" element={<Our_team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;