import React from "react";




const HeroSection=(props)=>{
    
    return(
        <>
            <div className="section w-full h-[80vh] flex justify-center items-center">
            <div className="container w-[85%] h-full grid  grid-cols-2  place-items-center  gap-8">
                <div className="container_left   flex flex-col justify-start items-start  gap-6">
                    <h1 className=" ">{props.info_1}</h1>
                    <h1 className="text-4xl font-semibold">{props.info_2}</h1>
                    <p className="">{props.info_3}</p>
                    <button className="py-2 px-3 bg-purple-500 text-white mt-10 rounded-md">Hire Me</button>
                </div>
                <div className="container_right  flex justify-center items-center">
                   <img className="w-full h-auto rounded-lg" src={`./images/${props.img}`} alt="" />
                </div>
            </div>
            </div>
        </>
    )
    
}

export default HeroSection;