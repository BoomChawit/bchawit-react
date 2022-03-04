import React from 'react'
import "./about.css"
import ME from "../../asset/Pic_03.jpg"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {FaFolder} from "react-icons/fa"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon"/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repudiandae amet 
            rem atque non facilis minus, consectetur aliquam architecto fugiat rerum, vel nisi dolorum 
            itaque modi eveniet vero alias sequi!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About