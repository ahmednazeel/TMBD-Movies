import React, { useEffect, useState } from "react";
import imgI from "../images/slider-control.jpg";
import noIMG from "../images/noIMG.png";
import imgStar from "../images/icons/icons8-star-48.png";
import { NavLink, useParams } from "react-router-dom";
const MovieCard = ({ data, imgWidth, pWidth }) => {
  return (
    <>
      <NavLink to={`/movie/details/${data.id}`} className="movie-card">
        <div
          style={{
            width: `${imgWidth ? imgWidth : "100%"}px`,
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          {data.poster_path === null ? (
            <img className="img-movie" src={noIMG} alt="" />
          ) : (
            <img
              className="img-movie"
              src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              alt=""
            />
          )}
        </div>
        <div>
          <p
            style={{ width: `${imgWidth ? imgWidth : "100%"}px` }}
            className="fs_2-4 fw-bold name-card"
          >
            {data.original_title}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2 fs_1-5 text-light">
              <img
                src={imgStar}
                style={{ width: "24px", borderRadius: "50%" }}
                alt=""
              />
              <span>{data.vote_average.toFixed(1)}</span>
            </div>
            <span>
              <span className="years me-3 fs_1-5">{data.release_date}</span>
            </span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default MovieCard;
/**
 *       // setArrData()
      Object.keys(data).map(key=>setArrData(data[key]))
      console.log(typeof arrData);
 */
