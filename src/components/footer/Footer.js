import React,{ useState, useEffect} from 'react'
import './Footer.css'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import { AiFillFacebook } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {

  const [header, setHeader] = useState([]);
  const headerCollection = collection(db, "header");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(headerCollection);
      setHeader(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);
  const fb = header.map(a=>a.fb)
  const ig = header.map(a=>a.ig)
  const twitter = header.map(a=>a.twitter)

  return (
    <footer>
      <a href='#' className='footer__logo'>Fraol B.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Certificates</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href={fb} target="_blank"><AiFillFacebook /></a>
        <a href={ig} target="_blank"><FiInstagram /></a>
        <a href={twitter} target="_blank"><FaTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Fraol B. All rights reserved.</small>
      </div>
    </footer>
  )
}
