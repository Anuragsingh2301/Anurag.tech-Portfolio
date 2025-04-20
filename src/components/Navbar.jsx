import {useState,useEffect} from 'react';


export const Navbar = ({menuopen,setmenuopen}) => {

    useEffect(()=>{
        document.body.style.overflow= menuopen ? "hidden" : "";
    },[menuopen])

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-xl shadow-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    Anuragg<span className="text-blue-500">.tech</span>
                </a>
                <div className="w-7 h-5 cursor-pointer relative z-40 md:hidden  "
                 onClick={()=>setmenuopen(prevmenu=> !prevmenu)} >
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8 text-gray-300 font-mono text-lg">
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div> 
            </div>
        </div>
    </nav>
    );
    
}