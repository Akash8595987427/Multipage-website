import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";




const Book_car=()=>{

    return(
        <>

        <div className="book_car_section w-full h-[80vh] flex justify-center items-center">
            <div className="container w-[95%] flex flex-col justify-start items-start p-12 shadow-2xl gap-4 ">
                <h1 className="text-2xl font-bold">Book a Car</h1>
                <div className="book_car_inputsection_1 w-full grid grid-cols-3 gap-5 my-1.5">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaCarSide className="text-xl" /> Select your Car <span className="text-lg font-bold text-orange-600">*</span></div>
                        <input type="text" placeholder="Select your car type" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaLocationDot className="text-xl" /> Pick up <span className="text-lg font-bold text-orange-600">*</span></div>
                        <input type="text" placeholder="Select pick up location" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaLocationDot className="text-xl"/>  Drof off <span className="text-lg font-bold text-orange-600">*</span></div>
                        <input type="text" placeholder="Select drop off location" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                </div>
                <div className="book_car_inputsection_1 w-full grid grid-cols-3 gap-5 my-1">
                    <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-center gap-3"><SlCalender className="text-xl" />Pick up* </div>
                        <input type="date" placeholder="Select your car type" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-center gap-3"> <SlCalender className="text-xl" />Drop-off* </div>
                        <input type="date" placeholder="Select drop off location" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col py-7">
                        <button className="px-5 py-4 bg-orange-600 text-white rounded-sm">Search</button>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Book_car