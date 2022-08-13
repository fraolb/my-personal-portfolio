import React from 'react'
import CTA from './CTA'
import IMG from "../../assets/IMG.png"
import './Header.css'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Fraol Bereket</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className='me'>
            <img src={IMG} alt="me" />
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header> 
  )  
}
