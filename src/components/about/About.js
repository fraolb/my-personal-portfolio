import React, { useState, useEffect } from "react";
import "./About.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import Slide from "react-reveal/Slide";
import IMG from "../../assets/fraol.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import Bg from "../../assets/bg1.jpg";

import { Parallax } from "react-parallax";

export default function About() {
  const [about, setAbout] = useState([]);
  const aboutMe = collection(db, "about_me");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(aboutMe);
      setAbout(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  return (
    <section id="about" className="top1">
      <Parallax blur={2} bgImage={Bg} strength={400}>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <Slide left>
            <img src={IMG} alt="About Image" className="Img1" />
          </Slide>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>
                  {about.map((me) => {
                    return me.experience;
                  })}
                </small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>
                  {about.map((me) => {
                    return me.client;
                  })}
                </small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>
                  {about.map((me) => {
                    return me.project;
                  })}
                </small>
              </article>
            </div>

            <p className="about_me-txt">
              {about.map((me) => {
                return me.file;
              })}
            </p>

            <a href="#contact" className="btn  btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

{
  /* <div className="about__me">
            <div className="about__me-image">
              <img src={IMG} alt="About Image" />
            </div>
          </div> */
}
{
  /* <div id="animated" className="animated bounceInLeft" /> */
}
