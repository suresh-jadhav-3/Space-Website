import React, { useEffect } from 'react'
import bgVideo from './assets/earth-bg.mp4'
import {Navbar, Hero, Services, Banner, Footer} from './components'
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing:"ease-in-out"
    })
  }, [])

  return (
    <div >
      <div className='h-[700px] relative'>
          <video 
          autoPlay
          loop
          muted
          className='fixed right-0 top-0
          h-[700px] w-full object-cover z-[-1]'
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <Navbar/>
          <Hero/>
      </div>
      <Services/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App