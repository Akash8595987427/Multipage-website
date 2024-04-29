import React from "react";
import { FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Navbar=()=>{
    return(
        <>

        <div className="navbar_section w-full h-[13vh] bg-red-600  text-white flex justify-center items-center">
            <div className="container w-[95%] h-full flex justify-between items-center">
                <div className="nav_icon flex gap-3">
                    <FaCar className="text-4xl "/>
                    <h1 className="text-2xl font-semibold">Car Rental</h1>
                </div>
                <div className="nav_info flex justify-center list-none gap-6 font-semibold">
                    <NavLink to="/"><li>Home</li></NavLink>
                     <NavLink to="/about"><li>About</li></NavLink>
                     <NavLink to="vehicle_model"><li>Vehicle Model</li></NavLink>
                     <NavLink to="testimonial"><li>Testimonial</li></NavLink>
                     <NavLink to="our_team"><li>Our Team</li></NavLink>
                     <NavLink to="contact"><li>Contact</li></NavLink>
                </div>
                <div className="nav_singup flex gap-6 text-lg font-semibold">
                    <NavLink to="signin"><button>Sign In</button></NavLink>
                    <NavLink to="register"><button>Register</button></NavLink>
                </div>
            </div>
        </div>


        </>
    )
}

export default Navbar;