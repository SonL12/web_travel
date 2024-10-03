import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[5x0px] text-center mt-12'>
        <span className='text-[#f56551]'>Lorem ipsum dolor sit amet</span> adipisicing elit. Iure, voluptates.</h1>
        <p className='text-xl text-gray-500 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, magnam.</p>

        <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>      
        </Link>
    </div>
  )
}

export default Hero