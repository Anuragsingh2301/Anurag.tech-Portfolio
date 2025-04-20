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
  
function App() {

  const [isloaded,setisloaded]=useState(false);
  const [menuopen,setmenuopen]=useState(false);

  return (
    <>
      {!isloaded && < LoadingScreen iscomplete={()=>setisloaded(true)}/>}
      <div className={`min-h-screen transiton-opacity duration-600 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar  menuopen={menuopen} setmenuopen={setmenuopen} />
      <Mobilemenu menuopen={menuopen} setmenuopen={setmenuopen} />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
      
      
    </>
  )
}

export default App
