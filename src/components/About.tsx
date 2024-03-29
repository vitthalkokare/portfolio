import React from 'react'
import { FaLinkedinIn , FaTwitter,FaGithub} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Image from 'next/image';
import img1 from '.././../public/coverimg.png'
import SocilLinks from './Sociallink';
import logo from '../../public/vk.jpg'

const About = () => {



  
  return (
    <div className=' w-full sm:mt-14 md:h-fit md:mt-14  relative box-border mx-auto p-2     flex flex-col  items-center'>

        <header className='flex sm:flex-col flex-col  items-center justify-center relative w-full rounded-2xl  box-border '>
        
        <div className='relative flex flex-col justify-center items-center   w-[80%]   overflow-hidden  rounded-2xl  right-0 sm:w-full' >
            <Image width={300} height={300} src={logo} alt='logo' className='w-[200px] h-[200px]  rounded-full'  />
        </div>

        <div className=' box-border p-2 '>
            <h1 className='sm:text-3xl text-5xl text-green-500'>Hello..!</h1>
            <h1 className='sm:text-3xl text-4xl text-white'>I'm <strong>Vitthal Kokare</strong></h1>
            <span className='w-[100%] flex border-[1px] border-green-200'></span>
            <h1 className='whitespace-nowrap sm:text-xl text-2xl font-semibold text-gray-400'>Mern Stack Developer</h1>
            
        </div>
        </header>
    
            <SocilLinks/>
            





          <section className='w-[95%] mt-5'>
         <h3 className='text-center sm:text-xl text-2xl  text-gray-200'>
           Hey There, I am Passionate about Programming and I like Progblem Solving. 
           My areas of Iterest are Web Development and Mobile Application Development.
           I am looking for an opportunity wherein I can apply my knowledge,
           learn new things and increase my knowledge to a new level. And I like to capture !
         </h3>
       </section>

       <span className='w-[70%] h-1 box-border absolute bottom-0 bg-white'>.</span>
      
    </div>
  )
}

export default About
