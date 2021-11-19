import React from "react";
import CourseAll from "./ListCourse";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Banner from "../../../components/Course/Banner";
import SliderCourse from "../../../components/SliderCourse";
import { Container } from "@material-ui/core";
export default function Courses() {
  return (
    <div>
      <Header />
      <Banner />
      <Container>
        <CourseAll />
      </Container>
      <SliderCourse />

      <Footer />
    </div>
  );
}
