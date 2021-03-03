const initialState = {
  cells: [1, 2, 3, 4, 5, 6, 7, null, 8],
  fieldSize: 4,
  isWon: false,
  moves: 0,
  time: {
    minutes: 0,
    seconds: 0,
  },
  isMusicPlaying: false,
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
    default:
      return state;
  }
};

export default reducer;
