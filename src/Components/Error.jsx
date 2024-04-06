
import React from "react";
import { NavLink } from "react-router-dom";




const Error=()=>{
    
    return(
        <>
    {/* Creating the Error 404 page in the React js  */}
            <div className="section w-full h-[100vh] flex justify-center items-center">
                <div className="container w-[45%] h-[80vh] flex flex-col justify-start items-center gap-4 ">
                    <img src="../public/images/error_img.jpg" alt="erro img" />
                    <NavLink to="/"><button className="my-8 px-3 py-2.5 text-white rounded-md bg-purple-600">Go Back</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Error;