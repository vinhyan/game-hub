const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        search: action.payload.search,
      }
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: []
      }
    default:
      return { ...state };
  }
};

export default gamesReducer;
