import React from "react";
import "./Portfolio.css";
import Twitter from "../../assets/Twitter.jpg";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: Twitter,
      title: "This is a Simple Twitter Clone",
      github: "https:/github.com/fraolb",
      demo: "https://twitter-clone-4c550.web.app/",
    },
    {
      id: 2,
      image: Twitter,
      title: "This is a Simple Twitter Clone",
      github: "https:/github.com/fraolb",
      demo: "https://twitter-clone-4c550.web.app/",
    },
    {
      id: 3,
      image: Twitter,
      title: "This is a Simple Twitter Clone",
      github: "https:/github.com/fraolb",
      demo: "https://twitter-clone-4c550.web.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((arr) => {
          return (
            <article className="portfolio__item" key={arr.id}>
              <div className="portfolio__item-image">
                <img src={arr.image} alt={arr.title} />
              </div>
              <h3>{arr.title} </h3>
              <div className="portfolio__item-cta">
                <a
                  href={arr.github}
                  target="_blank"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={arr.demo}
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
    </section>
  );
}

export default Portfolio;

