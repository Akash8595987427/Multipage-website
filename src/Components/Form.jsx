import React from "react";



const Form=()=>{
    return(
        <>
                <form action="https://formspree.io/f/xwkgweow" method="POST">
            <div className="section w-full h-auto flex justify-center ">
                <div className="container w-[30%] flex flex-col justify-center items-center gap-2 py-12">
                <label htmlFor="username"></label>
                <input className="w-[100%] py-1.5 px-3 border-2 border-gray-500 rounded-md gap-3" type="text" placeholder="Username" id="username" name="username" autoComplete="off"/>
                <label htmlFor="email"></label>
                <input className="w-[100%] py-1.5 px-3 border-2 border-gray-500 rounded-md gap-3" type="text" placeholder="Email" id="email" name="email" autoComplete="off"/>
                <label htmlFor="textarea"></label>
                <textarea className="w-[100%]  py-1.5 px-3  border-2 border-gray-500 rounded-md gap-3 " placeholder="Enter you Message" name="textarea" id="" cols="30" rows="10"></textarea>
                <div className="btn w-full flex justify-start">
                    <button className='px-5 py-1.5 mt-5 bg-purple-600 rounded-md text-white justify hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-600'> Send </button>
                </div>
                </div>
            </div>
                </form>
        </>
    )
}

export default Form;