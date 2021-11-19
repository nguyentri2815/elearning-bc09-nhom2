import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";

import { actLogOut, fetchMe } from "../../store/actions/auth";
import LOGO from "../../assets/img/logo.png";

import { message } from "antd";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const fethchUser = useCallback(() => {
    if (localStorage.getItem("t")) dispatch(fetchMe);
  }, [dispatch]);
  useEffect(() => {
    fethchUser();
  }, [fethchUser]);

  const me = useSelector((state) => state.me);
  const { listCart } = useSelector((state) => state.cart);

  //Cập Nhật Chức Năng
  const renderNotice = () => {
    return message.warning({
      content: "Ứng dụng đang được xây dựng",
      style: { color: "#9D5C0D" },
      duration: 1.5,
    });
  };

  const handleLogOut = useCallback(() => {
    dispatch(actLogOut());

    window.location.replace("/");
  }, [dispatch]);

  const renderUser = () => {
    return (
      <div className="menu-user">
        <Button size="large" color="inherit">
          <AccountCircle style={{ marginRight: 3 }} />
          <div style={{ fontSize: "10px" }}>{me.hoTen}</div>
        </Button>
        <div className="drop-down" onClick={handleOpenMenu}>
          <div className={isOpen ? "icon-down-active" : "icon-down"}>
            <i className="fas fa-sort-down"></i>
          </div>

          <div className={isOpen ? "menu-open" : "menu-close"}>
            <NavLink to="/profile" className="header-drop-down-icon">
              <i className="fas fa-user"></i>
              <span className="p-30">Profile</span>
            </NavLink>

            <div className="header-drop-down-icon" onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i>
              <span className="p-30">Logout</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderLogin = () => {
    return (
      <div className="login">
        <NavLink className="btn--blue bttn " to="/signin">
          SIGN IN
        </NavLink>
      </div>
    );
  };
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(!toggle);
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 180);
    });
  }, []);
  // console.log(scroll);
  return (
    <section className="header">
      <div className={!scroll ? "scroll-false" : "scroll-true"}>
        <Container>
          <div className="header-wrapper">
            <div className="logo">
              <div className="menu" onClick={menuToggle}>
                <i className="fas fa-bars"></i>
              </div>
              <NavLink to="/" className="title">
                <img src={LOGO} alt="LOGO" />
                <h1>Elearning</h1>
              </NavLink>
            </div>
            <div className="nav">
              <ul className={toggle ? "toggle" : "ul"}>
                <li>
                  <NavLink
                    className="navLink"
                    exact
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/courses/all">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={renderNotice}
                    className="navLink"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={renderNotice}
                    className="navLink"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="close" onClick={menuToggle}>
                  <i className="fas fa-times"></i>
                </li>
              </ul>
            </div>
            <div className="nav-cart">
              <span>{listCart.length}</span>
              <NavLink className="shopingIcon" to="/cart">
                <i
                  className="fa fa-shopping-cart shopingIcon"
                  aria-hidden="true"
                ></i>
              </NavLink>
            </div>
            <div className="user">
              {!me ? <>{renderLogin()}</> : <>{renderUser()}</>}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Header;
