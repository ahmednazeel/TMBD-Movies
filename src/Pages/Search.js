import React, { useContext, useEffect, useState } from "react";
import { APiContext } from "../context/ApiContext";
import "../commin.css";
import MovieCard from "../components/MovieCard";
import ButtonScrolling from "../components/ButtonScrolling";
import { useParams } from "react-router-dom";
const Search = () => {
  const movieAPI = useContext(APiContext);
  const { moviesSearch,setPage ,page,searchFilter, totalPage } = movieAPI;
  const [filter,setFilter] = useState([])
  const {word} = useParams() 
  useEffect(_=>setPage(1),[])

  useEffect(()=>{
    // console.log(pram);
    searchFilter(word)
  },[word,page])
  
  return (
    <>
      {
        <div className="grid-content-pages">
          {moviesSearch.map((m, i) => (
            <MovieCard key={i} data={m} />
          ))}
        </div>
      }
      <ButtonScrolling totalPage={totalPage} />
    </>
  );
};

export default Search;
