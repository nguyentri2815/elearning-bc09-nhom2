import { Container } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
export default function PageNotFound() {
  return (
    <section className="page_404">
      <Container className="container">
        <div className="content_404">
          <div className="title_404">
            <h1>404</h1>
          </div>
          <div className="four_zero_four_bg"></div>
          <div className="contant_box_404">
            <h3 className="h3">Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <NavLink to="/" className="link_404 pulse">
              Go to Home
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
