import React from 'react'
import "./nav.css"
import {RiHome2Line} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {FiBook} from "react-icons/fi"
import {MdSell} from "react-icons/md"
import {BiMessage} from "react-icons/bi"
import {useState} from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active": ""}><RiHome2Line /></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active": ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active": ""}><FiBook /></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#services")} className={activeNav === "#portfolio" ? "active": ""}><MdSell /></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""}><BiMessage /></a>
    </nav>
  )
}

export default Nav