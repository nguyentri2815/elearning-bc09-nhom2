// import axios from "axios";
import { createAction } from ".";
import { callApi } from "../../utils/callAPI";
import { actionType } from "./type";
// import { TokenCybersoft } from "../../utils/config";

//tạo ra 1 async action để fetch ds khoá học
export const fetchCourses = (page, name) => {
  return async (dispatch) => {
    try {
      const res = await callApi(
        `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${name}&page=${page}&pageSize=8&MaNhom=GP01`,
        "GET",
        null
      );
      // console.log(res.data);

      dispatch(createAction(actionType.SET_COURSES, res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchAllCourses = async (dispatch) => {
  try {
    const res = await callApi(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
      "GET",
      null
    );
    dispatch(createAction(actionType.SET_ALLCOURSES, res.data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchCourse = (id) => {
  return async (dispatch) => {
    try {
      const res = await callApi(
        "QuanLyKhoaHoc/LayThongTinKhoaHoc",
        "GET",
        null,
        { maKhoaHoc: id }
      );

      dispatch(createAction(actionType.SELECTED_PRODUCT, res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCategory = async (dispatch) => {
  try {
    const res = await callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`, "GET", null);
    dispatch(createAction(actionType.GET_CATEGORY, res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getCoursesByCategory = (category) => {
  return async (dispatch) => {
    try {
      const res = await callApi(
        "QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",
        "GET",
        null,
        { maDanhMuc: category, maNhom: "GP01" }
      );

      dispatch(createAction(actionType.GET_COURSESBYCAT, res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCourse = (info, pushFunc, successMes, callbackError,me,useredit) => {
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
export const addCourseAdmin = (info, pushFunc, successMes, callbackError,courseUpdate) => {
  return async (dispatch) => {
    try {
      let link=courseUpdate.maKhoaHoc?"QuanLyKhoaHoc/CapNhatKhoaHoc":"QuanLyKhoaHoc/ThemKhoaHoc"
      let method=courseUpdate.maKhoaHoc?"PUT":"POST"
      const res = await callApi(link, method, info);
      // console.log(res);
      console.log(res);
      successMes();
      pushFunc();
    } catch (err) {
      callbackError(err.response.data);

    }
  };
};

export const updateCourse = (updateCourse) => {
  return async (dispatch) => {
    try {
      const res = await callApi("QuanLyKhoaHoc/CapNhatKhoaHoc", "POST", updateCourse);
      console.log("Data Đăng Nhập", res);

      dispatch(createAction(actionType.UPDATE_COURSE, res.data));
      // dispatch(fetchMe());

      // successMes();
      // pushFunc();
    } catch (err) {
      // console.log(err.response);
      alert(err)
    }
  };
};


export const uploadFile = (formData) => {
  return async (dispatch) => {
    try {
      const res = await callApi("QuanLyKhoaHoc/ThemKhoaHocUploadHinh", "POST", formData);

      dispatch(createAction(actionType.UPDATE_COURSE, res.data));
      // dispatch(fetchMe());

      // successMes();
      // pushFunc();
      alert("thanh cong")
    } catch (err) {
      // console.log(err.response);
      alert(err)
    }
  };
};

