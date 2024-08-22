'use client'
import CountUp from 'react-countup';



const stats = [
{
    
 
    text: "Internship period : 4 November 2024 to 21 February 2025"
},

];


const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
        <div className="Flex flex-wrap gap-6 max-w-[88vw] mx-auto xl:max-w-none">

        {stats.map((item, index) =>{
            /* <CountUp 
            end={item.num}
            duration={5}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
            
            />*/
         return (
            <div 
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key={index}
            >

            
            <p>
                {item.text}
            </p>

            </div>

         );
        })}
    
    </div>
    </div>
    </section>
  )
  
};

export default Stats