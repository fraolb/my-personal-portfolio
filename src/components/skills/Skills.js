import React, { useState, useEffect } from "react";
import "./Skills.css";

import logo from "../../assets/logoReact.svg";
import logo1 from "../../assets/logo.svg";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import firebase from "../../assets/firebase.png";
import css from "../../assets/css.png";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Skills() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
}, []);
const particlesLoaded = useCallback(async (container) => {
  await console.log(container);
}, []);

  const data = [
    {
      id: 1,
      name: "React Js",
      img: logo,
      classname: "App-logo",
    },
    {
      id: 2,
      name: "Redux",
      img: logo1,
      classname: "App-logo1",
    },
    {
      id: 3,
      name: "JavaScript",
      img: js,
      classname: "App-logo1",
    },
    {
      id: 4,
      name: "CSS",
      img: css,
      classname: "App-logo1",
    },
    {
      id: 5,
      name: "HTML",
      img: html,
      classname: "App-logo1",
    },
    {
      id: 6,
      name: "Firebase 9",
      img: firebase,
      classname: "App-logo1",
    },
  ];

  return (
    <section id="skills" className="App">
        <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                
                fpsLimit: 12,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 0,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <h5>My Programming</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        {data.map((arr) => {
          return (
            <article className="skill__item" key={arr.id}>
              <div className="skill__item-image">
                <img src={arr.img} className={arr.classname} alt="" />
              </div>
              <h3>{arr.name}</h3>
            </article>
          );
        })}
         <article className="skill__item1" >
         <h3><a href="#experience">And many more...</a></h3>
         </article>
      </div>
      
    </section>
  );
}
