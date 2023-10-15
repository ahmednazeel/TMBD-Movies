import React, { useContext, useEffect, useState } from "react";
import { APiContext } from "../context/ApiContext";
import MovieCard from "../components/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import ButtonScrolling from "../components/ButtonScrolling";

const GenreMoviesPage = () => {
  const { name } = useParams();
  const movieAPI = useContext(APiContext);
  const [allPages, setAllPages] = useState(null);
  const {
    fetchGenreByName,
    setGenreName,
    genreByName,
    headerPage,
    activeGenre,
    setPage,
    page,
    totalPage,
  } = movieAPI;

  useEffect((_) => {
    setPage(1);
  }, []);

  useEffect(
    (_) => {
      setGenreName([]);
      setPage(0);
      setAllPages(totalPage);
    },
    [activeGenre]
  );

  useEffect(
    (_) => {
      if (page > 0) {
        fetchGenreByName();
      }
    },
    [page, activeGenre]
  );
  return (
    <div>
      <h1 className="mb-5">{name} Movies</h1>
      <div className="grid-content-pages">
        {genreByName.map((m, i) => (
          <MovieCard key={i} data={m} />
        ))}
      </div>
      <ButtonScrolling totalPage={allPages} />
    </div>
  );
};

export default GenreMoviesPage;
