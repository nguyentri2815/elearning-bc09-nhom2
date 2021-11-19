import React from "react";
import { NavLink } from "react-router-dom";
import ImgDefault from "../../assets/img/defaulft.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  actCancelAttendCourse,
  actDeleteInTheCart,
} from "../../store/actions/cart";
import { message } from "antd";
export default function ItemCourse(props) {
  const { item, callApi } = props;
  const dispatch = useDispatch();
  const me = useSelector((state) => state.me);
  const detleteCourse = (maKhoaHoc) => {
    if (callApi) {
      console.log({ maKhoaHoc: maKhoaHoc, taiKhoan: me.taiKhoan });
      return dispatch(
        actCancelAttendCourse(
          {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: me.taiKhoan,
          },
          () =>
            message.success({
              content: "Hủy Thành Công !!!",
              style: { marginTop: "20vh", color: "green" },
              duration: 1,
            })
        )
      );
    } else {
      console.log(maKhoaHoc);
      return dispatch(
        actDeleteInTheCart(maKhoaHoc, () =>
          message.info({
            content: "Xóa Thành Công!!!",
            style: { marginTop: "20vh", color: "#18aaf0" },
            duration: 1,
          })
        )
      );
    }
  };

  return (
    <section className="item-course-of-user">
      <div className="content">
        <div className="content-left">
          <img src={item.hinhAnh || ImgDefault} />
          <div className="mct-item-course-of-user">
            <h5>
              <NavLink className="nav-link" to={`/detail/${item.maKhoaHoc}`}>
                Detail
              </NavLink>
              {item.tenKhoaHoc}
            </h5>
            <p>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
          </div>
        </div>
        <div className="content-right ">
          <p className="fee">ApiNoPrice{/* ${item.gia || 47} */}</p>
          <div
            onClick={() => {
              detleteCourse(item.maKhoaHoc);
            }}
          >
            <i className="fa fa-trash"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
