import React from "react";
import BGSTEP from "../../../assets/img/group-3.png";

export default function StepBuyCourse() {
  return (
    <section
      className="stepbuycourse text-center"
      style={{
        backgroundImage: `url(${BGSTEP})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <h3 className="title ">
          Register your course in Four <br />
          simple steps
        </h3>
        <div className="content">
          <div className="step-group">
            <div>
              1<br />
              STEP
            </div>
            <p>
              Choose the course
              <br />
              you want
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              2<br />
              STEP
            </div>
            <p>
              Add
              <br />
              shopping cart
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              3<br />
              STEP
            </div>
            <p>
              Pay
              <br />
              your course
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              4<br />
              STEP
            </div>
            <p>
              Check
              <br />
              your course
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
