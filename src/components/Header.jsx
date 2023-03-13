import React, { useState } from 'react'
// import  {Link, NavLink}  from 'react-router-dom';
import { NavLink } from "react-router-dom";

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {

    const [mobnav,setMobNav]=useState(true);
      return (

    <div className='flex items-center justify-around h-20 w-screen fixed
      bg-blue-500'>
    <div className='text-3xl  font-bold' >Frontend</div>

{
    mobnav ?
    <GiHamburgerMenu onClick={()=>{setMobNav(!mobnav)}} className=' font-bold text-3xl  md:hidden'/>:

    <AiOutlineClose onClick={()=>{setMobNav(!mobnav)}}   className='text-3xl  md:hidden'/>
}
        <ul className=' hidden md:flex gap-10 text-white text-xl'>


          <li>Home</li>
 <li>About</li>
 <li>Contact</li>
 <li>More</li>


        </ul>

        {/* responsive */}
        <ul className={`md:hidden fixed top-[80px] w-full  flex flex-col  gap-[2.5rem] items-center h-screen bg-black z-99 opacity-100 text-white text-xl py-[100px]
         ${mobnav ? 'hidden':''}` }>
      <li>Home</li>
      <li>About</li>
    
      <li>Contact</li>
      <li>More</li>
    
    </ul>
        </div>
  )
}

export default Header;