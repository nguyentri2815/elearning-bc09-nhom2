import React from "react";
import "../../styles/View/signin/sigin.scss";
import { signin } from "../../store/actions/auth";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";

import Container from "@mui/material/Container";
import { message } from "antd";

const schemaUser = yup.object().shape({
  taiKhoan: yup.string().required("* UserName is Required"),
  matKhau: yup.string().required("* Password is Required"),
});

export const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formik.isValid);
    if (!formik.isValid) return;

    dispatch(
      signin(
        formik.values,
        () =>
          setTimeout(() => {
            history.push("/");
          }, 500),
        () =>
          message.success({
            content: "Đăng nhập thành công !!!",
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
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: schemaUser,
    validateOnMount: true,
  });
  return (
    <div className="signin">
      <div className="wrapper">
        <Container>
          <h1 className="title">Login</h1>
          <h4>Have an account?</h4>
          <form onSubmit={handleSubmit} className="formContent">
            <div>
              <input
                className="themeInput"
                onBlur={formik.handleBlur}
                placeholder="Enter UserName"
                name="taiKhoan"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
              {formik.touched.taiKhoan && (
                <p className="errorTheme">{formik.errors.taiKhoan}</p>
              )}
            </div>
            <div className="button-footer">
              <input
                className="themeInput"
                onBlur={formik.handleBlur}
                placeholder="Enter PassWord"
                name="matKhau"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
              />
              {formik.touched.matKhau && (
                <p className="errorTheme">{formik.errors.matKhau}</p>
              )}
              <button className="themeButton">Login</button>
              <p className="login__signup">
                Don't have an account? &nbsp;
                <NavLink className="signup" to="signup">
                  Sign up
                </NavLink>
              </p>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};
