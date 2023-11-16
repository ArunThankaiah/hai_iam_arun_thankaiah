import { useEffect } from 'react'
import project01 from '../asstes/projects/project-01.png'
import project02 from '../asstes/projects/project-02.png'
import project03 from '../asstes/projects/project-03.png'
import project04 from '../asstes/projects/project-04.png'
import Aos from 'aos'

const Project = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
   },[])
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center '>
      <h1 data-aos ='fade-left' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20' >
        <img data-aos ='fade-up' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project01} alt=''/>
        <img data-aos ='fade-down' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project02} alt=''/>
        <img data-aos ='fade-up' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project03} alt=''/>
        <img data-aos ='fade-down' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project04} alt=''/>
      </div>
    </div>
  )
}

export default Project
