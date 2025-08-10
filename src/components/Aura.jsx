import React, { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue,animate } from "motion/react";
import { Canvas } from "@react-three/fiber";    
import { Stars } from "@react-three/drei";
import { section } from 'motion/react-client';

const Color = [
  "#3B82F6",  // from-blue-500
  "#22D3EE",  // to-cyan-400
  "#00FFF7",  // neon cyan
  "#60A5FA"   // text-blue-400
];


const Aura = ({color}) => {
    const backgroundImage= useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

    
    useEffect(()=>{
        animate(color,Color,{
            ease: "easeInOut",
            duration:10,
            repeat: Infinity,
            repeatType:"mirror",
        });
    },[color]);

  return (
   <motion.section
   className='fixed inset-0 w-full h-full z-0   overflow-hidden'
   style={{
    backgroundImage,
    


   }}

   >
    <Canvas>
        <Stars 
            radius={100} 
            depth={50} 
            count={2500} 
            factor={4} 
            saturation={0.5} 
            fade 
        />
    </Canvas>

   </motion.section>
  )
};

const Button=()=>{
    
};

export default Aura
