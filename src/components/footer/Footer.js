import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Fraol B.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><AiFillFacebook /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><FaTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Fraol tutorial. All rights reserved.</small>
      </div>
    </footer>
  )
}
