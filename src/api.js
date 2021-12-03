require("dotenv").config();

// Base URL
const base_URL = "https://api.rawg.io/api/";
// API Key
// const apiKey = "65f3f6e054634dbb82476073dd104086";

const apiKey = process.env.REACT_APP_GAMES_API;

//Get date
const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);
  if (yearsDiff !== 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }
  return date;
};

//Popular games
const popularGames = `games?key=${apiKey}&dates=${getDate(-1)},${getDate(
  0
)}&ordering=-rating&page_size=10`;

const upcomingGames = `games?key=${apiKey}&dates=${getDate(0)},${getDate(
  1
)}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${getDate(-1)},${getDate(
  0
)}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_URL}${popularGames}`;
export const upcomingGamesURL = () => `${base_URL}${upcomingGames}`;
export const newGamesURL = () => `${base_URL}${newGames}`;

//Game details
export const gameDetailsURL = (game_id) =>
  `${base_URL}games/${game_id}?key=${apiKey}`;

//Game Screenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_URL}games/${game_id}/screenshots?key=${apiKey}`;

//Search games
export const searchGamesURL = (game_name) =>
  `${base_URL}games?key=${apiKey}&search=${game_name}&page_size=9`;
