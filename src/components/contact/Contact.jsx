import React from 'react'
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7gtf0w4', 'template_9jpvrnz', form.current, 'gu-ExbQ_JPbhIPaQW')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>boomchawit.2203@gmail.com</h5>
            <a href="mailto:boomchawit.2203@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Boom Chawit</h5>
            <a href="https://m.me/boomchawit" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+818045787310</h5>
            <a href="https://api.whatsapp.com/send?phone+818045787310"  target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder="Your Full  Name"  required />
          <input type="email" name="email"  placeholder="Your Email"  required />
          <textarea name="message" rows= "7" placeholder="Your Message"  required></textarea>
          <button type="submit" className='btn  btn-primary'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact