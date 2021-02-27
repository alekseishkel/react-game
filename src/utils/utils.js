const shuffleCells = (cells) => {
  for (let i = 0; i < cells.length - 1; i++) {
    let j = Math.floor(Math.random() * i);

    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  return cells;
};

export default shuffleCells;
