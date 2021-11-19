import React from "react";
import { NavLink } from "react-router-dom";
// import Img1 from "../../assets/img/1.png";
// import Img2 from "../../assets/img/2.png";
// import Img3 from "../../assets/img/3.jpg";
// import Img4 from "../../assets/img/4.jpg";
// import Img5 from "../../assets/img/5.png";
// import Img6 from "../../assets/img/6.jpg";
export default function ItemCategory(props) {
  return (
    <NavLink
      className="item-category"
      to={`/courses/${props.category.maDanhMuc}`}
    >
      <div className="overflow"></div>
      <img src={`./img/${props.hinhAnh}.jpg`} alt="img-category" />
      <div className="content">
        <h6>{props.category.tenDanhMuc}</h6>
      </div>
    </NavLink>
  );
}
