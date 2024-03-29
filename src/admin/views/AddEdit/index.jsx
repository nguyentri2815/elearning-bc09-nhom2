import { message } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
    Form,Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import {
    addCourseAdmin,
    getCategory
} from "../../../store/actions/course";
import { callApi } from "../../../utils/callAPI";
AddEdit.propTypes = {};
const schemaUser = yup.object().shape({
  maKhoaHoc: yup.string().required("* maKhoaHoc is Required"),
  biDanh: yup.string().required("* biDanh is Required"),
  tenKhoaHoc: yup.string().required("* tenKhoaHoc is Required"),
  moTa: yup.string().required("* moTa is Required"),
  luotXem: yup.string().required("* luotXem is Required"),
  danhGia: yup.string().required("* danhGia is Required"),
  hinhAnh: yup.string().required("* hinhAnh is Required"),
  maNhom: yup.string().required("* maNhom is Required"),
  ngayTao: yup.string().required("* ngayTao is Required"),
  maDanhMucKhoaHoc: yup.string().required("* maDanhMucKhoaHoc is Required"),
});
function AddEdit(props) {
//     const [selectedFile, setSelectedFile] = useState();
//    const [isFilePicked, setIsFilePicked] = useState(false);


  const dispatch = useDispatch();
  const history = useHistory();
  const getCategoryRedux = useSelector(
    (state) => state.course.listCategoryCourse
  );
  const courseUpdate = useSelector((state) => state.course.courseUpdate);
  //   const [initCourse, setinitCourse] = useState({});
  console.log(courseUpdate);
  const me = useSelector((state) => state.me);
  useEffect(() => {
    dispatch(getCategory);
  }, []);
  //   console.log(getCategoryRedux);


  const handleSubmit = (e) => {
    console.log(formik.values);
    e.preventDefault();
    console.log(formik);
    if (!formik.isValid) return;
    dispatch(
      addCourseAdmin(
        formik.values,
        () =>
          setTimeout(() => {
            history.push("/admin/course");
          }, 500),
        () =>
          message.success({
            content: "thành công !!!",
            style: {
              marginTop: "20vh",
              color: "green",
              position: "relative",
              zIndex: "9999",
            },
            duration: 1,
          }),
        (data) =>
          message.error({
            content: data,
            style: {
              marginTop: "20vh",
              color: "red",
              position: "relative",
              zIndex: "9999",
            },
            duration: 1,
          }),
          courseUpdate
      )
    );
  };

  const formik = useFormik({
    initialValues: courseUpdate.maKhoaHoc?courseUpdate:{
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: me.taiKhoan,
    },
    validationSchema: schemaUser,
    validateOnMount: true,
  });
console.log(formik);

//   const changeHandler = (event) => {
//     setSelectedFile(event.target.files[0]);
//      setIsFilePicked(true);
//      formik.setValues(selectedFile)
//    };

//   const handleSubmission = () => {
//     const formData = new FormData();
  
//      formData.append('File', selectedFile);

//      const uploadFile = (formData) => {
//       return async (dispatch) => {
//         try {
//           const res = await callApi("QuanLyKhoaHoc/ThemKhoaHocUploadHinh", "POST", formData);
  
//           alert("thanh cong")
//         } catch (err) {
//           // console.log(err.response);
//           alert(err)
//         }
//       }
//       }
//       console.log(uploadFile);
//     }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Mã khóa học</Form.Label>
          <Form.Control
            placeholder="Mã khóa học"
            className="themeInput"
            placeholder="Mã khoc học"
            onBlur={formik.handleBlur}
            name="maKhoaHoc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.maKhoaHoc}
          />
          {formik.touched.maKhoaHoc && (
            <div className="valid-feedback d-block">
              {formik.errors.maKhoaHoc}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bí danh</Form.Label>
          <Form.Control
            placeholder="Bí danh"
            className="themeInput"
            placeholder="Bí danh"
            onBlur={formik.handleBlur}
            name="biDanh"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.biDanh}
          />
          {formik.touched.biDanh && (
            <div className="valid-feedback d-block">{formik.errors.biDanh}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>tên khóa học</Form.Label>
          <Form.Control
            placeholder="tên khóa học"
            className="themeInput"
            placeholder="tên khóa học"
            onBlur={formik.handleBlur}
            name="tenKhoaHoc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tenKhoaHoc}
          />
          {formik.touched.tenKhoaHoc && (
            <div className="valid-feedback d-block">
              {formik.errors.tenKhoaHoc}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Lượt xem</Form.Label>
          <Form.Control
            placeholder="Lượt xem"
            className="themeInput"
            placeholder="Lượt xem"
            onBlur={formik.handleBlur}
            name="luotXem"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.luotXem}
          />
          {formik.touched.luotXem && (
            <div className="valid-feedback d-block">
              {formik.errors.luotXem}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Đánh giá</Form.Label>
          <Form.Control
            placeholder="Đánh giá"
            className="themeInput"
            placeholder="Đánh giá"
            onBlur={formik.handleBlur}
            name="danhGia"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.danhGia}
          />
          {formik.touched.danhGia && (
            <div className="valid-feedback d-block">
              {formik.errors.danhGia}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hình ảnh</Form.Label>
          <Form.Control
            placeholder="Hình ảnh"
            className="themeInput"
            placeholder="Hình ảnh"
            onBlur={formik.handleBlur}
            name="hinhAnh"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.hinhAnh}
          />
          {/* {isFilePicked ? (
        <div>
           <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
           <p>Size in bytes: {selectedFile.size}</p>
           <p>Last modified date: {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
         </div>
      ) : (
        <p>Select a file to show details</p>
      )} */}
      <div>
       </div>
          {formik.touched.hinhAnh && (
            <div className="valid-feedback d-block">
              {formik.errors.hinhAnh}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mã nhóm</Form.Label>
          <Form.Select
            placeholder="Mã nhóm"
            onBlur={formik.handleBlur}
            name="maNhom"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.maNhom}
          >
            <option >chọn mã nhóm</option>
            <option value="GP01">GP01</option>
            <option value="GP02">GP02</option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP10">GP10</option>
            <option value="GP11">GP11</option>
            <option value="GP12">GP12</option>
            <option value="GP13">GP13</option>
            <option value="GP14">GP14</option>
            <option value="GP15">GP15</option>
          </Form.Select>
          {formik.touched.maNhom && (
            <div className="valid-feedback d-block">{formik.errors.maNhom}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ngày tạo</Form.Label>
          <Form.Control
            placeholder="Ngày tạo"
            className="themeInput"
            placeholder="Ngày tạo"
            onBlur={formik.handleBlur}
            name="ngayTao"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.ngayTao}
          />
          {(formik.touched.ngayTao || formik.isSubmitting) && (
            <div className="valid-feedback d-block">
              {formik.errors.ngayTao}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mã danh mục khóa học</Form.Label>
          <Form.Select
            placeholder="mã danh mục khóa học"
            className="themeInput"
            onBlur={formik.handleBlur}
            name="maDanhMucKhoaHoc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.maDanhMucKhoaHoc}
          >
              <option >
                Chọn mã danh mục
              </option>
            {getCategoryRedux.map((item) => (
              <option key={item.maDanhMuc} value={item.maDanhMuc}>
                {item.tenDanhMuc}
              </option>
            ))}
          </Form.Select>
          {formik.touched.maDanhMucKhoaHoc && (
            <div className="valid-feedback d-block">
              {formik.errors.maDanhMucKhoaHoc}
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>tài khoản người tạo</Form.Label>
          <Form.Control
            placeholder="tài khoản người tạo"
            className="themeInput"
            placeholder="tài khoản người tạo"
            name="taiKhoanNguoiTao"
            type="text"
            disabled
            value={me.taiKhoan}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Mô tả"
            className="themeInput"
            placeholder="Mô tả"
            onBlur={formik.handleBlur}
            name="moTa"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
          {formik.touched.moTa && (
            <div className="valid-feedback d-block">{formik.errors.moTa}</div>
          )}
        </Form.Group>
        <Button type="submit" variant="success" className="w-100 py-2 mb-3">{courseUpdate.maKhoaHoc?'Cập nhật ': 'Thêm mới'}</Button>
      </form>
    </>
  );
}

export default AddEdit;
