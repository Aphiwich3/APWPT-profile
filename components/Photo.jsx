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
        className="w-[358px] h-[270px] xl:w-[290px] xl:h-[495px] 
        
      mix-blend-difference absolute ">
            <Image 
            src="/assets/Baseba1l.png"
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
        
        <motion.circle 
        cx="253"
        cy="253"
        r="250"
        stroke="#dbaa60"
        strokeWidth="4"
        strokeLinecap="roud"
        strokeLinejoin="round"
        initial={{strokeDasharray: "24 10 0 0"}}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120 ,360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}

        />
        </motion.svg>
    </motion.div>
    
        </div>
  )
}
export default Photo