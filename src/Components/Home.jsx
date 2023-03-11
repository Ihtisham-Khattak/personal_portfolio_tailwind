import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='bg-[#1e293b]  w-full h-screen'>

    {/* Container For Name INFO */}
    <div className="max-w-[1000px] mx-auto px-8 py-[10rem] justiy-center h-full flex flex-col">

    <p className='text-pink-600 sm:text-4xl'>Hi, My name is</p>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ihtesham Khattak</h2>
    <p className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm Frontend developer</p>
    <p className='text-[#8892b0] py-4 max-w-[550px]'>To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Web Design, Front-End Web Development, Software, and CMS/e-Commerce and use these skills in providing quality service to the company.
    </p>

    <div>
      <button className=' group text-white border-2 px-6 py-2 my-2 flex font-bold justiy-between items-center hover:bg-pink-600 hover:border-pink-600' type='submit'> 
      

        <span className='group-hover:rotate-360 duration-300'> <HiArrowNarrowRight className='ml-3' /> </span>

      </button>
    </div>
    </div>

   



    </div>
  )
}

export default Home