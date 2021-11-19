import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import Course from "../../../components/Course/index";
import { fetchAllCourses, fetchCourses } from "../../../store/actions/course";

import { Pagination } from "antd";

const CourseH = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);
  const me = useSelector((state) => state.me);
  const count = Math.ceil(courses.totalCount / courses.totalPages);

  const timeOutRef = useRef(null);
  const [searchCourse, setSearchCourse] = useState("");

  const managerCourse = useCallback(() => {
    dispatch(fetchCourses(page, searchCourse));
  }, [page, searchCourse, dispatch]);

  useEffect(() => {
    managerCourse();
    // console.log("Fetch Data");
  }, [managerCourse]);

  const onSubmit = (value) => {
    setSearchCourse(value);
    setPage(1);
    // console.log(value);
  };
  const handleSearch = (e) => {
    const value = e.target.value;

    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 1000);
  };
  return (
    <div className="caurseAll" style={{ minHeight: "100vh" }}>
      <Container>
        <div className="search-content">
          <TextField
            size="small"
            className="search"
            label="Tìm Kiếm Khóa Học ....."
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
            {courses.items.map((item, key) => {
              return (
                <div className="grid-cItem" key={key}>
                  <Course item={item} />
                </div>
              );
            })}
          </div>

          <div className="pagination-custom">
            <hr />
            <Pagination
              total={courses.totalCount}
              pageSize={count}
              onChange={(page) => {
                setPage(page);
              }}
              className="page"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseH;
