import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll' 

export const Home=()=>{
  return( 
    <section id='home' className="min-h-screen flex flex-col justify-center items-center relative ">
       
       <RevealOnScroll>
          <div className='text-center px-4'>
            <h1 className="text-5xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I'm Anurag Singh</h1>
            <p className="text-gray-100 max-w-lg mb-8 mx-auto text-lg leading-relaxed">
            I'm a Computer Science student aiming to become a full-stack developer. Currently focused on learning React, Tailwind CSS, and improving my problem-solving skills through DSA.
            </p>

            <div className="flex justify-center items-center  space-x-4  ">  
                <a href="#projects" className="px-6 py-3  bg-blue-500 font-medium text-white rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">View Projects</a>
                <a href="#contact" className=" border border-blue-500/50 px-6 py-3 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-500/10">Contact Me</a>


            </div>
          </div>
          </RevealOnScroll>
    </section>
  );
}


