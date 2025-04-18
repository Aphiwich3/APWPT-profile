'use client'
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries} from 'react-icons/ci'
import { useState } from 'react';
const links = [
{
    name: 'home',
    path: '/'
},
{
    name: 'resume',
    path: '/resume'
},
{
    name: 'project',
    path: '/project'
},
{
    name: 'contact',
    path: '/contact'
},
]
const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // ไฮไลต์: ฟังก์ชันเพื่อพับแผงเมื่อคลิกลิงก์
      };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="Flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent-DEFFAULT" /> 
        </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                   <Link href="/" onClick={handleLinkClick}>
                   <h1 className="text-4xl font-semibold">
                    BaseBa1l<span className="text-accent-DEFFAULT">.</span>
                   </h1>
                   </Link> 
                    
                </div>

                <nav className=" flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                     return (
                        <Link href={link.path} key={index} className={`${
                        link.path === pathname && 
                        "text-accent-DEFFAULT border-b-2 border-accent-DEFFAULT"}
                        text-xl capitalize hover:text-accent-DEFFAULT transition-all`}
                        onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                     );
                        
                    })}
                    
                   
                </nav>
            </SheetContent>

        


    </Sheet>
  );
  
};

export default MobileNav