import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
     <>
     <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-10 " >
     <div className='flex flex-col md:flex-row'>
     <div className='md:w-1/2 mt-10 md:mt-12 space-y-2 md:ml-24 order-2 md:order-1'>
        <span className='text-2xl'>Hello, My name is   </span>
        <h1 className=' space-x-2 text-2xl md:text-4xl font-bold'>Saurabh Singh</h1>
        <div className='flex space-x-2 text-2xl md:text-4xl '>
        <span>and I'm a</span>
        {/*<span className='text-red-700 font-bold '>Developer</span>*/}
        <ReactTyped
          className='text-red-700 font-bold '
          strings={["Developer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br/>
        <p className='text-sm md:text-xl text-justify'>
            A Full Stack Developer designs, builds, and maintains both the front-end and back-end of web applications, ensuring seamless user experiences and efficient server functionality. Skilled in multiple programming languages and frameworks.</p>
        <br/>
        {/*Social media icon*/}
        <div className='flex flex-col md:flex-row items-center justify-between mr-10 space-y-6 md:space-y-0 '>
        <div className='space-y-2 '>
            <h1 className='text-xl font-bold'>Available on</h1>
            <div className='flex space-x-4  text-2xl cursor-pointer '>
            <a href="https://x.com/SaurabhSingh090" rel="noopener" target="_blank"><FaSquareXTwitter /></a>
            <a href="https://www.linkedin.com/in/saurabh-singh-b30333260/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Saurabhh6393" target="_blank"><FaSquareGithub /></a>
            </div>
           
        </div>
        <div>
            <buuton>Download CV</buuton>
        </div>
        </div>
     </div >
     <div className="md:w-1/2 md:ml-48 md:mt-8 mt-12 sm:order-1 md:order-2 mt-1">
        <img src='portpicjpg.jpg' className='rounded md:w-[400px] md:h-[550px] h-[300px] w-[350px]' alt=''/>
     </div>
     </div>
     </div>
     <hr/>
    </>
  )
}

export default Home
