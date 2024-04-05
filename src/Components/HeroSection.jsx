import React from "react";
import { useGlobalContext } from "./Context";




const HeroSection=()=>{
    const {name, image} = useGlobalContext();


    
    return(
        <>
            <div className="section w-full h-[80vh] flex justify-center items-center">
            <div className="container w-[85%] h-full grid  grid-cols-2  place-items-center  gap-8">
                <div className="container_left   flex flex-col justify-start items-start  gap-6">
                    <h1 className=" "> This is Me </h1>
                    <h1 className="text-4xl font-semibold">{name}</h1>
                    <p className=""> "I'm Akash Singh Bhandari . A Front end Web Developer and freelancer and the Fourth year student of the Btech" </p>
                    <button className="py-2 px-3 bg-purple-600 text-white mt-10 rounded-md">Hire Me</button>
                </div>
                <div className="container_right  flex justify-center items-center">
                   <img className="w-full h-auto rounded-lg" src={`./images/${image}`} alt="" />
                </div>
            </div>
            </div>
        </>
    )
    
}

export default HeroSection;