import React from 'react'
import './navbar.css'
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa"; 
import { RiVideoUploadFill } from "react-icons/ri";
import { TbApps } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/vidtube.png"

const navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <IoMenu className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
     <img className='logo' src={Logo} alt="logo" />
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
               <input type='text' placeholder='search'/>
               <FaSearch className='search-icon'/>
        </div>
        
       </div>

      <div className='nav-right flex-div'>
        <RiVideoUploadFill className='icons' />
        <TbApps className='icons'/>
        <IoNotifications className='icons'/>
        <CgProfile className='icons'/>
      </div>
    </nav>
  )
}

export default navbar
