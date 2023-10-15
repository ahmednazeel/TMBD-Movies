import React, { useContext, useEffect, useState } from "react";
import "../../commin.css";
import "./sliderSection.css";
import MovieCard from "../MovieCard";
import { NavLink } from "react-router-dom";
import { APiContext } from "../../context/ApiContext";
const SliderSection = ({ urlPage, titleSEC, data }) => {
  const context = useContext(APiContext);
  const { cardWidthSlider } = context;
  return (
    <section className="slider-movie overflow-hidden">
      <div className="sec-title d-flex align-items-center justify-content-between mb-5 mt-3">
        <span className="fs_3-6">{titleSEC}</span>
        {urlPage ? (
          <NavLink to={urlPage} className="btn btn-danger">
            <span className="fs_1-8">view more</span>
          </NavLink>
        ) : null}
      </div>
      <div className="slider-content d-flex align-items-center gap-4 overflow-x-scroll">
        {/* Loop on data and result is movie card with data */}
        {data
          ? data.map((m, i) => (
              <MovieCard key={i} data={m} imgWidth={cardWidthSlider} />
            ))
          : data}
      </div>
    </section>
  );
};

export default SliderSection;
