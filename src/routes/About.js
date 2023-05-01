import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  const heading = "About";
  const text = "i am a Full Stack Developer";
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={heading} text={text} />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
