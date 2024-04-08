import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from './Context'
import Service from './Service';
import Contact from './Contact'





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
      <Service/>
      <Contact/>
    </div>
  )
}

export default Home;
