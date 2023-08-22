import React from 'react'
import Home from './contentbody/Home';
import Work from './contentbody/Work';
import Schedule from './contentbody/Schedule';
import About from './contentbody/About';
import Contact from './contentbody/Contact';

function Mainbody() {
  return (
    <div className='absolute top-0 left-20 bottom-0 right-0 overflow-hidden'>
      <Home />
      <Work />
      <Schedule />
      <About />
      <Contact />
    </div>
  )
}

export default Mainbody
