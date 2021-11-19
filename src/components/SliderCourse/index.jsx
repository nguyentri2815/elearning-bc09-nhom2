import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../store/actions/course";

import Slider from "react-slick";
import Course from "../Course";

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

export default function SliderCourse() {
  const dispatch = useDispatch();
  const getListCourse = useCallback(() => {
    dispatch(fetchAllCourses);
  }, [dispatch]);

  useEffect(() => {
    getListCourse();
  }, [getListCourse]);
  const { coursesAll } = useSelector((state) => state.course);

  const renderSlideItem = () => {
    return coursesAll.map((item, index) => {
      return (
        <div className="sc-item" key={index}>
          <Course item={item} />
        </div>
      );
    });
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1256,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,

          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-course">
      <div>
        <h2 className="title">Có Thể Bạn Quan Tâm</h2>
        <Slider {...settings}>{renderSlideItem()}</Slider>
      </div>
    </div>
  );
}
