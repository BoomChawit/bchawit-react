import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href ="#" className='footer_logo'>CHAWIT</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/bchawit/" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com/BoomChawit" target="_blank"><BsGithub /></a>
        <a href="http://instagram.com/b.chawit" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; BoomChawit Website. All rights reserved</small><br />
        <small>Last updated: 3 March 2022</small>
      </div>
    </footer>

  )
}

export default Footer