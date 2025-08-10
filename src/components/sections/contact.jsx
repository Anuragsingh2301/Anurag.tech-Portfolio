import { useState,useEffect } from "react";
import emailjs from "emailjs-com"
import React from 'react';
import { useMotionValueEvent } from "motion/react";
import { motion } from "motion/react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact=({color})=>{
    
    const [currentColor, setCurrentColor] = useState(color.get());

    // Listen to motion value changes and update currentColor state
    useMotionValueEvent(color, "change", (latest) => {
        setCurrentColor(latest);
    });  

    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        message:""
    });


   
    const handlesubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_Service_ID,import.meta.env.VITE_Template_id,e.target,import.meta.env.VITE_Public_key)
        .then((response)=>{
            alert("Message sent successfully!");
            setformdata({
                name:"",
                email:"",
                message:""
            });

        }).catch(()=>{
            alert("OOPS! Something went wrong. Please try again.");
        })


    };

    return(
    <section id="contact" className="min-h-screen flex  justify-center items-center py-20">
           <div className="w-[80%] sm:w-[600px] mx-auto px-5">
           <RevealOnScroll>

                <h2 className="font-medium text-3xl mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center leading-right">
                    Get In Touch 
                </h2>
                <form  className="space-y-6" onSubmit={handlesubmit} >
                    <div className="relative">
                        <input type="text" value={formdata.name} name="name" id="name" required className="w-full text-md px-4 bg-white/5 py-3 border border-white/10 rounded text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 " onChange={(e)=>setformdata({...formdata,name:e.target.value})}  placeholder="Name..."  />

                    </div>
                    <div className="relative">
                        <input type="email" name="email" value={formdata.email}  id="email" required className="w-full text-md px-4 bg-white/5 py-3 border border-white/10 rounded text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 " onChange={(e)=>setformdata({...formdata,email:e.target.value})} placeholder="Example@gmail.com" />

                    </div>
                    <div className="relative">
                        <textarea  name="message" id="message" value={formdata.message}  required rows={4} className="w-full text-md px-4 bg-white/5 py-3 border border-white/10 rounded text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "  onChange={(e)=>setformdata({...formdata,message:e.target.value})} placeholder="Your Message..." />

                    </div>
                    <button style={{
                        backgroundColor: currentColor,
                        boxShadow: `0 0 10px ${currentColor}CC`,
                    }}
                     type="submit" className="w-full  text-white text-md px-6 py-3 rounded-md font-medium transition relative overflow-hidden hover:-translate-y-1 duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] ">
                        Send Message
                    </button>

                </form>
            
            </RevealOnScroll>
        </div>
    </section>
    );
};