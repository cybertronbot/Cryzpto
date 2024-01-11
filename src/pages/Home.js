import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Investors from '../components/Investors'

function Home() {
  return (
    <div className='h-[100vh] '>
        <Navbar/>
        <Hero/>
    <AboutUs/>
    <Investors/>
      
        
    </div>
  )
}

export default Home
