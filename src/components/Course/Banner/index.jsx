import React from "react";
import { NavLink } from "react-router-dom";
import BGBANNER from "../../../assets/img/15.jpg";
import BGOVERFLOW from "../../../assets/img/bg-2.png";
export default function Banner(props) {
  const { hinhAnh, title, tenKhoaHoc } = props;
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${hinhAnh}),url(${BGBANNER})`,
      }}
    >
      <div
        className="overflow"
        style={{ backgroundImage: `url(${BGOVERFLOW})` }}
      ></div>
      <div className="content">
        <div className="title">
          <span>{tenKhoaHoc || "KHÓA HỌC CỦA CHÚNG TÔI"}</span>
          <h4 className="title-route">
            <NavLink className="custom-color" to="/">
              Trang Chủ
            </NavLink>
            {" > "}
            <span>{title || "Khóa học của chúng tôi"}</span>
          </h4>
        </div>
      </div>
    </section>
  );
}
