import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../api";

//ACTION

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularGamesRes = await axios.get(popularGamesURL());
  const upcomingGamesRes = await axios.get(upcomingGamesURL());
  const newGamesRes = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesRes.data.results,
      upcoming: upcomingGamesRes.data.results,
      newGames: newGamesRes.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const searchGamesRes = await axios.get(searchGamesURL(game_name));
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      search: searchGamesRes.data.results,
    },
  });
};

export const clearSearch = () => (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCH",
  });
};
