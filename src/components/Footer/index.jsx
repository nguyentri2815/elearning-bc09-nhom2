import React from "react";
import { Grid, Typography } from "@mui/material";
import LOGO from "../../assets/img/logo.png";
import BGFOOTER from "../../assets/img/21.jpg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: ` url(${BGFOOTER})` }}>
      <div className="container">
        <div className="main-content">
          <div className="logo-title">
            <img src={LOGO} className="img-fluid" />
            <h1>Elearning</h1>
          </div>
          <div className="grid-content">
            <div className="chinh-sach">
              <Typography component="div" variant="h5" className="title">
                Chính sách &amp; quy định
              </Typography>
              <div className="list-unstyled">
                <div className="list-item">
                  <NavLink className="text-style" to="/">
                    Thỏa thuận sử dụng
                  </NavLink>
                </div>
                <div className="list-item">
                  <NavLink className="text-style" to="/">
                    Quy chế hoạt động
                  </NavLink>
                </div>
                <div className="list-item">
                  <NavLink className="text-style" to="/">
                    Chính sách bảo mật
                  </NavLink>
                </div>
                <div className="list-item">
                  <NavLink className="text-style" to="/">
                    Quyền lợi thành viên
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="lien-ket">
              <Typography variant="h5" className="title">
                Liên kết
              </Typography>

              <div className="d-flex">
                <NavLink to="https://www.facebook.com/" className="facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </NavLink>

                <NavLink
                  to="https://www.youtube.com/user/myclassvn"
                  className="youtube"
                >
                  <i className="fa fa-youtube" aria-hidden="true" />
                </NavLink>
              </div>
            </div>

            <div className="lien-he ">
              <Typography className="title">Liên hệ</Typography>
              <div className="list-unstyled">
                <div className="list-item">
                  <i className="fa fa-envelope-o" aria-hidden="true">
                    <span>elearning.govap@gmail.com</span>
                  </i>
                </div>
                <div className="list-item">
                  <i className="fa fa-phone" aria-hidden="true">
                    <span>0123456789</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-mid" />

        <div className="second-content ">
          <div className="img-footer">
            <img
              src="https://hocmai.vn/theme/new2/images/congthuong.png"
              className="img-fluid"
            />
          </div>

          <div className="text-right">
            <p>SẢN PHẨM ĐƯỢC TẠO BỞI A &amp; B</p>
            <p>ĐỊA CHỈ: 01 NGUYỄN OANH - GÒ VẤP, TP.HCM</p>
            <p>2021 © Elearning. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
