import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from './Context'





const Home = () => {


  // const data = {
  //   name : "Akash Bhandari",
  //   image : "hero_img.jpg"
  // }

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> updateHomePage(), []);

  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default Home;
