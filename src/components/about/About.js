import React from "react";
import './About.css'
import IMG from "../../assets/IMG.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about" className="top">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years learning</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>80+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie pellentesque massa, non tincidunt orci molestie a. Duis
            eleifend elementum nisl, id cursus ipsum eleifend nec. Suspendisse
            potenti. Maecenas sit amet nibh eget elit scelerisque maximus.
            Suspendisse quis turpis eget odio iaculis pretium. Vestibulum sed
            nisi ac dolor aliquam pulvinar. Morbi feugiat, mauris eu convallis
            bibendum, neque ex finibus risus, eget elementum diam risus non
            velit. Suspendisse neque ante, luctus sed dictum ut, placerat vel
            turpis. Phasellus non pulvinar est. Integer dignissim sapien id
            fringilla tincidunt. Nam elementum dui lectus. Praesent at risus
            volutpat, dapibus ante id, pretium augue. Nam sit amet lacinia
            neque, nec aliquet felis. Nunc ut justo odio.
          </p>

          <a href="#contact" className="btn  btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
