import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//redux & routes
import { searchGames, clearSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
//animation
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const onChangeHandle = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput));
  };

  const onClickHandle = () => {
    dispatch(clearSearch());
    setTextInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="shown">
      <h1 onClick={onClickHandle}>GameHub</h1>
      <form onSubmit={onSubmitHandle} className="search">
        <input value={textInput} onChange={onChangeHandle} type="text" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 1rem 3rem;
  text-align: center;
  h1 {
    cursor: pointer;
    transition: color 0.5s ease-out;
    &:hover {
      color: #ff7676;
    }
  }
  input {
    min-width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px 0 0 10px;
    z-index: 1;
  }

  button {
    width: 100px;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    font-family: "Montserrat", sans-serif;
    border-radius: 0 10px 10px 0;
    transition: background 0.3s ease-out;
    &:hover {
      background: #f89e9e;
    }
  }
`;

export default Nav;
