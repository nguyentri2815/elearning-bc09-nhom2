import { createAction } from ".";
// import { callApi } from "../../utils/callAPI";
import { actionType } from "./type";
import { TokenCybersoft, api } from "../../utils/config";
import axios from "axios";
import { callApiAttachToken } from "../../utils/callAPI";
export const actaddToCart = (data) => {
  return (dispatch) => {
    dispatch(createAction(actionType.ADD_TO_CART, data));
  };
};
export const actDeleteInTheCart = (data, funcSuccess) => {
  return (dispatch) => {
    dispatch(createAction(actionType.DET_INTHE_CART, data));
    funcSuccess();
  };
};
export const actCancelAttendCourse = (data, funcSussess) => {
  const token = localStorage.getItem("t");
  return async (dispatch) => {
    try {
      const res = await axios({
        url: api + `/QuanLyKhoaHoc/HuyGhiDanh`,
        method: "POST",
        data: data,
        headers: {
          TokenCybersoft,
          Authorization: `Bearer ${token} `,
        },
      });
      console.log(res);
      funcSussess();
      dispatch(createAction(actionType.CANCEL_ATTEND_COURSE, data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const actRegisterCourse = (listCart, account, funcSuccess) => {
  const token = localStorage.getItem("t");
  return async (dispatch) => {
    try {
      listCart.map((item) => {
        callApiAttachToken(
          "QuanLyKhoaHoc/DangKyKhoaHoc",
          "POST",
          {
            maKhoaHoc: item.maKhoaHoc,
            taiKhoan: account,
          },
          token
        );
      });
      funcSuccess();
      dispatch(createAction(actionType.RELOAD_CART));
    } catch (err) {
      console.log(err);
    }
  };
};
