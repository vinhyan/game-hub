import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
//animation
import { fadeIn } from "../animation";
//image
import noPreview from "../image/NoPreviewAvailable.png";

const Home = () => {
  //get the current Location:
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get fetched data
  const { newGames, popular, upcoming, search } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="shown">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {search.length ? (
          <>
            <h2 className="search-title">Search</h2>
            <Games>
              {search.map((game) => (
                <Game
                  name={game.name}
                  release={game.released}
                  image={game.background_image || noPreview}
                  key={game.id}
                  id={game.id}
                />
              ))}
            </Games>
          </>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 3rem 0;
  }

  .search-title {
    color: #ff7676;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
