import React, { useRef, useState, useEffect } from 'react'
import emailjs from "emailjs-com"
import './Contact.css'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import { GoMail } from 'react-icons/go'
import { FaTelegram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

import Bg from "../../assets/bg6.jpg";
import { Parallax } from "react-parallax";

function Contact() {

  const [header, setHeader] = useState([]);
  const headerCollection = collection(db, "contact");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(headerCollection);
      setHeader(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);
  const email = header.map(a=>a.email)
  const tg = header.map(a=>a.tg)
  const whatsup = header.map(a=>a.whatsup)


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6gtur3k', 'template_v56e05t', form.current, 'Kbp2eDJLNVuMoHLD8')
     e.target.reset();
  };


  return (
    <section id='contact'>
      <Parallax blur={2} bgImage={Bg}  strength={400}>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <GoMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>fraolbereket@gmail.com</h5>
          <a href={email} target='_blank'>Send Message</a>
        </article>
        <article className='contact__option'>
          <FaTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>Fraol  B.</h5>
          <a href={tg} target='_blank'>Send Message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>Fraol Bereket</h5>
          <a href={whatsup} target='_blank'>Send Message</a>
        </article>
      </div>

      <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button> 
      </form>
     </div>
     </Parallax>
    </section>
  )
}

export default Contact