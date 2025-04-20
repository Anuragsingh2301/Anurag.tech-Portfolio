import {useState,useEffect} from 'react';


export const Mobilemenu = ({menuopen,setmenuopen}) => {
 

    return (
        <div className={`fixed top-0 left-0  z-40 w-full   bg-[rgba(10,10,10,0.8)] text-gray-300 flex flex-col          items-center justify-center transition-all ${menuopen ? "h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none" }`}>

            <button onClick={()=> setmenuopen(false)} className="absolute top-5 right-7 text-gray-300 hover:text-white text-3xl focus:outline-none cursor-pointer" aria-label='Close menu'>
                &times;
            </button>
         
            <a href="#home" className={`text-white my-4 text-2xl font-semibold transform transition-transform duration-300 ${menuopen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"} `} onClick={()=>setmenuopen(false)}>Home</a>
            <a href="#about"  className={`text-white my-4 text-2xl font-semibold transform transition-transform duration-300 ${menuopen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"} `} onClick={()=>setmenuopen(false)}>About</a>
            <a href="#projects"  className={`text-white my-4 text-2xl font-semibold transform transition-transform duration-300 ${menuopen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"} `} onClick={()=>setmenuopen(false)}>Projects</a>
            <a href="#contact"  className={`text-white my-4 text-2xl font-semibold transform transition-transform duration-300 ${menuopen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"} `} onClick={()=>setmenuopen(false)}>Contact</a>
                

                
        </div>
    );
    
}