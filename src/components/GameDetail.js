import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
//Util
import { imageResizer, getIcon, getRating } from "../util";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noPreview from "../image/NoPreviewAvailable.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Gane Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/"); // change the path back to <Home/> to exit the <CardShadow/>
    }
  };

  const { game, screenshots, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <motion.p>
                  Rating:{" "}
                  {getRating(game.rating).map((icon, index) => {
                    return (
                      <FontAwesomeIcon
                        className="rating-icon"
                        key={index}
                        icon={getIcon(icon)}
                      />
                    );
                  })}
                </motion.p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.parent_platforms.map((data) => {
                    return (
                      <FontAwesomeIcon
                        className="platform-icon"
                        key={data.platform.id}
                        icon={getIcon(data.platform.slug)}
                      />
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={
                  game.background_image
                    ? imageResizer(game.background_image, 1280)
                    : noPreview
                }
                alt="background"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.images.map((screenshot) => {
                return (
                  <img
                    src={
                      screenshot.image
                        ? imageResizer(screenshot.image, 1280)
                        : noPreview
                    }
                    key={screenshot.id}
                    alt="screenshot"
                  />
                );
              })}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 5;
  h3 {
    padding-right: 0;
    padding-left: 0;
  }

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .rating-icon {
    color: #ff7676;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  .platform-icon {
    margin: 0 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
