
import { createAction } from ".";
import { callApi } from "../../utils/callAPI";
import { actionType } from "./type";

//all
export const fetchAllUser = (tuKhoa,page,pageSize)=>{
  return async (dispatch) => {
    let text1="QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?";
    let text2=tuKhoa?`&tuKhoa=${tuKhoa}`:'';
    let text3=`&page=${page}&pageSize=${pageSize}`
    try {
      const res = await callApi(
        text1+text2+text3,
        "GET",
      );
      console.log(res);
      dispatch(createAction(actionType.SET_ALLUSERS, res.data));
    } catch (err) {
      console.log(err);
    }
  }
};
//edit
export const signup = (info, pushFunc, successMes, callbackError) => {
  return async (dispatch) => {
    try {
      const res = await callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung', "PUT", info);
      // console.log(res);
      console.log(res);
      successMes();
      pushFunc();
    } catch (err) {
      callbackError(err.response.data);
    }
  };
};