import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { useState,useEffect } from "react";
import {Stars} from "@react-three/drei";

export const LoadingScreen = ({iscomplete}) => {
    
    const[text,settext] = useState("");
    const fulltext="Hello, my name is Anurag.";
    

    useEffect(()=>{
        let index=0;
        const interval= setInterval(() => {
            settext(fulltext.substring(0,index));

            index++;

            if(index>fulltext.length){
                clearInterval(interval);

                setTimeout(() => {
                    iscomplete();  
                }, 1000);

            }

        }, 150);

        return ()=>clearInterval(interval)
    },[iscomplete])

    return (
        <motion.div 
        className="fixed inset-1.5 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold"> 
                {text}<span className="animate-blink ml-1">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    
                </div>
            </div>
            <div className="absolute inset-0 z-0 ">
                <Canvas >
                    <Stars 
                        radius={100} 
                        depth={50} 
                        count={2500} 
                        factor={4} 
                        saturation={0.5} 
                        fade 
                    />
                </Canvas>
            </div>
        </motion.div>
    );
};
