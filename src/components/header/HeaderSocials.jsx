import React, { useState, useEffect } from 'react'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'


function HeaderSocials() {
  const [header, setHeader] = useState([]);
  const headerCollection = collection(db, "header");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(headerCollection);
      setHeader(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);
  const git = header.map(a=>a.github)
  const linkedin = header.map(a=>a.linkedin)
  const tg = header.map(a=>a.telegram)
  return (
    <div className='header__socials'>
        <a href={git} target="_blank"><BsGithub /></a>
        <a href={linkedin} target="_blank"><BsLinkedin /></a>
        <a href={tg} target="_blank"><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocials