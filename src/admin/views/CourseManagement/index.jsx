import AddIcon from "@mui/icons-material/Add";
import { Pagination } from "@mui/material";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
  Table
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { createAction } from "../../../store/actions";
import {
  fetchCourses
} from "../../../store/actions/course";
import { actionType } from "../../../store/actions/type";
import { callApi } from "../../../utils/callAPI";
import "./styles.scss";
CourseManagement.propTypes = {};

function CourseManagement(props) {
  // let { namepage } = useParams();
  const [show, setShow] = useState(true);
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();
  const { courses } = useSelector((state) => state.course);
  const [page, setPage] = useState(+courses.currentPage || 1);
  const [search, setSearch] = useState("");
  // const [listUsers, setlistUsers] = useState([]);
  let { path, url } = useRouteMatch();
  let historySplit = history.location.pathname.split("/");
  console.log(historySplit);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchCourses();
    dispatch(fetchCourses(page, search));
  }, [search, page]);

  const handleFind = (e) => {
    setSearch(e.target.value);
  };
  const courseUpdate = useSelector((state) => state.course.courseUpdate);
  const me = useSelector((state) => state.me);
  const clearUserEdit = (item) => {
    item = {};
    dispatch(createAction(actionType.EDIT_USER, item));
  };
  const addCourse =()=>{
    dispatch(createAction(actionType.EDIT_COURSE,{}));
  }
  const handleEdit = (item) => {
    console.log("danng bam but sua");
    setLgShow(true);
    let convertCourse = {
      maKhoaHoc: item.maKhoaHoc,
      biDanh: item.biDanh,
      tenKhoaHoc: item.tenKhoaHoc,
      moTa: item.moTa,
      luotXem: item.luotXem,
      danhGia: item.danhGia || 5,
      hinhAnh: item.hinhAnh,
      maNhom: item.maNhom,
      ngayTao: item.ngayTao,
      maDanhMucKhoaHoc: item.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: item.nguoiTao.taiKhoan,
    };

    dispatch(createAction(actionType.EDIT_COURSE,convertCourse));
  };

  const handleDelete = (MaKhoaHoc) => {
    console.log("xoa di");
    try {
      var result = window.confirm("bạn có chắc muốn xóa khóa học này?");
      if (result) {
        const res = callApi(
          `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${MaKhoaHoc}`,
          "DELETE"
        );
        const success = () =>
          message.success({
            content: "xóa thành công !!!",
            style: { marginTop: "20vh", color: "green" },
            duration: 1,
          });
        success();
        dispatch(fetchCourses(page, search));
      }
    } catch (err) {
      const errr = (err) =>
        message.error({
          content: err,
          style: { marginTop: "20vh", color: "red" },
          duration: 1,
        });
      errr();
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  let stt = (page - 1) * 10 + 1;
  return (
    <>
      <Card className="content-course">
        <Card.Header>Featured</Card.Header>
        <Form>
          <Row className="mt-3">
            <Col lg={4}>
              <InputGroup className="mb-3">
                <span className="pt-2 pe-3 pb-0 ps-4">search:</span>
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  onChange={handleFind}
                />
              </InputGroup>
            </Col>
            <Col className="text-end me-3">
              <Link to={`addEdit`} onClick={addCourse}>
                <Button variant="success">
                  <AddIcon /> Thêm khóa học
                </Button>
              </Link>
            </Col>
          </Row>

          <Card.Body>
            <Table striped bordered hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>STT</th>
                  <th className="text-nowrap">Hình ảnh</th>
                  <th className="text-nowrap">Mã khóa học</th>
                  <th className="text-nowrap">Bí danh</th>
                  <th className="text-nowrap">tên khóa học</th>
                  <th className="text-nowrap">Mô tả</th>
                  <th className="text-nowrap">Mã nhóm</th>
                  <th className="text-nowrap">ngày tạo</th>
                  <th className="text-nowrap">số lượng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {courses.items ? (
                  courses.items.map((item) => (
                    <tr key={item.maKhoaHoc}>
                      <td>{stt++}</td>
                      <th>
                        <Image
                          src={item.hinhAnh}
                          thumbnail
                          alt={item.hinhAnh}
                        />
                      </th>
                      <th>{item.maKhoaHoc}</th>
                      <th>{item.biDanh}</th>
                      <th>{item.tenKhoaHoc}</th>
                      <th>
                        <p className="mb-0">{item.moTa}</p>
                      </th>
                      <th>{item.maNhom}</th>
                      <th>{item.ngayTao}</th>
                      <th>{item.soLuongHocVien}</th>
                      <th>
                        <Link to={`addEdit`}>
                          <Button
                            variant="warning"
                            className="m-1"
                            onClick={() => handleEdit(item)}
                          >
                            Sửa
                          </Button>
                        </Link>

                        <Button
                          variant="danger"
                          className="m-1"
                          onClick={() => handleDelete(item.maKhoaHoc)}
                        >
                          Xóa
                        </Button>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>loading....</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Form>
        <Card.Footer className="text-muted">
          <Pagination
            count={+courses.totalPages}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          />
        </Card.Footer>
      </Card>
    </>
  );
}

export default CourseManagement;
