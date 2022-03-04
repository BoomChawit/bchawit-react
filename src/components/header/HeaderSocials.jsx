import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/bchawit/" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com/BoomChawit" target="_blank"><BsGithub /></a>
        <a href="http://instagram.com/b.chawit" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials