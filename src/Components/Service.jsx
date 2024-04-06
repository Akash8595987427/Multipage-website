import React from 'react'
import Api from './api'

const Service = () => {
  return (

    <div className='section w-full h-auto flex flex-col justify-center items-center'>
    <h1 className=' py-12 font-semibold text-2xl'>Our Service</h1>
      <div className="container w-[85%] h-full grid grid-cols-3 gap-x-8 gap-y-16 ">
      {Api.map((obj)=>{
        return(
        <div className="card h-full p-2 shadow-md flex flex-col justify-center items-center gap-4 hover:scale-105" key={obj.id}>
          <div className="img w-full h-56">
          <img src={`/images/${obj.image}`} alt={obj.title} className='w-full h-full bg-contain'/>
          </div>
          <h1 className='font-semibold text-black'>{obj.title}</h1>
          <p>{obj.description}</p>
          <button className='px-2.5 py-1.5 my-4 bg-purple-600 rounded-md text-white '>Click me</button>
        </div>
      )
      })}
      </div>
      
    </div>
  )
}

export default Service
