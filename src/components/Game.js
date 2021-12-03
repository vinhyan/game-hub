import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/gameDetailsAction";
import { Link } from "react-router-dom";
//Util
import { imageResizer } from "../util";
//animation
import { popUp } from "../animation";

const Game = ({ name, release, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      inital="hidden"
      animate="shown"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <motion.p>{release}</motion.p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={imageResizer(image, 640)}
          alt={name}
        ></motion.img>
      </Link>
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  p {
    padding: 0 0 0.5rem 0;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    display: block;
  }
`;
