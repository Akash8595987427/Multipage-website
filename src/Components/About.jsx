import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from './Context'

const About = () => {
  const {updateAboutPage} = useGlobalContext();

  useEffect(()=>{
    updateAboutPage();
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
