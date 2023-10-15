import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useRef, useState } from "react";
import Home from "./Pages/Home";
import SideLeft from "./components/sideleft/SideLeft";
import Header from "./components/header/Header";
import "./commin.css";
import Overlay from "./components/Overlay";
import MovieProvider from "./context/ApiContext";
import UpComing from "./Pages/UpComing";
import Trending from "./Pages/Trending";
import TopRated from "./Pages/TopRated";
import Details from "./Pages/Details";
import GenreMoviesPage from "./Pages/GenreMoviesPage";
import Search from "./Pages/Search";
import Player from "./Pages/Player";
function App() {
  return (
    <>
      <div className="app font-app">
        <MovieProvider>
          <BrowserRouter>
            <Header />
            <Overlay />
            <div className="d-flex content-app w-100 overlay-hidden">
              <SideLeft />
              <div className="content-routes w-100 overflow-y-auto background-body">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/movies/upcoming" element={<UpComing />} />
                  <Route path="/search/:word" element={<Search />} />
                  <Route path="/movies/trending" element={<Trending />} />
                  <Route path="/movie/details/:id" element={<Details />} />
                  <Route path="/movies/Top_Rated" element={<TopRated />} />
                  <Route path="/movie/watching/:id" element={<Player />} />
                  <Route
                    path="/movie/genre/:name"
                    element={<GenreMoviesPage />}
                  />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;
