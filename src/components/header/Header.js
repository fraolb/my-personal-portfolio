import React, { useState, useEffect } from 'react'
import './Header.css'

import CTA from './CTA'
import IMG from "../../assets/IMG.png"

import HeaderSocials from './HeaderSocials'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function Header() {
  const [header, setHeader] = useState([]);
  const headerCollection = collection(db, "header");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(headerCollection);
      setHeader(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  return (
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Fraol Bereket</h1>
          <h5 className='text-light'>{header.map((a)=>a.title)}</h5>
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
