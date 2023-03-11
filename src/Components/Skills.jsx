import React from 'react'

import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import react from '../assets/react.png';
import Html from '../assets/html.png';
import Tailwind from '../assets/tailwind.png';
import Javascript from '../assets/javascript.png';



function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#1e293b] ' >

        <div className=' max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center'>
            <div className='sm:text-center pb-8 py-2 px-4' >
                <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600 text-white'>Skills</p>
                <p className=' py-6 text-4xl font-bold  text-[#ccd6f6]'>Technologies currently work with</p>
            </div>


            <div className='w-full grid grid-cols-3 sm:grid-col-4 gap-4 text-center py-9'>
                <div className='shadow-md shadow-[#032c161] hover:scale-110 duration-500'>
                    <img src={Html} className="w-10 mx-auto" alt='React' />
                    <p>Html5</p>
                </div>
                <div className='shadow-md shadow-[#048c161] hover:scale-110 duration-500'>
                    <img src={CSS} className="w-10 mx-auto" alt='React' />
                    <p>CSS3</p>
                </div>
                <div className='shadow-md shadow-[#048c161] hover:scale-110 duration-500'>
                    <img src={Tailwind} className="w-10 mx-auto" alt='React' />
                    <p>Tailwind Css</p>
                </div>
                <div className='shadow-md shadow-[#048c161] hover:scale-110 duration-500'>
                    <img src={Javascript} className="w-10 mx-auto" alt='React' />
                    <p>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#048c161] hover:scale-110 duration-500'>
                    <img src={react} className="w-10 mx-auto" alt='React' />
                    <p>React js</p>
                </div>
                
                <div className='shadow-md shadow-[#048c161] hover:scale-110 duration-500'>
                    <img src={Github} className="w-10 mx-auto" alt='React' />
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills