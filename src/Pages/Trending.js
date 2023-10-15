import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import ButtonScrolling from "../components/ButtonScrolling";
import { APiContext } from "../context/ApiContext";

const Trending = () => {
  const dataAPI = useContext(APiContext);
  const { fetchTrending, trending, setPage, page, totalPage } = dataAPI;
  useEffect((_) => {
    setPage(1);
  }, []);
  useEffect(
    (_) => {
      fetchTrending();
      console.log(totalPage);
      console.log(page);
    },
    [page]
  );
  // console.log(upComing);
  return (
    <>
      <h1 className="mb-5">Trending movies</h1>
      <div className="grid-content-pages">
        {trending.map((m) => (
          <MovieCard data={m} />
        ))}
      </div>
      <ButtonScrolling totalPage={totalPage} />
    </>
  );
};

export default Trending;
