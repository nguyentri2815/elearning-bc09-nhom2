import { Container } from "@mui/material";
import { message } from "antd";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import { signup } from "../../store/actions/auth";

const schemaUser = yup.object().shape({
  taiKhoan: yup.string().required("* UserName is Required"),
  matKhau: yup.string().required("* PassWord is Required"),
  email: yup
    .string()
    .required("* Email is Required")
    .email("* Email is Invalid"),
  soDt: yup
    .string()
    .required("Phone is Required")
    .matches(/^[0-9]+$/, "* Phone is Invalid"),
  hoTen: yup.string().required("* FullName is Required"),
  // maLoaiNguoiDung: yup.string().required("* maLoaiNguoiDung is Required"),
});
export const Signup = () => {
  const dispatch = useDispatch();
  const [userType, setUserType] = useState();
  const history = useHistory();
  //lay ma loại nguoi dung đe check
  const me = useSelector((state) => state.me);
  // const me = useSelector((state) => state.me);
  console.log(me);
  const handleSubmit = (e) => {
    console.log(formik.values);
    e.preventDefault();
    console.log(formik);
    if (!formik.isValid) return;
    dispatch(
      signup(
        formik.values,
        () =>
          setTimeout(() => {
            userEditRedux.taiKhoan || me?.maLoaiNguoiDung === "GV" ?history.push("/admin"):
            history.push("/signin");
          }, 500),
        () =>
          message.success({
            content: "Đăng Ký thành công !!!",
            style: { marginTop: "20vh", color: "green" },
            duration: 1,
          }),
        (data) =>
          message.error({
            content: data,
            style: { marginTop: "20vh", color: "red" },
            duration: 1,
          }),
        me?.maLoaiNguoiDung,
        userEditRedux
      )
    );
  };
  useEffect(() => {
    const fetchUserType = async () => {
      const result = await axios(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
      );
      setUserType(result.data);
      console.log(result);
    };
    fetchUserType();
  }, []);
  const userEditRedux = useSelector((state) => state.adminUsers.UserEdit);
  console.log(userEditRedux);

  const formik = useFormik({
    initialValues: userEditRedux.taiKhoan
      ? userEditRedux
      : {
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP01",
          hoTen: "",
          maLoaiNguoiDung: "GV",
        },
    validationSchema: schemaUser,
    validateOnMount: true,
  });

  return (
    <div className="signin">
      <div className="wrapper">
        <Container>
          <h1 className="title">SIGN UP </h1>
          <form onSubmit={handleSubmit} className="formContent">
            <div>
              <input
                className="themeInput"
                placeholder="User Name"
                onBlur={formik.handleBlur}
                name="taiKhoan"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
              {formik.touched.taiKhoan && (
                <p className="errorTheme">{formik.errors.taiKhoan}</p>
              )}
            </div>
            <div>
              <input
                className="themeInput"
                placeholder="PassWord"
                onBlur={formik.handleBlur}
                name="matKhau"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
                disabled={userEditRedux.taiKhoan ? true : false}
              />
              {formik.touched.matKhau && (
                <p className="errorTheme">{formik.errors.matKhau}</p>
              )}
            </div>
            <div>
              <input
                className="themeInput"
                placeholder="Email"
                onBlur={formik.handleBlur}
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && (
                <p className="errorTheme">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <input
                className="themeInput"
                placeholder="Phone"
                onBlur={formik.handleBlur}
                name="soDt"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.soDt}
              />
              {formik.touched.soDt && (
                <p className="errorTheme">{formik.errors.soDt}</p>
              )}
            </div>

            <div>
              <input
                className="themeInput"
                placeholder="FullName"
                onBlur={formik.handleBlur}
                name="hoTen"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
              />
              {formik.touched.hoTen && (
                <p className="errorTheme">{formik.errors.hoTen}</p>
              )}
            </div>
            {me?.maLoaiNguoiDung === "GV" ? (
              <div>
                <Form.Select
                  size="sm"
                  className="themeInput "
                  placeholder="Mã loại người dùng"
                  onBlur={formik.handleBlur}
                  name="maLoaiNguoiDung"
                  // type="text"
                  onChange={formik.handleChange}
                  value={formik.values.maLoaiNguoiDung}
                >
                  {userType?.map((item) => (
                    <option
                      key={item.maLoaiNguoiDung}
                      value={item.maLoaiNguoiDung}
                    >
                      {item.tenLoaiNguoiDung}
                    </option>
                  ))}
                </Form.Select>
              </div>
            ) : (
              ""
            )}
            <div className="button-footer">
              <button className="themeButton">
                {userEditRedux.taiKhoan
                  ? "UPDATE"
                  : me?.maLoaiNguoiDung === "GV"
                  ? "ADD USER"
                  : "SIGN UP"}
              </button>
              {userEditRedux.taiKhoan || me?.maLoaiNguoiDung === "GV" ? (
                ""
              ) : (
                <p className="login__signin">
                  <span>Have an account? &nbsp; </span>
                  <NavLink className="signin" to="signin">
                    Signin
                  </NavLink>
                </p>
              )}
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};
