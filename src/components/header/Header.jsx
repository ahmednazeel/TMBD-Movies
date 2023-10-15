import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../images/icons/icons8-circled-play-64.png";
import "../../commin.css";
import "./header.css";
import iconSearch from "../../images/icons/icons8-search-48.png";
import iconclose from "../../images/icons/icons8-close-64.png";
import iconPars from "../../images/icons/icons8-list-64 (1).png";
import { Form, InputGroup } from "react-bootstrap";
import { APiContext } from "../../context/ApiContext";
const Header = () => {
  const movieAPI = useContext(APiContext);
  const { setPage} = movieAPI;
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  
  const handleSldeBar = (_) => {
    const sidebar = document.querySelector("#sidebar");
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("active");
    sidebar.classList.add("active");
  };
  const handleSearchInMobile = (_) => {
    const inputWrapper = document.querySelector(".search-wrapper");
    inputWrapper.classList.add("block-mobile");
  };
  const closeSearchWrapper = (_) => {
    const inputWrapper = document.querySelector(".search-wrapper");
    inputWrapper.classList.remove("block-mobile");
  };

  const handleSearch = () => {
    if(typingTimeout){
      clearTimeout(typingTimeout)
    }
    const newTimeout = setTimeout(() => {
      setPage(1) 
      onKeyUp(value);
      // console.log(value);
    }, 500);
    setTypingTimeout(newTimeout)
  }
  const onKeyUp = (value) => { 
    // setValue('')
    console.log(value.trim());

    if (value !== "") {
      navigate(`/search/${value}`);
    } else if (value === "") {
      navigate("/");
    }
  };

  return (
    <div className="header d-flex position-relative justify-content-between container-fluid background-slider">
      <NavLink to="/" className="d-flex align-items-center logo-header">
        <img style={{borderRadius:"50%"}} className="icon-logo  animate__infinite animate__rotateIn animate__animated animate__slower" src={Logo} alt="" />
        <p className="fs_3-6 fw-bold c-light text-grey">
          <span className="text-danger">TMBD</span> Movies
        </p>
      </NavLink>
      <div className="none-mobile position-relative search-wrapper">
        <img className="icon-search" src={iconSearch} alt="" />
        <input
          className="input-search"
          type="text"
          placeholder="Search"
          onKeyUp={_=>handleSearch()}
          onChange={e=>setValue(e.target.value)}
        />
        <button onClick={closeSearchWrapper}>
          <img className="icon-gif close-wrapper-icon" src={iconclose} alt="" />
        </button>
      </div>
      <div className=" d-flex align-items-center gap-3 d-none block-mobile">
        <button onClick={handleSearchInMobile}>
          <img src={iconSearch} alt="" />
        </button>
        <button onClick={handleSldeBar} className="bg-transparent">
          <img className="pars" src={iconPars} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;

