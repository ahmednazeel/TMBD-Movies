import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../commin.css";
import "./sideleft.css";
import iconClox from "../../images/icons/icons8-close-64.png";
import iconTMBD from "../../images/tmdb-logo.svg";
import { APiContext } from "../../context/ApiContext";
const SideLeft = () => {
  const genreContext = useContext(APiContext);
  const { genres, fetchGenre, setActiveGenre, activeGenre } = genreContext;

  useEffect(() => {
    fetchGenre();
  }, []);

  const closeSidebar = (_) => {
    const sidebar = document.querySelector("#sidebar");
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");
    sidebar.classList.remove("active");
  };

  const handleGenre = (e) => setActiveGenre(e.id);

  return (
    <div className="side-left background-sideLeft ps-3" id="sidebar">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="mb-4 text-light">grana</h1>
        <button onClick={closeSidebar} className="border-none">
          <img src={iconClox} alt="" className="icon-gif" />
        </button>
      </div>
      <ul>
        {genres.map((m) => (
          <li key={m.id} className="fs_1-8 mb-3">
            <NavLink
              to={`/movie/genre/${m.name}`}
              onClick={(_) => handleGenre(m)}
              className="gerne-item bg-transparent c-grey"
            >
              {m.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="my-3 py-3 fs_1-5 copy">
        <span className="text-light">Copyright 2023</span> |{" "}
        <span className="text-grey">Ahmed Waled Nazeel</span>
      </div>
      <div className="my-5">
        <img src={iconTMBD} alt="" />
      </div>
    </div>
  );
};

export default SideLeft;

//     background: linear-gradient(to bottom,#434343 29%,#0c0c0c 42%);
