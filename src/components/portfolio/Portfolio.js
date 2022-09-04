import React, { useState, useEffect } from "react";
import "./Portfolio.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import Twitter from "../../assets/Twitter.jpg";

import Bg from "../../assets/bg4.jpg";
import { Parallax } from "react-parallax";

function Portfolio() {

  const [comp, setComp] = useState([]);
  const compColl = collection(db, "portfolio");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(compColl);
      setComp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  return (
    <section id="portfolio">
      <Parallax blur={2} bgImage={Bg}  strength={400}>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {comp.map((arr) => {
          return (
            <article className="portfolio__item" key={arr.id}>
              <div className="portfolio__item-image">
                <img src={arr.img} alt={arr.name} height="250px"/>
              </div>
              <h3>{arr.name} </h3>
              <div className="portfolio__item-cta">
                <a
                  href={arr.github}
                  target="_blank"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={arr.site}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      </Parallax>
    </section>
  );
}

export default Portfolio;

