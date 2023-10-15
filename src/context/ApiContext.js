import React, { createContext, useEffect, useState } from "react";

export const APiContext = createContext();
const MovieProvider = ({ children }) => {


  const API_KEY = "fdf8c072f55ceac11fe1b80744ad696f";
  // UseState Hook
  const [genres, setGenres] = useState([]);
  const [genreByName, setGenreName] = useState([]);
  const [upComing, setupComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [page, setPage] = useState(1);
  // const [header, setHeader] = useState("");
  const [totalPage, setTotalPage] = useState(null)
  const [headerPage,setHeaderPage] = useState("")
  // get gerne movies
  const cardWidthSlider = 200;
  // Movie Search 
  const [moviesSearch, setMoviesSearch] = useState([]);
  // const [wordSearch, setWordSearch] = useState('');

  useEffect( _ => {
    if(page < 1) {
      setPage(1)
    }
  },[page])
  
  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&page=1`
    );
    const genre = await data.json();
    setGenres(genre.genres);
  };
  const fetchUpcoming = async _ => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${page}`)
    const response = await data.json();
    setupComing(upComing.concat(response.results))
    setTotalPage(response.total_pages)
  }
  const fetchTrending = async _ =>{
    const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    const response = await data.json();
    setTrending(trending.concat(response.results))
    setTotalPage(response.total_pages)
  }
  const fetchGenreByName = async _ =>{
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${API_KEY}&page=${page}`)
    const response = await data.json();
    setGenreName(genreByName.concat(response.results))
    setTotalPage(response.total_pages)
    setHeaderPage(activeGenre)
  }
  const searchFilter = async word => {
    const data = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${word}&page=${page}`)
    const response = await data.json();
    // console.log(moviesSearch);
    page > 1 ? setMoviesSearch(moviesSearch.concat(response.results)) : setMoviesSearch(response.results)
    setTotalPage(response.total_pages);
  }
  // Fetch puplor movies to apeare on banner seciton
  const FetchPapularMovies = async _ => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const response = await data.json();
    if (response.results.length > 0){ setBannerMovies(response.results)}
    // console.log(bannerMovies);
  } 
  return (
    <APiContext.Provider
      value={{
        // Basic Genre
        fetchGenre,
        genres,
        activeGenre ,
        setActiveGenre,
        // Up coming Movies
        upComing,
        fetchUpcoming,
        setPage,
        page,
        // Tending Movies
        fetchTrending,
        trending,
        // Fetch Movie By Genre Name
        fetchGenreByName,
        genreByName,
        setGenreName,
        totalPage,
        headerPage,
        cardWidthSlider,
        // Search movies
        searchFilter,
        setMoviesSearch,
        moviesSearch,
        // Fetch Papular Movies to show it in Banner section 
        FetchPapularMovies,
        bannerMovies,
      }}
    >
      {children}
    </APiContext.Provider>
  );
};

export default MovieProvider;