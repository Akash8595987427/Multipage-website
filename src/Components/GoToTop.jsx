import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";



const GoToTop = () => {

    const listenToScroll=()=>{
      let heightToHidden = 250;
      let winScroll = window.scrollY;

      if(winScroll <= heightToHidden){
        // setError(false)
      }

      console.log(winScroll);
    }

    useEffect(()=>{
      window.addEventListener("scroll", listenToScroll);
      // console.log(error)
    }, [])

    const error = true;
  return (
    <div className="top-btn  {{ error ? 'text-3xl' : 'text-5xl' }} sticky val bottom-0 w-full flex justify-end"  onClick={()=>{window.scrollTo(0, 0)}}>
      <FaArrowAltCircleUp className=""/>
      
    </div>
  )
}

export default GoToTop
