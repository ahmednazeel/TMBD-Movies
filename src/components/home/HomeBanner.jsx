import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import "./homeBanner.css";
import imgBigBanner from "../../images/icons/icons8-left-2-64.png";
import imgBigBanner_2 from "../../images/icons/icons8-forward-arrow-64.png";
import { APiContext } from "./../../context/ApiContext";
import { NavLink } from "react-router-dom";
const HomeBanner = () => {
  const { FetchPapularMovies, bannerMovies } = useContext(APiContext);
  const [index, setIndex] = useState(0);
  const lengthArray = bannerMovies.length - 1;
  useEffect((_) => {
    FetchPapularMovies();
    console.log(bannerMovies);
  }, []);
  const handlePreviousBTN = (_) => {
    setIndex(index === 0 ? lengthArray : index - 1);
  };
  const handleNextBTN = (_) => {
    setIndex(index === lengthArray ? 0 : index + 1);
  };
  useEffect(
    (_) => {
      const interval = setInterval(() => {
        handleNextBTN();
      }, 5000);
      return (_) => clearInterval(interval);
    },
    [index]
  );
  return (
    <section className="big-banner position-relative overflow-hidden">
      <button onClick={handlePreviousBTN} className="arrow-left">
        <img src={imgBigBanner} alt="" />
      </button>
      <button onClick={handleNextBTN} className="arrow-right">
        <img src={imgBigBanner_2} alt="" />
      </button>

      <div className="banner-slider">
        <div className="banner-item">
          <img
            className="animate__animated animate__pulse animate__infinite animate__slow	"
            src={
              bannerMovies.length > 0
                ? "https://image.tmdb.org/t/p/original/" +
                  bannerMovies[index].backdrop_path
                : null
            }
            alt=""
          />
          <div className="banner-desc animate__animated animate__bounce animate__infinite animate__slower">
            <h1 className="heading-banner fs_5-4 fw-bold text-light">
              {bannerMovies.length > 0 ? bannerMovies[index].title : null}
            </h1>
            <ul className="my-3">
              <span className="years me-3 fs_1-5">
                {bannerMovies.length > 0
                  ? bannerMovies[index].release_date
                  : null}
              </span>
              <p class="badge text-bg-secondary">
                {" "}
                <span className="fs_1-5">
                  {bannerMovies.length > 0
                    ? bannerMovies[index].vote_average
                    : null}
                </span>
              </p>
            </ul>
            <p className="film-desc fs_1-8 my-4 overview-banner">
              {bannerMovies.length > 0 ? bannerMovies[index].overview : null}
            </p>
            <NavLink
              to={
                bannerMovies.length > 0
                  ? `/movie/watching/${bannerMovies[index].id}`
                  : null
              }
              type="button"
              className="btn btn-danger animate__animated animate__headShake animate__infinite animate__slow"
            >
              <span className="fs_1-8">watch now</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="slider-inner gap-4 d-flex align-items-center">
        {bannerMovies.map((movie, index) => (
          <div key={index} className="card-film">
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
