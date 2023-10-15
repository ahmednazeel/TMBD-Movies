import React, { useContext, useEffect } from "react";
import { APiContext } from "../context/ApiContext";
import loading_img from "../images/icons/icons8-loading-sign-64.png";
import "animate.css";

const ButtonScrolling = ({ totalPage }) => {
  const { page, setPage } = useContext(APiContext);
  //   useEffect((_) => console.log(page), []);
  //   useEffect((_) => console.log(totalPage), [totalPage]);

  const handleScrolling = (_) => setPage(page + 1);
  return (
    <div className="fs_1-8 text-light wrapper-button-scroll">
      {totalPage === page ? (
        <h1 className="alert alert-danger text-black fw-bold text-center">End Movies</h1>
      ) : (
        <button className="btn-scroll-wrapper" onClick={handleScrolling}>
          <img className="img-button" src={loading_img} alt="" />
          More...
        </button>
      )}
    </div>
  );
};

export default ButtonScrolling;
