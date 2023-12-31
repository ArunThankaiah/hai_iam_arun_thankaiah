import Aos from 'aos'
import React, { useEffect } from 'react'

const Skills = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
   },[])
  return (
    <div  id='Skills' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos ='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Skills</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <h2 data-aos ='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>HTML</h2>
        <h2 data-aos ='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>CSS</h2>
        <h2 data-aos ='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>JavaScript</h2>
        <h2 data-aos ='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>Bootstrap</h2>
        <h2 data-aos ='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>React JS</h2>
        <h2 data-aos ='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>Node JS</h2>
        <h2 data-aos ='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>Express</h2>
        <h2 data-aos ='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow  '>Mongo DB</h2>
      </div>
    </div>
  )
}

export default Skills
