import React, { useState, useEffect } from 'react'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

function CTA() {
  const [header, setHeader] = useState([]);
  const headerCollection = collection(db, "header");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(headerCollection);
      setHeader(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  const cv = header.map(a=>a.cv)
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA