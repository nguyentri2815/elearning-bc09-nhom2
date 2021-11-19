import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actRegisterCourse } from "../../../store/actions/cart";

export default function BillCart(props) {
  const dispatch = useDispatch();
  const { listCart, account } = props;

  const handleOnRegister = () => {
    dispatch(
      actRegisterCourse(listCart, account, () => {
        message.info({
          content: "Đăng kí thành công",
          style: { marginTop: "20vh", color: "#18aaf0" },
          duration: 1.5,
        });
      })
    );
    return console.log("Thanh Toán");
  };

  return (
    <section className="bill-cart">
      <h3 className="text-center">THÔNG TIN ĐƠN HÀNG</h3>
      <div className="so-luong">
        <p>Số lượng: </p>
        <p className="fee">
          {listCart ? listCart.length : "0 Có Khóa Học nào"} khóa học
        </p>
      </div>
      <div className="tam-tinh">
        <p>Tạm tính: </p>
        <p className="fee">ApiNoPrice</p>
      </div>

      <div className=" apply">
        <input disabled type="text" placeholder="Mã giảm giá" />
        <button disabled className="btn--purple">
          APPLY
        </button>
      </div>
      <div className="total">
        <p>Tổng tiền: </p>
        <p className="fee">ApiNoPrice</p>
      </div>
      <p className="text-right">Đã bao gồm VAT (nếu có)</p>
      <div className="button-form">
        {listCart.length > 0 ? (
          <button className="btn--blue" onClick={handleOnRegister}>
            ĐĂNG KÍ KHÓA HỌC
          </button>
        ) : (
          <NavLink to="/courses/all" className="btn--blue nav-link">
            NO COURSE AVAILABLE {"->"} GO TO SHOPPING
          </NavLink>
        )}
      </div>
    </section>
  );
}
