import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../asset/Pic_01.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Boom Chawit</h1>
        <h5 className="text-light">Machine Learning Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        
        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header