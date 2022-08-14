import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://github.com/fraolb' target="_blank"><BsGithub /></a>
        <a href='https://www.linkedin.com/in/fraol-bereket-bekele-923455235' target="_blank"><BsLinkedin /></a>
        <a href='t.me/@chris_av' target="_blank"><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocials