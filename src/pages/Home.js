import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <div className='h-[100vh] '>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        
    </div>
  )
}

export default Home