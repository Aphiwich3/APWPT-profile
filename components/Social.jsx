import Link from "next/link"

import {FaGithub,FaLinkedinIn,FaFacebook,FaMedium} from 'react-icons/fa'

const social = [
    {icon: <FaGithub/>,path: 'https://github.com/Aphiwich3'},
    {icon: <FaLinkedinIn/>,path: 'https://www.linkedin.com/in/aphiwich-prangtho-0b769931a/'},
    {icon: <FaFacebook/>,path: 'https://www.facebook.com/APWPT.99'},
    {icon: <FaMedium />,path:'https://medium.com/@BaseBa1l'},
]

const Socials = ({containerStyles, iconStyles}) => {

  return <div className={containerStyles}>
    {social.map((item, index) => {
        return (
            <Link target="_blank" 
            rel="noopener noreferrer" key={index} href={item.path} className={iconStyles}>
              {item.icon}
            
             </Link>
        );

    })}

  </div>
  
}

export default Socials