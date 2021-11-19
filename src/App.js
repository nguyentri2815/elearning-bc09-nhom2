import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AdminElearing from "./admin";
import PageNotFound from "./components/PageNotFound";
import Admin from "./HOCs/Route/Admin";
import { fetchMe } from "./store/actions/auth";
import CartComponent from "./views/Cart";
import Detail from "./views/Detail";
import Home from "./views/Home";
import Courses from "./views/Home/CourseHome";
import CourseCAT from "./views/Home/CourseHome/CourseCAT";
import Profile from "./views/Profile";
import { Signin } from "./views/Signin";
import { Signup } from "./views/Signup";
export default function App() {
  const dispatch = useDispatch();
  const fethchUser = useCallback(() => {
    if (localStorage.getItem("t")) dispatch(fetchMe);
  }, [dispatch]);
  useEffect(() => {
    fethchUser();
  }, [fethchUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/courses/all" component={Courses} />
        <Route path="/courses/:category" component={CourseCAT} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/profile" component={Profile} />
        {/* Admin Router */}
        <Admin path="/admin" component={AdminElearing} redirectPath="/" />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
