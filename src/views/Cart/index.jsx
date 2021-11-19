import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Banner from "../../components/Course/Banner";
import BgCart from "../../assets/img/13.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import ItemCourse from "../../components/ItemCourse";
import BillCart from "./BillCart";

export default function CartComponent() {
  const onTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    onTop();
  }, []);
  const { listCart } = useSelector((state) => state.cart);
  const me = useSelector((state) => state.me);
  const renderListCart = () => {
    return listCart.map((item, index) => {
      return <ItemCourse key={index} item={item} callApi={false} />;
    });
  };
  return (
    <>
      <section className="detail-cart">
        <Header />
        <div className="wrap-detailCourse">
          <div className=" header-detailCourse">
            <Banner
              hinhAnh={BgCart}
              title="Chi tiết giỏ hàng"
              tenKhoaHoc="THÔNG TIN GIỎ HÀNG"
            />
          </div>
        </div>
        <div className="row">
          <div className="list-cart">
            <div className="content">
              <div className="header-list-cart">
                <p>KHÓA HỌC</p>
                <p>GIÁ TRỊ</p>
              </div>
              <div className="mct-list-cart">
                {listCart.length === 0 ? (
                  <div className="no-course">
                    KHÔNG CÓ KHÓA HỌC NÀO TRONG GIỎ HÀNG
                  </div>
                ) : (
                  renderListCart()
                )}
              </div>
            </div>
          </div>
          <div className="bill">
            <BillCart listCart={listCart} account={me ? me.taiKhoan : ""} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
