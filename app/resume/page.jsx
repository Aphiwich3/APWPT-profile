'use client'
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import { 
  FaHtml5,
   FaCss3,
   FaJs,
   FaReact,
   FaFigma,
   FaNodeJs,
   FaGithub,
  
   
   } from "react-icons/fa";
   import { SiPostgresql, SiPostman } from "react-icons/si";

  import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
//about data
const about = {
  title: "About me",
  Description:
  "สวัสดีครับ ผมนายอภิวิชญ์ ปรางโท้ ผมมีความรู้และทักษะในด้านการพัฒนาเว็บไซต์ฝั่ง Front-end ผมสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี ผมมุ่งมั่นที่จะ เรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง พร้อมที่จะทำงานอย่างเต็มที่และนำความรู้ที่ได้มาช่วยเสริมสร้างความสำเร็จของบริษัท",
  info:[
    {
      fieldName: "Name",
      fieldValue: "APHIWICH PRANGTHO"
    },
    {
      fieldName: "Phone",
      fieldValue: "080-283-5603"
    },
    {
      fieldName: "Email",
      fieldValue: "aphiwichprangtho@gmail.com"
    },
    {
      fieldName: "Facebook",
      fieldValue: "Apiwit"
    },
    {
      fieldName: "Date Of Birth",
      fieldValue: "08/11/02"
    },
    {
      fieldName: "Nationnality",
      fieldValue: "Thai"
    },
    
    
  ]

}
//experience data
const experience ={
  icon: '/assets/assets/resume/badge.svg',
  title: 'My experience',
  description: "สวัสดีครับ ผมนายอภิวิชญ์ ปรางโท้ ผมมีความรู้และทักษะในด้านการพัฒนาเว็บไซต์ฝั่ง Front-end ผมสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี ผมมุ่งมั่นที่จะ เรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง พร้อมที่จะทำงานอย่างเต็มที่และนำความรู้ที่ได้มาช่วยเสริมสร้างความสำเร็จของบริษัท",

  items: [
    {
      company: "5th Honorable Mention- Qontinuex",
      position:"PSRU Cyber Hackathon ",
      duration:"2023",
    },
    {
      company: "GAME CYBER security ⠀⠀⠀(ประเมิณงานวิจัย สกมช)",
      position:"PROJECT ",
      duration:"2023",
    },
    {
      company: "Machine Learning . Teachable Machine",
      position:"Machine Learning ",
      duration:"2022",
    },
    {
      company: "คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์",
      position:"How to become a penetration tester?",
      duration:"2022",
    },
  ]


}
//education data
const education ={
  icon: '/assets/assets/resume/cap.svg',
  title: 'My education',
  description: "สวัสดีครับ ผมนายอภิวิชญ์ ปรางโท้ ผมมีความรู้และทักษะในด้านการพัฒนาเว็บไซต์ฝั่ง Front-end ผมสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี ผมมุ่งมั่นที่จะ เรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง พร้อมที่จะทำงานอย่างเต็มที่และนำความรู้ที่ได้มาช่วยเสริมสร้างความสำเร็จของบริษัท",

  items: [
    {
      institution: "GPA: 3.90",
      degree:"Bachelor of Science Program Information Technology Major",
      duration:"Pibulsongkram Rajabhat University",
    },
  ]


}
//skills data
const skills ={
  title: "My skills",
  description: "สวัสดีครับ ผมนายอภิวิชญ์ ปรางโท้ ผมมีความรู้และทักษะในด้านการพัฒนาเว็บไซต์ฝั่ง Front-end ผมสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี ผมมุ่งมั่นที่จะ เรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง พร้อมที่จะทำงานอย่างเต็มที่และนำความรู้ที่ได้มาช่วยเสริมสร้างความสำเร็จของบริษัท",
  skillList:[
  {
    icon:<FaHtml5 />,
    name: "html5",
  },
  {
    icon:<FaCss3 />,
    name: "css3",
  },
  {
    icon:<FaJs />,
    name: "javascript",
  },
  {
    icon:<FaReact />,
    name: "react.js",
  },
  {
    icon:<SiNextdotjs />,
    name: "next.js",
  },
  {
    icon:<SiTailwindcss />,
    name: "tailwind.css",
  },
  {
    icon:<FaNodeJs />,
    name: "node.js",
  },
  {
    icon:<SiPostgresql />,
    name: "Postgresql",
  },
  {
    icon:<FaGithub />,
    name: "Git",
  },
  {
    icon:<SiPostman />,
    name: "postman",
  },
  
]
}
const certificates ={
  title: "My certificate",
  description: "สวัสดีครับ ผมนายอภิวิชญ์ ปรางโท้ ผมมีความรู้และทักษะในด้านการพัฒนาเว็บไซต์ฝั่ง Front-end ผมสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี ผมมุ่งมั่นที่จะ เรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง พร้อมที่จะทำงานอย่างเต็มที่และนำความรู้ที่ได้มาช่วยเสริมสร้างความสำเร็จของบริษัท",
  certificateList:[
  {
    
    image: "/assets/work/NCS.jpg",
    name: "NCS PSRU Cyber Hackatho",
  },
  {
    image: "/assets/work/Basic Cybersecurity.jpg",
    name: "outstanding academic performance",
  },
  {
    image: "/assets/work/056 APHIWICH  PRANGTHO.jpg",
    name: "How to become a penetration tester?",
  },
  {
    image: "/assets/work/Certificate for APHIWICH PRANGTHO  for _Code Their Dream Certificat..._.jpg",
    name: "Machine Learning . Teachable Machine",
  },
  {
    image: "/assets/work/เรียนดี 66.jpg",
    name: "outstanding academic performance",
  },
  {
    image: "/assets/work/เรียนดี65.jpg",
    name: "outstanding academic performance",
  },
  
  
]
}
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import { motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";




const Resume = () => {
  return  (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},

    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">certificates</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>


          <div className=" min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index) => {
                    return (
                      <li key={index} 
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>  
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[10px] h-[6px] rounded-full bg-accent-DEFFAULT"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )

                  })}

                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index) => {
                    return (
                      <li key={index} 
                      className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>  
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <br />
                        <div className="flex items-center gap-3"> 
                          
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-DEFFAULT"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )

                  })}

                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="w-full">
              
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{certificates.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certificates.description}</p>
                  <ScrollArea className="h-[400px] w-max">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-y-8">
                    {certificates.certificateList.map((certificate,index) =>{
                      return (
                      
                      <li key={index}  >
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-[450px] h-[350px]  rounded-xl flex justify-center items-center group">
                                    <div className=" relative w-full h-full">
                                        <Image 
                                        
                                        src={certificate.image}
                                        fill                                       
                                        className="object-cover"
                                        alt=""
                                        
                                        />
                                      </div>
                                      
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{certificate.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                      )
                    })}
                  </ul>
                  </ScrollArea>
                  </div>
              
            </TabsContent>
            
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                  <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                  xl:gap-[30px] ">
                    {skills.skillList.map((skill,index) =>{
                      return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="
                                      text-6xl group-hover:text-accent-DEFFAULT 
                                      transition-all duration-300">{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                    })}
                  </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return(
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-sm">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
};

export default Resume
