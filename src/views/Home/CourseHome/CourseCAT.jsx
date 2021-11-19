import React, { useCallback, useEffect, useRef, useState } from "react";
// import { useHistory } from "react-router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Banner from "../../../components/Course/Banner";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "../../../store/actions/course";
import { Container, Grid, TextField } from "@material-ui/core";
import Course from "../../../components/Course";
import SliderCourse from "../../../components/SliderCourse";
export default function CourseCAT(props) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { category } = props.match.params;
  const getInfoCourse = useCallback(() => {
    dispatch(getCoursesByCategory(category));
  }, [dispatch, category]);

  useEffect(() => {
    getInfoCourse();
  }, [dispatch, getInfoCourse]);
  const { courseByCategory } = useSelector((state) => state.course);

  const [searchTemp, setSearchTemp] = useState("");
  console.log(searchTemp);
  const timeOutRef = useRef(null);
  const handleSearch = (e) => {
    const value = e.target.value;

    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      setSearchTemp(value);
    }, 1000);
  };

  return (
    <div className="caurseCAT">
      <Header />
      <Banner />
      <Container>
        <div className="search-content">
          <TextField
            size="small"
            className="search"
            label="Tìm Kiếm Khóa Học ..."
            variant="outlined"
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="setFullHeight">
          <div className="grid-course">
            {courseByCategory
              .filter((val) => {
                if (searchTemp === "") {
                  return val;
                } else if (
                  val.tenKhoaHoc
                    .toLowerCase()
                    .includes(searchTemp.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, key) => {
                return (
                  <div className="grid-cItem" key={key}>
                    <Course item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
      <SliderCourse />
      <Footer />
    </div>
  );
}
