import React from "react";



const Map=()=>{

    return(
        <>
           <div className="section w-full h-auto flex flex-col justify-center items-center">
                <h1 className=" py-12 font-semibold text-2xl">Feel Free to Contact Us</h1>
                <div className="map w-full h-auto flex justify-center">
              {  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6953073358045!2d77.35822367409459!3d28.63889268379442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbe223adfe07%3A0x43d634c4ca895e3b!2sNyay%20Khand%203rd%20Indirapuram!5e0!3m2!1sen!2sin!4v1712283026232!5m2!1sen!2sin" width="1400" height="350" ></iframe>}
                </div>
           </div>
        </>
    )
}

export default Map;