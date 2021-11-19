import React from "react";

import Header from "../../components/Header";
import Intro from "./Intro";
import InfoElearning from "./InfoElearning";
import Footer from "../../components/Footer";
import StepBuyCourse from "./StepBuyCourse";
import Feel from "./Feel";
import Category from "./Category";
import ListCourse from "./ListCousre";
// import CourseAll from "./CourseHome/CourseAll";
export default function Home() {
  return (
    <section className="Home-Page">
      <Header />
      <Intro />
      <Category />
      <ListCourse />
      <InfoElearning />

      <StepBuyCourse />

      <Feel />

      <Footer />
    </section>
  );
}
