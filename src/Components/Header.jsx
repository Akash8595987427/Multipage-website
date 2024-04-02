import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="section w-full h-16 flex justify-center items-center bg-slate-100 ">
      <div className="navbar w-[85%] h-full  flex justify-between items-center  font-sans">
          <div className="nav_logo ">
              <NavLink className="font-bold text-xl" to="/">Akash</NavLink>
          </div>
          <div className="nav_info flex justify-evenly gap-16 items-center">
              <NavLink className="list-none hover:text-blue-700 hover:font-semibold" to="/">Home</NavLink>
              <NavLink className="list-none hover:text-blue-700 hover:font-semibold" to="/about">About</NavLink>
              <NavLink className="list-none hover:text-blue-700 hover:font-semibold" to="/service">Service</NavLink>
              <NavLink className="list-none hover:text-blue-700 hover:font-semibold" to="/contact">Contact</NavLink>
          </div>

      </div>
    </div>

)}

export default Header
