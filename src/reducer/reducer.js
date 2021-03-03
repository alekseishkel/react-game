import shuffleCells from "../utils/utils";

const initialState = {
  cells:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).cells
      : shuffleCells([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null, 15]),
  fieldSize:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).fieldSize
      : 4,
  isWon:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).isWon
      : false,
  moves:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).moves
      : 0,
  time:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).time
      : {minutes: 0, seconds: 0},
  isMusicPlaying:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).isMusicPlaying
      : false,
  isSoundOn:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).isSoundOn
      : true,
  lang:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).lang
      : `ru`,
  mainColor:
    JSON.parse(sessionStorage.getItem(`react-game-data`)) !== null
      ? JSON.parse(sessionStorage.getItem(`react-game-data`)).lang
      : `#eceff1`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CELLS`:
      return Object.assign({}, state, {
        cells: action.payload,
      });
    case `SET_FIELD_SIZE`:
      return Object.assign({}, state, {
        fieldSize: action.payload,
      });
    case `SET_IS_WON`:
      return Object.assign({}, state, {
        isWon: action.payload,
      });
    case `SET_MOVES`:
      return Object.assign({}, state, {
        moves: action.payload,
      });
    case `SET_IS_MUSIC_PLAYING`:
      return Object.assign({}, state, {
        isMusicPlaying: action.payload,
      });
    case `SET_TIME`:
      return Object.assign({}, state, {
        time: action.payload,
      });
    case `SET_IS_SOUND_ON`:
      return Object.assign({}, state, {
        isSoundOn: action.payload,
      });
    case `SET_LANGUAGE`:
      return Object.assign({}, state, {
        lang: action.payload,
      });
    case `SET_MAIN_COLOR`:
      return Object.assign({}, state, {
        mainColor: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
