import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { fetchCourse } from "../../store/actions/course";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import ImgUser from "../../assets/img/user.png";
import BgDetail from "../../assets/img/10.jpg";
import Banner from "../../components/Course/Banner";
import ImgDefaulft from "../../assets/img/defaulft.jpg";
import BGOVERFLOW from "../../assets/img/bg-2.png";
import { message } from "antd";
import { actaddToCart } from "../../store/actions/cart";

export default function Detail(props) {
  const dispatch = useDispatch();
  const onTop = () => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  };
  const { id } = props.match.params;
  const { search } = props.location;
  const gia = search.slice(1, search.length);

  const getInfoCourse = useCallback(() => {
    dispatch(fetchCourse(id));
  }, [dispatch, id]);

  useEffect(() => {
    getInfoCourse();
  }, [dispatch, getInfoCourse]);

  const { courseDetail } = useSelector((state) => state.course);
  const { listCart } = useSelector((state) => state.cart);
  const me = useSelector((state) => state.me);
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
    if (!me) {
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
          ĐẾN HỒ SƠ
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
        <button onClick={() => addToCart(data)} className="btn--blue btnn">
          THÊM GIỎ HÀNG
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <NavLink className="btn--purple btnn" onClick={onTop} to="/cart">
          ĐẾN GIỎ HÀNG
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
      );
    }
  };
  return (
    <section className="detail-Course">
      <Header />
      <div className="wrap-detailCourse">
        <div className=" header-detailCourse">
          <Banner
            hinhAnh={BgDetail}
            title="Chi tiết khóa học"
            tenKhoaHoc={courseDetail.tenKhoaHoc}
          />
        </div>

        <div className="body-detailCourse">
          <Grid container>
            <Grid item xs={8} className="col-8 ">
              <div className="Information-Course">
                <div className="tittle-course">
                  {courseDetail.tenKhoaHoc}
                  <span className="price-course">{gia || "99"}$</span>
                </div>
                <div className="info-content">
                  <Grid container className="row m-0">
                    <Grid item xs={3} className="col-3">
                      <div className="item-content teacher-content">
                        <img alt="#" className="teacher-img" src={ImgUser} />
                        <div className="content">
                          <p>
                            Giảng viên
                            <p>
                              {courseDetail.nguoiTao
                                ? courseDetail.nguoiTao.hoTen
                                : "Giang Viêm Tạm"}
                            </p>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} className="col-3 borderxx">
                      <div className="item-content ">
                        <div className="content">
                          <p>
                            Danh Mục
                            <p>
                              {courseDetail.danhMucKhoaHoc
                                ? courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc
                                : "Tất Cả"}
                            </p>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} className="col-3">
                      <div className="item-content ">
                        <div className="content">
                          <p>
                            Đánh giá
                            <p>
                              5 <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={3} className="col-3">
                      <div className="item-content">
                        <div className="content last-content">
                          {checkEnrolled(courseDetail)}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="image-detail-course">
                  <div className="dc-overflow">
                    <img src={BGOVERFLOW} alt="#" />
                  </div>
                  <img src={courseDetail.hinhAnh || ImgDefaulft} alt="Detail" />
                </div>
              </div>
            </Grid>

            <Grid item xs={4} className="col-4">
              <div className="FearureCourse">
                <p className="featre-tittle">Thông tin khóa học</p>
                <ul>
                  <li>
                    <i class="fa fa-clone"></i>
                    <span>
                      Tên khóa học:
                      <span>
                        {courseDetail.tenKhoaHoc || "Lập trình cuộc sống"}
                      </span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-list-ul"></i>
                    <span>
                      Danh mục:
                      <span>
                        {courseDetail.danhMucKhoaHoc
                          ? courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc
                          : "Tất Cả"}
                      </span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    <span>
                      Mô tả:
                      <span>{courseDetail.moTa || "Cam Kết Mất Tiền"}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>
                      Ngày tạo:
                      <span>{courseDetail.ngayTao || "20/08/2021"}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span>
                      Lượt xem: <span>{courseDetail.luotXem || "1000"}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>
                      Học viên:
                      <span>{courseDetail.soLuongHocVien || "9"}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>
                      Giá : <span>{gia || "Free"}$</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </section>
  );
}
