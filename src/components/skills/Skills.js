import React from "react";
import "./Skills.css";
import logo from "../../assets/logoReact.svg";
import logo1 from "../../assets/logo.svg";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import firebase from "../../assets/firebase.png";
import css from "../../assets/css.png";

export default function Skills() {
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
      <h5>My Programming Skills</h5>
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
      </div>
    </section>
  );
}

{
  /* 
<article className="skill__item">
<div className="skill__item-image">
  <img src={css}  className="App-logo1" alt="" />
</div>
<h3>CSS</h3>
</article>
<article className="skill__item">
<div className="skill__item-image">
  <img src={firebase}  className="App-logo1" alt="" />
</div>
<h3>Firebase 9</h3>
</article>
<article className="skill__item">
<div className="skill__item-image">
  <img src={html}  className="App-logo1" alt="" />
</div>
<h3>HTML</h3>
</article> */
}
