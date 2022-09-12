import React, { useState, useEffect } from "react";
import "./Services.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";


import { GiCheckMark } from "react-icons/gi";

function Services() {

  const [comp, setComp] = useState([]);
  const compColl = collection(db, "certificate");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(compColl);
      setComp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  const [comp1, setComp1] = useState([]);
  const compColl1 = collection(db, "tempo");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(compColl1);
      setComp1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  return (
    <section id="services">
      <h5>EDUCATION AND TRAINING</h5>
      <h2>CERTIFICATES</h2>

      <div className="container services__container">
      <article className='service'>
            <div className='service__head'>
              <h3>while(!(succeed = try()));</h3>
            </div>
            <ul className='service__list'>
            {comp1.map((arr) => {
              return (
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>{arr.name}</p> <p> {arr.school}</p>
                <a href={arr.link} target="_blank">Link</a>
              </li>
               );
              })}
            </ul>
                <h5 className="certificates">Course Certificates</h5>
              <ul className='service__list'>
            {comp.map((arr) => {
              return (
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>{arr.name}</p> <p> {arr.school}</p>
                <a href={arr.link} target="_blank">Link</a>
              </li>
               );
              })}
            </ul>
          </article>
   

      </div>
    </section>
  );
}

export default Services;











 
