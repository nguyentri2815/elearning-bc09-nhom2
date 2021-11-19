import { Container } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ItemCourse from "../../../components/KhoaHoc";
import { fetchAllCourses } from "../../../store/actions/course";

export default function ListCourse() {
  const onTop = () => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  };
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(3);

  const getListCourse = useCallback(() => {
    dispatch(fetchAllCourses);
  }, [dispatch]);
  useEffect(() => {
    getListCourse();
  }, [getListCourse]);
  const { coursesAll } = useSelector((state) => state.course);
  const renderListCourse = () => {
    if (coursesAll.length) {
      return coursesAll.slice(0, visible).map((item, index) => {
        return (
          <div className="item-course" key={index}>
            <ItemCourse course={item} />
          </div>
        );
      });
    }
    return;
  };
  const showMoreItems = () => {
    window.scroll({
      top: window.outerHeight + 500,
      left: 0,
      behavior: "smooth",
    });
    setVisible((index) => index + 3);
  };
  const showLessItems = () => {
    window.scroll({
      top: window.outerHeight,
      left: 0,
      behavior: "smooth",
    });
    setVisible((index) => index - 3);
  };

  return (
    <section className="list-course">
      <Container>
        <h3 className="title">Our Top Courses</h3>
        <p className="subtitle">
          Join over 100 instructors who use Teachable to share their knowledge.
          <br /> Easily register for an online course
        </p>
        <div className="lc-main-content">
          <div className="lc-content">{renderListCourse()}</div>
          <div className="lc-btn-group">
            {visible === 3 ? (
              <button onClick={showMoreItems} className="btn--blue btnn">
                SHOWN MORE <i className="fa fa-angle-double-down"></i>
              </button>
            ) : (
              <button onClick={showLessItems} className="btn--blue btnn">
                SHOWN LESS <i className="fa fa-angle-double-up"></i>
              </button>
            )}

            <NavLink
              onClick={onTop}
              className="btn--purple btnn"
              to="/courses/all"
            >
              SHOWN ALL<i className="fa fa-angle-double-right"></i>
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
