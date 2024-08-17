import React from 'react'
import "./Sidebar.css"
import { IoIosHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdOutlineSportsHandball } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiDsautomobiles } from "react-icons/si";
const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
       <div className='shortcut-links'>

        <div className={`side-link ${category===0?'active':''}`} onClick={()=>setCategory(0)}>
        <IoIosHome className='sideicons'/><p>Home</p>    
        </div> 
        <div className={`side-link ${category===20?'active':''}`} onClick={()=>setCategory(20)}>
        <IoGameController className='sideicons'/><p>Gaming</p>    
        </div> 
        <div className={`side-link ${category===2?'active':''}`}onClick={()=>setCategory(2)}>
        <SiDsautomobiles className='sideicons'/><p>Automoblies</p>    
        </div> 
        <div className={`side-link ${category===17?'active':''}`}onClick={()=>setCategory(17)}>
        <MdOutlineSportsHandball className='sideicons'/><p>Sports</p>    
        </div> 
        <div className={`side-link ${category===24?'active':''}`}onClick={()=>setCategory(24)}>
        <SiDcentertainment className='sideicons'/><p>Entertainment</p>    
        </div> 
        <div className={`side-link ${category===28?'active':''}`}onClick={()=>setCategory(28)}>
        <GrTechnology  className='sideicons'/><p>Technology</p>    
        </div> 
        <div className={`side-link ${category===10?'active':''}`}onClick={()=>setCategory(10)}>
        <IoMusicalNotesSharp className='sideicons'/><p>Music</p>    
        </div> 
        <div className={`side-link ${category===22?'active':''}`}onClick={()=>setCategory(22)}>
        <LiaBlogSolid  className='sideicons'/><p>Blogs</p>    
        </div> 
        <div className={`side-link ${category===25?'active':''}`}onClick={()=>setCategory(25)}>
        <IoNewspaperOutline className='sideicons'/><p>News</p>    
        </div> 
        <hr/>

       </div>
       <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className="side-link">
        <CgProfile className='sideicons'/> <p>Pewdieoie</p>
        </div>
        <div className="side-link">
        <CgProfile className='sideicons'/> <p>MrBeast</p>
        </div>
        <div className="side-link">
        <CgProfile className='sideicons'/> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
        <CgProfile className='sideicons'/> <p>5-mines Crafts</p>
        </div>
        <div className="side-link">
        <CgProfile className='sideicons'/> <p>Nas daily</p>
        </div>
       </div>
    </div>
  )
}

export default Sidebar


