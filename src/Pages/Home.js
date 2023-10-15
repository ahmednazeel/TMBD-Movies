import React, { useContext, useEffect } from "react";
import "../commin.css";
import "./style-pages.css";
import HomeBanner from "../components/home/HomeBanner";
import { Overlay } from "react-bootstrap";
import SliderSection from "../components/home/SliderSection";
import { APiContext } from "../context/ApiContext";
const Home = () => {
  const {
    FetchPapularMovies,
    bannerMovies,
    fetchUpcoming,
    upComing,
    page,
    setPage,
    fetchTrending,
    trending,
  } = useContext(APiContext);
  useEffect((_) => {
    setPage(1); // Reset Page to 1 on initial render.
  }, []);

  useEffect(
    (_) => {
      if (page > 0) {
        fetchUpcoming();
        fetchTrending();
      }
    },
    [page]
  );
  return (
    <>
      <HomeBanner />
      <SliderSection
        urlPage={"/movies/upcoming"}
        titleSEC={"UpComing section"}
        data={upComing}
      />
      <SliderSection
        titleSEC={"trending"}
        urlPage={"/movies/trending"}
        data={trending}
      />
    </>
  );
};

export default Home;
// ? upComing : <h1>please wait for coming data</h1>
