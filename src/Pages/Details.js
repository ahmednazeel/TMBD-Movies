import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import img_1 from "../images/slider-banner.jpg";
import img_2 from "../images/icons/25533.jpg";
import SliderSection from "../components/home/SliderSection";
import { Button } from "bootstrap";
const Details = () => {
  const APIKEY = "fdf8c072f55ceac11fe1b80744ad696f";
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [recommededMovie, setRecommendedMovie] = useState([]);
  const backgroundMovie =
    "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path;

  const fetchMovie = async (_) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
    );
    const response = await data.json();
    setMovie(response);
    setGenreList(response.genres);
  };
  const recommendedMovie = async (_) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKEY}`
    );
    const response = await data.json();
    setRecommendedMovie(response.results);
  };
  useEffect(() => {
    fetchMovie();
    recommendedMovie();
  });

  return (
    <>
      <div className="details_movie">
        <div className="details-content position-relative">
          <div
            className="background_detail"
            style={{ backgroundImage: `url(${backgroundMovie})` }}
          ></div>
          <div className="p-3 d-flex details position-relative">
            <div className="detail-img">
              <img
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              />
            </div>
            <div className="detail-info fs_1-8">
              <p className="fs_5-4 fw-bold text-light movie-name">
                {movie.title}
              </p>
              <div className="d-flex align-items-center gap-1 fs_1-8">
                <span>{movie.vote_average}</span>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                  src={img_2}
                />
                <span className="me-3">{movie.runtime}m</span>.
                <span>{movie.release_date}</span>
              </div>
              <div className="my-4">
                {genreList.map((m) => (
                  <span>{m.name} | </span>
                ))}
              </div>
              <p className="w-80 sec-title">{movie.overview}</p>
              <div className="d-flex gap-4 my-4 column-mobile">
                <p>tagline</p>
                <p className="sec-title">{movie.tagline}</p>
              </div>
              <NavLink
                to={`/movie/watching/${id}`}
                style={{
                  backgroundColor: "brown",
                  padding: "5px 9px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Watch Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 slider_details">
        {recommededMovie.length>0?<SliderSection titleSEC="You May Also Like" data={recommededMovie} />:null} 
      </div>
    </>
  );
};

export default Details;
// rgb(0 0 0 / 63%) 0%,    rgb(0 0 0 / 61%) 99.4%  