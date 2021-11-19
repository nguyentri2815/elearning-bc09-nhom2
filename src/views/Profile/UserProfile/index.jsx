import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { actUpdateInfoAccount } from "../../../store/actions/auth";
import { message } from "antd";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("UserName is Required"),
  matKhau: yup.string().required("PassWord is Required"),
  email: yup.string().required("Email is Required").email("Email is Invalid"),
  soDT: yup
    .string()
    .required("Phone is Required")
    .matches(/^[0-9]+$/, "Phone is Invalid"),
  hoTen: yup.string().required("FullName is Required"),
});

export default function UserProfile() {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const me = useSelector((state) => state.me);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  const getDataUser = () => {
    if (me) {
      const { taiKhoan, matKhau, hoTen, soDT, maLoaiNguoiDung, email } = me;
      formik.setValues({
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        hoTen: hoTen,
        soDT: soDT,
        maLoaiNguoiDung: maLoaiNguoiDung,
        maNhom: "GP01",
        email: email,
      });
    }
    return;
  };
  useEffect(() => {
    getDataUser();
  }, [me]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formik.isValid) return;
    dispatch(
      actUpdateInfoAccount(
        formik.values,
        () =>
          message.success({
            content: "Đổi Thành Công !!!",
            style: { marginTop: "20vh", color: "green" },
            duration: 1,
          }),
        (data) =>
          message.error({
            content: data,
            style: { marginTop: "20vh", color: "red" },
            duration: 1,
          })
      )
    );
    console.log(formik.values);
    handleButton();
  };
  const handleButton = () => {
    setIsDisable(!isDisable);
  };

  return (
    <div className="userProfile">
      <form onSubmit={handleSubmit} className="formControl">
        <div className="form-item">
          <h1>Tài Khoản:</h1>
          <TextField
            className="input"
            size="small"
            type="text"
            name="taiKhoan"
            disabled={isDisable ? true : true}
            label="Tài Khoản"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
            helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
          />
        </div>
        <div className="form-item">
          <h1>Mật Khẩu:</h1>
          <TextField
            className="input"
            size="small"
            type="text"
            name="matKhau"
            disabled={isDisable ? true : false}
            label="Mật Khẩu"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
            helperText={formik.touched.matKhau && formik.errors.matKhau}
          />
        </div>

        <div className="form-item">
          <h1>Họ Tên:</h1>
          <TextField
            className="input"
            size="small"
            type="text"
            name="hoTen"
            disabled={isDisable ? true : false}
            label="Họ Tên"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hoTen}
            helperText={formik.touched.hoTen && formik.errors.hoTen}
          />
        </div>
        <div className="form-item">
          <h1>Số ĐT:</h1>
          <TextField
            className="input"
            size="small"
            type="text"
            name="soDT"
            disabled={isDisable ? true : false}
            label="Số Điện Thoại"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.soDT}
            helperText={formik.touched.soDT && formik.errors.soDT}
          />
        </div>
        <div className="form-item">
          <h1>Email:</h1>
          <TextField
            className="input"
            size="small"
            type="text"
            name="email"
            disabled={isDisable ? true : false}
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="buttonForm">
          {!isDisable ? (
            <button type="submit" className="btn--green btnn">
              Lưu
            </button>
          ) : (
            <span
              type="button"
              className="btn--blue btnn"
              onClick={handleButton}
            >
              Sửa Thông Tin
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
