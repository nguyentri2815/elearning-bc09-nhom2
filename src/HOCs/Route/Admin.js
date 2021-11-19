import "antd/dist/antd.css";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function Admin(props) {
  const me = useSelector((state) => state.me);
  // setgetMe(me);
  const { path, component: RouteComponent, redirectPath } = props;

  return me ? (
    <Route
      path={path}
      render={(routeProps) => {
        if (me && me.maLoaiNguoiDung === "GV" ) {
          return <RouteComponent {...routeProps} />;
        }
        return <Redirect to={redirectPath} />;
      }}
    />
  ) : (
    "loading...."
  );
}
