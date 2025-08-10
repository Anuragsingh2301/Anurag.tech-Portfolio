import './App.css'
import { useState,useEffect } from 'react'
import { LoadingScreen } from './components/loadingscreen'
import "./index.css"
import { Navbar } from './components/Navbar'
import { Mobilemenu } from './components/mobilemenu'
import { Home } from './components/sections/home'
import { About } from './components/sections/about'
import { Projects } from './components/sections/projects'
import { Contact } from './components/sections/contact'
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Aura from './components/Aura'    
function App() {

  const [isloaded,setisloaded]=useState(false);
  const [menuopen,setmenuopen]=useState(false);
  const color=useMotionValue( "#0D47A1"); // Initial color set to Deep Navy Blue
  
  
  return (
    <>
      {!isloaded && < LoadingScreen iscomplete={()=>setisloaded(true)}/>}

       
      <div className={` min-h-screen transition-opacity duration-600 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Aura  color={color}  ></Aura>

        <Navbar  menuopen={menuopen} setmenuopen={setmenuopen} />
        <Mobilemenu menuopen={menuopen} setmenuopen={setmenuopen} />
        <Home color={color}/>
        <About/>
        <Projects/>
        <Contact color={color} />
      </div>
      
      
    </>
  )
}

export default App
