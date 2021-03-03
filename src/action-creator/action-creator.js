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

  setTime: (time) => ({
    type: `SET_TIME`,
    payload: time,
  }),

  setIsSoundOn: (isSoundOn) => ({
    type: `SET_IS_SOUND_ON`,
    payload: isSoundOn,
  }),

  setLanguage: (language) => ({
    type: `SET_LANGUAGE`,
    payload: language,
  }),
};

export default ActionCreator;
