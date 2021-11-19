import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Pagination } from "@mui/material";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import {
  Button, Card, Col, Container, Figure, Form, FormControl, InputGroup, Nav, Row, Table
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch, useHistory, useParams, useRouteMatch
} from "react-router-dom";
import { createAction } from "../store/actions";
import { fetchAllUser } from "../store/actions/fetchusers";
import { actionType } from "../store/actions/type";
import { callApi } from "../utils/callAPI";
import Header from "./components/Header";
import "./styles.scss";
import ContentRoute from "./views/ContentRoute";
AdminElearing.propTypes = {};
const renderAvatar = () => (
  <Figure className="m-0">
    <Figure.Image
      width={50}
      height={50}
      alt="avatar-admin"
      src="./img/user.png"
      className="mb-0"
    />
  </Figure>
);
function AdminElearing(props) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const { allUser } = useSelector((state) => state.adminUsers);
  const [page, setPage] = useState(allUser.currentPage || 1);
  const [search, setSearch] = useState("");
  // const [listUsers, setlistUsers] = useState([]);
  let { path, url } = useRouteMatch();
  let historySplit = history.location.pathname.split("/");
  console.log(historySplit);
  const dispatch = useDispatch();

  const toggleSideMenu = () => setShow(!show);
  // fetch danh sach user
  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUser(search, page, 10));
  }, [search, page]);

  const handleFind = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (item) => {
    dispatch(createAction(actionType.EDIT_USER, item));
    setTimeout(() => {
      history.push("/signup");
    }, 50);
  };
  const clearUserEdit = (item) => {
    item = {};
    dispatch(createAction(actionType.EDIT_USER, item));
  };
  const handleDelete = (taiKhoan) => {
    console.log("xoa di");
    try {
      var result = window.confirm("bạn có chắc muốn xóa user này?");
      if (result) {
        const res = callApi(
          `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          "DELETE"
        );
        const success = () =>
          message.success({
            content: "xóa thành công !!!",
            style: { marginTop: "20vh", color: "green" },
            duration: 1,
          });
        success();
        dispatch(fetchAllUser());
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
  let { namePage } = useParams();
  let stt = (page - 1) * 10 + 1;
  return (
    <>
      <Header toggleSideMenu={toggleSideMenu} />
      <Container fluid>
        <Row className="">
          <Col
            sm={2}
            className={show ? "bg-dark text-white side-menu" : "d-none"}
          >
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <div className="pt-5 mt-2">
              <h1 className="mt-4">
                {historySplit[2] === "user" || historySplit[2] === undefined
                  ? "Quản lý người dùng"
                  : historySplit[2] === "course"
                  ? "Quản lý khóa học"
                  : historySplit[3]}
              </h1>
              <ol className="breadcrumb bg-secondary mb-4 p-3">
                <li className="breadcrumb-item text-white  active">
                  <span>
                    {historySplit[2] === "user" || historySplit[2] === undefined
                      ? "Quản lý người dùng"
                      : historySplit[2] === "course"
                      ? "Quản lý khóa học"
                      : historySplit[3]}
                  </span>
                </li>
              </ol>
            </div>
            {/* route page */}
            <Row lg={4} md="2">
              <Col className="my-2">
                <Link to={`${url}`} className="d-block h-100">
                  <Card className="bg-primary text-white h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="flex-grow-1 py-4 px-3">
                        Quản lý người dùng
                      </Card.Title>
                      <Button
                        variant="primary"
                        className="w-100 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-nowrap">Xem danh sánh</span>
                        <ArrowRightIcon />
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col className="my-2">
                <Link to={`${url}/course`} className="d-block h-100">
                  <Card className="bg-danger text-white h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="flex-grow-1 py-4 px-3">
                        Quản lý khóa học
                      </Card.Title>
                      <Button
                        variant="danger"
                        className="w-100 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-nowrap">Xem danh sách</span>
                        <ArrowRightIcon />
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col className="my-2">
                <Link to={`${url}/honors`} className="d-block h-100">
                  <Card className="bg-warning text-white h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="flex-grow-1 py-4 px-3">
                        Ghi danh
                      </Card.Title>
                      <Button
                        variant="warning"
                        className="w-100 d-flex align-items-center justify-content-between text-white"
                      >
                        <span className="text-nowrap">Xem danh sách</span>
                        <ArrowRightIcon />
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col className="my-2">
                <Link to={`${url}/cancel-honors`} className="d-block h-100">
                  <Card className="bg-success text-white h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="flex-grow-1 py-4 px-3">
                        Hủy ghi danh
                      </Card.Title>
                      <Button
                        variant="success"
                        className="w-100 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-nowrap">xem danh sách</span>
                        <ArrowRightIcon />
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            {/* content */}
            <div>
              <Switch>
                {/* user management */}
                <Route exact path={`${path}`}>
                  <Card>
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
                          <Link to={"/signup"} onClick={clearUserEdit}>
                            <Button variant="success">
                              {" "}
                              <AddIcon /> Thêm người dùng
                            </Button>
                          </Link>
                        </Col>
                      </Row>

                      <Card.Body>
                        <Table
                          striped
                          bordered
                          hover
                          responsive
                          className="align-middle"
                        >
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th className="text-nowrap">tài Khoản</th>
                              <th className="text-nowrap">Họ Tên</th>
                              <th>Email</th>
                              <th className="text-nowrap">Số Điện Thoại</th>
                              <th className="text-nowrap">
                                mã Loại Người Dùng
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {allUser.items ? (
                              allUser.items.map((item) => (
                                <tr key={item.taiKhoan}>
                                  <td>{stt++}</td>
                                  <th>{item.taiKhoan}</th>
                                  <th>{item.hoTen}</th>
                                  <th>{item.email}</th>
                                  <th>{item.soDt}</th>
                                  <th>{item.maLoaiNguoiDung}</th>
                                  <th>
                                    <Button
                                      variant="warning"
                                      className="m-1"
                                      onClick={() => handleEdit(item)}
                                    >
                                      Sửa
                                    </Button>
                                    <Button
                                      variant="danger"
                                      className="m-1"
                                      onClick={() =>
                                        handleDelete(item.taiKhoan)
                                      }
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
                        count={allUser.totalPages}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChangePage}
                      />
                    </Card.Footer>
                  </Card>
                </Route>
                <Route path={`${path}/:namepage`}>
                  <ContentRoute />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminElearing;
