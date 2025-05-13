
import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return ( 
  <section className="h-full">
     <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

         <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">DevOps Engineer</span>
          <h1 className="h1 mb-6">
            Hell i'm <br /><span className="text-accent-DEFFAULT">Aphiwich Prangtho</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          "Hello, I’m Aphiwitch Prangtho, a web developer with project experience and strong teamwork skills. I’m currently studying to become a DevOps Engineer, committed to continuous learning and eager to contribute to the company’s success." :D
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2">
              <a 
            href="/RESUME APHIWICH.pdf" 
            download="RESUME APHIWICH.pdf">
              <span >Download CV</span>
              </a>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
            <Social 
              
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent-DEFFAULT rounded-full flex justify-center items-center 
              text-accent-DEFFAULT text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
            </div>
          </div>
         </div>
         <div className="">
          <Photo />
         </div>
       </div>
      </div>  
    </section>
    );
};

export default Home;
