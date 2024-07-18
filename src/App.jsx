import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from "./component/Hero"


function App() {


  return (
    <>
      <div className='bg-gradient-to-r from-[#EBF3F5] to-[#C5E2F0] h-full'>
        <Navbar />
        <Hero />
      </div>

    </>
  )
}

export default App
