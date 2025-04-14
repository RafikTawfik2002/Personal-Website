import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './elements/Project'
import { CiLinkedin } from "react-icons/ci"; 
import { FaLinkedin } from "react-icons/fa"; // light mode icon
import { VscGithub } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";

function App() {

  return (
    <div className='w-screen bg-gray-800 font-mono  text-gray-200'>


      {/* HEADER SECTION */}

      <div className='flex justify-between w-screen font-bold bg-gray-900 backdrop-blur-3xl px-10 shadow-lg items-center h-[100%]'>
       <div className='flex'>
       <div className='py-4'>
        <div className='border-0 border-gray-400 border-t-0 border-b-0 border-l-0 px-4'>Projects: </div>
        </div>
        <Project title="Daily Habster"/>
        <Project title="SPY Network (OOP)"/>
        <Project title="2D Games"/>
        </div>


        <div className='flex float-right px-4 items-center '>

        <div className='py-4 px-4'><VscGithub size={36}/></div>
        <div className='py-4 px-4'><CiLinkedin size={40}/></div>
        <div className='py-4 px-4'><MdMailOutline size={36}/></div>
        </div>
      </div>


      {/* NAME AND RESUME SECTION */}

      <div className=' border-red-100 px-20 py-20 bg-gray-700'>
        {/* Name and bio */}
        <div className='text-5xl'>
            Rafik Tawfik
        </div>
        <div className='text-lg mt-5 w-[40%]'>
            Software engineer and computer scientist, specialitzed in full-stack development and passionate about working on software projects aimed at solving real life problems for as many people and businesses as possible
        </div>
        {/* Resume, bio, past experience */}
      </div>



    </div>
  )
}

export default App
