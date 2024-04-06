import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import "./App.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";



const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />

      </Routes>

      <Footer/>
    </BrowserRouter>

    


    </>
  )
}

export default App;