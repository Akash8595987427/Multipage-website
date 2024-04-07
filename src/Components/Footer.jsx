import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <div className=" section w-full h-[60vh] flex flex-col justify-center items-center relative bg-blue-950 mt-36">
    <div className='box w-[80%] h-[20vh] flex flex-row justify-between items-center px-16 bg-white absolute top-[-22%] rounded-lg shadow-2xl'>
      <div className='box_inside'>
      <p>Ready to get started ?</p>
      <p>Talk to use today</p>
      </div>
      <NavLink to="/" onClick={()=>{window.scrollTo(0, 0)}}> <button className='px-3.5 py-2 rounded-md bg-purple-600 text-white'>Get Started</button> </NavLink>
    </div>
      <div className="footer w-[80%] h-full flex justify-center items-center ">
        <div className="top_panel grid grid-cols-4 place-items-center px-8 gap-8">

          <div className="top_panel_1 w-full h-full flex flex-col justify-start items-start text-start text-sm  gap-3">
            <h1 className='text-white w-full '>Technical Website</h1>
            <p className='text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="top_panel_2  w-full h-full flex flex-col justify-start items-start text-sm gap-3">
                <h1 className='text-white w-full'>Subscriber to get important updates</h1>
                <form action="#">
                  <input className='px-1 py-1.5 mb-4' type="email" placeholder='Your Email' />
                  <input type="submit" value = "Subscribe" className=' py-1 px-2 bg-purple-600 rounded-md text-white'/>
                </form>
               
          </div>

          <div className="top_panel_3 w-full h-full flex flex-col justify-start items-start text-sm gap-3">
            <h1 className='text-white text-start w-full'> Follow us </h1>
            <div className=" w-full panel_3_logo flex flex-row gap-3 text-2xl">
            <a href="https://discord.com" target='_blank'>  <FaDiscord className='text-white' />    </a>
            <a href="https://instagram.com" target='_blank'>  <FaInstagram className='text-white' />  </a>
            <a href="https://youtube.com" target='_blank'> <IoLogoYoutube className='text-white' />  </a>
            </div>
          </div>

          <div className="top_panel_4  w-full h-full flex flex-col justify-start items-start text-sm gap-6">
           <h1 className='text-white'> Call us </h1>
            <p className='text-white'>+91 1234567890</p>
          </div>
        </div>
      
      </div>
      <hr className='w-full border-l-yellow-50' />
      <div className="footer_2   w-[80%] h-[30vh] grid grid-cols-2 justify-start items-center text-white">
        <p>&copy; {new Date().getFullYear()} Technical Website . All Right Reserved</p>
        <div className='px-8'>
          <p>PRIVACY POLICY</p>
          <p> TERMS & CONDITIONS </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
