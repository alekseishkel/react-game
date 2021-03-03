const ActionCreator = {
  setCells: (cells) => ({
    type: `SET_CELLS`,
    payload: cells,
  }),

  setFieldSize: (size) => ({
    type: `SET_FIELD_SIZE`,
    payload: size,
  }),

  setIsWon: (isWon) => ({
    type: `SET_IS_WON`,
    payload: isWon,
  }),

  setMoves: (moves) => ({
    type: `SET_MOVES`,
    payload: moves,
  }),

  setIsMusicPlaying: (isMusicPlaying) => ({
    type: `SET_IS_MUSIC_PLAYING`,
    payload: isMusicPlaying,
  }),
};

export default ActionCreator;
