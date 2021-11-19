import React from "react";

import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ImgDef from "../../assets/img/defaulft.jpg";
import USER from "../../assets/img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { actaddToCart } from "../../store/actions/cart";
import { message } from "antd";

const Course = ({ item }) => {
  const me = useSelector((state) => state.me);

  const onTop = () => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  };
  const dispatch = useDispatch();
  const { maKhoaHoc, tenKhoaHoc, hinhAnh, soLuongHocVien, luotXem, nguoiTao } =
    item;
  const gia =
    Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) +
      Math.ceil(50) || 99;
  const { listCart } = useSelector((state) => state.cart);

  const addToCart = (data) => {
    if (!me) {
      return message.error({
        content: "Bạn Chưa Đăng Nhập !!!",
        style: { marginTop: "20vh", color: "red" },
        duration: 1.5,
      });
    } else if (
      listCart.findIndex((item) => {
        return item.maKhoaHoc === data.maKhoaHoc;
      }) === -1
    ) {
      message.success({
        content: "Thêm Thành Công !!!",
        style: { marginTop: "20vh", color: "green" },
        duration: 1.5,
      });
      dispatch(actaddToCart(data));
    } else {
      message.info({
        content: "Sản Phẩm Đã Có Trong Giỏ Hàng !!!",
        style: { marginTop: "20vh", color: "#18aaf0" },
        duration: 1.5,
      });
    }

    console.log(data);
  };
  const checkEnrolled = (data) => {
    if (!me.chiTietKhoaHocGhiDanh) {
      return renderButton(data);
    } else {
      if (
        me.chiTietKhoaHocGhiDanh.findIndex((item) => {
          return item.maKhoaHoc === data.maKhoaHoc;
        }) === -1
      ) {
        return renderButton(data);
      }
      return (
        <NavLink className="btn--green btnn" onClick={onTop} to="/cart">
          ĐẾN GIỎ HÀNG
        </NavLink>
      );
    }
  };
  const renderButton = (data) => {
    if (
      listCart.findIndex((item) => {
        return item.maKhoaHoc === data.maKhoaHoc;
      }) === -1
    ) {
      return (
        <button onClick={() => addToCart(item)} className="btn--blue btnn">
          THÊM GIỎ HÀNG
        </button>
      );
    } else {
      return (
        <NavLink className="btn--purple btnn" onClick={onTop} to="/cart">
          ĐẾN GIỎ HÀNG
        </NavLink>
      );
    }
  };
  return (
    <div className="allCourse-item ">
      <div className="image">
        <div className="wrap-img">
          <div
            className="cardImg"
            style={{
              backgroundImage: `url(${hinhAnh}), url(${ImgDef})`,
            }}
          ></div>
        </div>
        <div className="teacher-img">
          <div className="grid-content">
            <div className="align-center">
              <div className="left-side ">
                <img src={USER} />
                <div className="teacher-name">
                  <span>{nguoiTao.hoTen || "Giảng Viên Tạm"}</span>
                </div>
              </div>

              <div className=" right-side">
                <div className="course-name">
                  <span>{tenKhoaHoc}</span>
                </div>
                <div className="more-infomation">
                  <div className="more-info-item">
                    <span>
                      <i className="fa fa-graduation-cap"> </i>{" "}
                      <span>Học viên</span>
                      <p>{soLuongHocVien}</p>
                    </span>
                  </div>
                  <div className="more-info-item">
                    <span>
                      <i className="fa fa-eye"> </i>
                      <span>Lượt xem</span>

                      <p>{luotXem}</p>
                    </span>
                  </div>
                  <div className="more-info-item">
                    <span>
                      <span className="dollar">
                        <label>Giá</label>
                        <p>{gia} </p>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-course">
            <NavLink
              onClick={onTop}
              className="btn--black btnn"
              to={`/detail/${maKhoaHoc}?${gia}`}
            >
              Chi Tiết
            </NavLink>

            {me ? checkEnrolled(item) : renderButton(item)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
