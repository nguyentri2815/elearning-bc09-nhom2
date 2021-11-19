import React from "react";
import imgIntro from "../../../assets/img/intro.jpg";
// import "../../../styles/View/Home/Intro/intro.scss";
export default function Intro() {
  const scrollDown = () => {
    window.scroll({
      top: 625,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="intro">
      <div className="overflow"></div>
      <img src={imgIntro} />
      <div className="content">
        <div>
          <h3 className="head-title">
            Getting started with <b>Elearning</b>
          </h3>
          <p className="head-subtitle">
            We pride ourselves on providing the most up-to-date content for
            <br />
            our students to learn each course
          </p>
        </div>
      </div>
      <div className="arrow-down" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
