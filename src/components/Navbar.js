import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
export default function Navbar (){
  const [menu ,setMenu] = useState(false)
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:3,
      text:"Education"
    },
    {
      id:4,
      text:"Skills"
    },
    {
      id:5,
      text:"Projects"
    },
    {
      id:6,
      text:"Get In Touch"
    }
  ]
return(
<>
<div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 h-16 shadow-md ">
  <div className="flex justify-between h-16">
    <div className="flex-space-x-4 mt-2 ml-4">
      <h1 className="font-bold text-2xl cursor-pointer mt-2 md:ml-5   "><span className="text-red-500 text-2xl">S</span>Coder.</h1>
      
    
    </div>
    {/*Desktop Navbar*/}
  <div> 
    <ul className="hidden md:flex space-x-8 mt-4 mr-5">
      {
        navItems.map(({id,text})=>(
          <li className="hover:scale-105 duration-150 cursor-pointer" key={id}>{text}</li>
        ))
      }
    </ul>
    <div onClick={()=>setMenu(!menu)} className="md:hidden mt-4">{!menu?<AiOutlineMenu size={24} />:<IoMdClose size={24}/>}</div>
  </div>
  </div>
  {/* mobile navbar*/}
  {
    menu && (
      <div>
    <ul className="md:hidden flex flex-col mt-8 ml-12 item-center justify-center space-y-1">
    {
        navItems.map(({id,text})=>(
          <li className="hover:scale-105 duration-150 cursor-pointer" key={id}>{text}</li>
        ))
      }
    </ul>
    
     </div>
    )
  }

</div>
</>
      
)
}