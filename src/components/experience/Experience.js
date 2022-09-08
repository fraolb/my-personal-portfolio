import React, { useState, useEffect } from "react";
import "./Experience.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  const [skill, setSkill] = useState([]);
  const skillColl = collection(db, "skills");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(skillColl);
      setSkill(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  return (
    <section id="experience">
      <h5>Languages and Frame Works I have</h5>
      <h2>Experience On</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          {skill.map((me) => {
            if(me.type == "front_end"){
              return <article className="experience__detail">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>{me.name}</h4>
                <small className="text-light">{me.level}</small>
              </div>
            </article>
            }
              })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          {skill.map((me) => {
            if(me.type == "back_end"){
              return <article className="experience__detail">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>{me.name}</h4>
                <small className="text-light">{me.level}</small>
              </div>
            </article>
            }
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
