import { Container } from "@mui/material";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "../../../components/Category";
import { getCategory } from "../../../store/actions/course";
import BGCATEGORY from "../../../assets/img/bg-3.png";

export default function Category() {
  const dispatch = useDispatch();
  const fetchACategory = useCallback(() => {
    dispatch(getCategory);
  }, [dispatch]);
  useEffect(() => {
    fetchACategory();
  }, [fetchACategory]);
  const { listCategoryCourse } = useSelector((state) => state.course);
  const renderCategoryHTML = () => {
    if (listCategoryCourse.length) {
      return listCategoryCourse.map((item, index) => (
        <ItemCategory key={index} hinhAnh={index + 1} category={item} />
      ));
    }
  };
  return (
    <section className="category">
      <div className="wallpaper">
        <img src={BGCATEGORY} />
      </div>

      <h3 className="title">Our Category</h3>
      <Container className="container">
        <div className="item ">{renderCategoryHTML()}</div>
      </Container>
    </section>
  );
}
