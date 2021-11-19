import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCourse from "../../../components/ItemCourse";
import { fetchAllCourses } from "../../../store/actions/course";

export default function CourseProfile() {
  const dispatch = useDispatch();
  console.log("NguyenDai Phúc");
  const me = useSelector((state) => state.me);

  const getListCourse = useCallback(() => {
    dispatch(fetchAllCourses);
  }, [dispatch]);
  useEffect(() => {
    getListCourse();
  }, [getListCourse]);
  const { coursesAll } = useSelector((state) => state.course);
  const renderListCourse = () => {
    if (me.chiTietKhoaHocGhiDanh.length > 0) {
      const { chiTietKhoaHocGhiDanh } = me;
      return coursesAll
        .filter((item) => {
          let index = chiTietKhoaHocGhiDanh.findIndex((i) => {
            return i.maKhoaHoc === item.maKhoaHoc;
          });
          return index !== -1;
        })
        .map((item, index) => {
          return <ItemCourse key={index} item={item} callApi={true} />;
        });
    } else {
      return <div className="no-course">BẠN CHƯA ĐĂNG KÍ KHÓA HỌC NÀO</div>;
    }
  };

  return (
    <section className="Course-Attended">
      <div className="list-cart">
        <div className="content">
          <div className="header-list-cart">
            <p>KHÓA HỌC</p>
            <p>GIÁ TRỊ</p>
          </div>
          <div className="mct-list-cart">{renderListCourse()}</div>
        </div>
      </div>
    </section>
  );
}
