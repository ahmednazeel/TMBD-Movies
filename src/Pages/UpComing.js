import React, { useContext, useEffect } from "react";
import { APiContext } from "./../context/ApiContext";
import MovieCard from "./../components/MovieCard";
import "./style-pages.css";
import ButtonScrolling from "../components/ButtonScrolling";
const UpComing = () => {
  const dataAPI = useContext(APiContext);
  const { fetchUpcoming, upComing, setPage, page, totalPage } = dataAPI;
  useEffect((_) => {
    setPage(1);
  }, []);
  useEffect(
    (_) => {
      fetchUpcoming();
      console.log(totalPage);
      console.log(page);
    },
    [page]
  );
  // console.log(upComing);
  return (
    <>
      <h1 className="mb-5">UpComing movies</h1>
      <div className="grid-content-pages">
        {upComing.map((m) => (
          <MovieCard data={m} />
        ))}
      </div>
      <ButtonScrolling totalPage={totalPage} />
    </>
  );
};

export default UpComing;
