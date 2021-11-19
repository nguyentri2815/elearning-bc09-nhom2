import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ImgDefault from "../../assets/img/defaulft.jpg";
import { actaddToCart } from "../../store/actions/cart";

export default function ItemCourse(props) {
  const onTop = () => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  };
  let { course } = props;
  const gia =
    Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) +
      Math.ceil(50) || 99;
  const { listCart } = useSelector((state) => state.cart);
  const me = useSelector((state) => state.me);
  const dispatch = useDispatch();
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
  const renderButton = (data) => {
    if (
      listCart.findIndex((item) => {
        return item.maKhoaHoc === data.maKhoaHoc;
      }) === -1
    ) {
      return (
        <button onClick={() => addToCart(course)} className="btn--blue btnn">
          THÊM GIỎ HÀNG
        </button>
      );
    } else {
      return (
        <NavLink
          className="btn--purple btnn"
          onClick={onTop}
          to={`/detail/${course.maKhoaHoc}?${gia}`}
        >
          ĐẾN GIỎ HÀNG
        </NavLink>
      );
    }
  };
  return (
    <section className="khoa-hoc">
      <div className="content">
        <div
          className="wallpaper"
          style={{
            backgroundImage: `url(${course.hinhAnh}), url(${ImgDefault})`,
          }}
        >
          <div className="overflow">
            <div className="ct-wallpaper">
              <h3>{course.tenKhoaHoc}</h3>
              <p>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="btn-group">
            <NavLink
              onClick={onTop}
              className="btn--white btnn"
              to={`/detail/${course.maKhoaHoc}?${gia}`}
            >
              CHI TIẾT
            </NavLink>
            {renderButton(course)}
            <div className="like">
              <div className="HeartAnimation"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
