import axios from "axios";
import { TokenCybersoft, api } from "../../utils/config";
import {
  callApi,
  callApiAttachToken,
  //  callApiAttachToken
} from "../../utils/callAPI";
import { createAction } from "./index";
import { actionType } from "./type";

export const signin = (userLogin, pushFunc, successMes, callbackError) => {
  return async (dispatch) => {
    try {
      const res = await callApi("QuanLyNguoiDung/DangNhap", "POST", userLogin);
      console.log("Data Đăng Nhập", res);

      dispatch(createAction(actionType.SET_ME, res.data));
      // dispatch(fetchMe());
      localStorage.setItem("t", res.data.accessToken);

      successMes();
      pushFunc();
    } catch (err) {
      // console.log(err.response);
      callbackError(err.response.data);
    }
  };
};

export const signup = (info, pushFunc, successMes, callbackError,me,useredit) => {
  return async (dispatch) => {
    try {
      const linkApi=useredit.taiKhoan?'QuanLyNguoiDung/CapNhatThongTinNguoiDung':me==='GV'?'QuanLyNguoiDung/ThemNguoiDung':'QuanLyNguoiDung/DangKy';
      const methob=useredit.taiKhoan?"PUT":"POST";
      const res = await callApi(linkApi, methob, info);
      // console.log(res);
      console.log(res);
      successMes();
      pushFunc();
    } catch (err) {
      callbackError(err.response.data);
    }
  };
};

export const fetchMe = async (dispatch) => {
  try {
    const res = await axios({
      url: api + `/QuanLyNguoiDung/ThongTinNguoiDung`,
      method: "POST",
      headers: {
        TokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem("t"),
      },
    });
    // console.log(res);
    dispatch(createAction(actionType.SET_ME, res.data));
  } catch (err) {
    console.log(err);
  }
};
export const actLogOut = () => {
  return (dispatch) => {
    localStorage.removeItem("t");
    dispatch(createAction(actionType.LOGOUT_ACCOUNT));
  };
};

export const actUpdateInfoAccount = (data, funcSuccess, funcError) => {
  const token = localStorage.getItem("t");
  console.log(token);
  return async (dispatch) => {
    try {
      const res = await axios({
        url: api + `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: data,
        headers: {
          TokenCybersoft,
          Authorization: "Bearer " + localStorage.getItem("t"),
        },
      });
      funcSuccess();
      // console.log(res);
    } catch (err) {
      funcError(err);
      console.log(err);
    }
  };
};

// export const fetchMe = async (dispatch) => {
//   const token = localStorage.getItem("t");
//   try {
//     const res = await callApiAttachToken(
//       "QuanLyNguoiDung/ThongTinTaiKhoan",
//       "POST",

//       token
//     );
//     console.log(res);
//     dispatch(createAction(actionType.SET_ME, res.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
