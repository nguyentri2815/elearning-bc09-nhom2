import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} carousel-control-next `} onClick={onClick}>
      <span>{">"}</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} carousel-control-prev`} onClick={onClick}>
      <span>{"<"}</span>
    </div>
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <section className="feel">
        <div className="main-content container">
          <h3 className="title"> User Comments</h3>
          <Slider className="carousel" {...settings}>
            <div className="carousel-item active">
              <div className="content">
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className="info">
                <p>
                  _Jack, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className="info">
                <p>
                  _Long Black, <span>Developer</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className="info">
                <p>
                  _Jenny Kita, <span>CEO</span>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
