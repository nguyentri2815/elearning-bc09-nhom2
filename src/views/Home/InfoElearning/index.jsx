import React from "react";
import BGINFO from "../../../assets/img/bg-info-elearning.jpg";
import BGCOVER from "../../../assets/img/bg-2.png";

export default function InfoElearning() {
  return (
    <section
      className="info-elearning"
      style={{ backgroundImage: `url(${BGINFO})` }}
    >
      <div className="container">
        <div
          className="ie-overflow"
          style={{ backgroundImage: `url(${BGCOVER})` }}
        ></div>

        <div className="ie-content">
          <div className="icon-group">
            <i className="fa fa-bookmark"></i>
            <div className="name-icon">Teachers</div>
            <div className="amount">20</div>
          </div>
          <div className="icon-group">
            <i className="fa fa-book"></i>
            <div className="name-icon">Lessons</div>
            <div className="amount">100</div>
          </div>
          <div className="icon-group">
            <i className="fa fa-mortar-board"></i>
            <div className="name-icon">Students</div>
            <div className="amount">999</div>
          </div>
        </div>
      </div>
    </section>
  );
}
