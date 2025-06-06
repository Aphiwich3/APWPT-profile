"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
  <div className="w-full h-full relative">
    <motion.div 
    initial={{ opacity: 0}}
    animate ={{
      opacity: 1,
      transition: { delay: 2, duration: 0.4, ease: "easeIn"},
    }}>
        {/*Photo */}
        <motion.div
        initial={{ opacity: 0}}
        animate ={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut"},
        }}
        className="w-[358px] h-[270px] xl:w-[250px] xl:h-[550px] absolute translate-x-[60px] ">
            <Image 
            src="/assets/aphiwich3.png"
            priority 
            quality={100}
            fill
            alt=""
            className="object-contain" 
            />
        </motion.div>


        <motion.svg className="w-[360px] xl:w-[360px] h-[300px] xl:h-[560px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        >
        
        </motion.svg>
    </motion.div>
    
        </div>
  )
}
export default Photo