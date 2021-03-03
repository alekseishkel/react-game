import React, { useEffect } from "react";

import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';

import Cell from "../cell/cell";

import styled, { keyframes } from "styled-components";

interface FieldProps {
  cells: number[];
  cellHandler: (changedCells: number[], moves: number) => void;
  fieldSize: number;
  moves: number;
  isWon: boolean;
  setCells: (cells: number[]) => void;
  setIsWon: (isWon: boolean) => void;
  setMoves: (moves: number) => void;
}

const bounceField = keyframes`
  0% {
    transform: translateX(-2000px);
  }

  100% {
    transform: translateX(0);
  }
`;

const rotate = keyframes`
0% {
  transform: rotate(180deg);
}

100% {
  transform: rotate(360deg);
}
`;

const StyledFiled = styled.div`
  width: 340px;
  height: 340px;
  margin: 10px 0;
  animation: ${bounceField} 0.8s linear;

  &:fullscreen {
    display: flex;
    justify-content: center;
    background-color: #607d8b;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 340px;
  padding: 20px;
  background-color: #b0bec5;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  animation: ${rotate} 0.8s linear;


  ${StyledFiled}:fullscreen & {
    width: 100vh;
    height: 100vh;
  }
`;

const Field: React.FC<FieldProps> = ({ cells, cellHandler, fieldSize, isWon, moves, setIsWon }) => {
  const nullCellIndex: number = cells.findIndex((cell) => cell === null);
  
  const cellListener = (number: number): void => {
    const cellIndex: number = cells.findIndex((cell) => cell === number);
    
    if (0 < number && number < fieldSize * fieldSize) {
      const changedCells = cells.slice();
      
      changedCells.splice(cellIndex, 1, null);
      changedCells.splice(nullCellIndex, 1, number);

      cellHandler(changedCells, moves);

      const slideSound = document.getElementById("slide-sound") as HTMLAudioElement;
      slideSound.pause();
      slideSound.currentTime = 0;
      slideSound.play();
    }
  };

  const moveCell = (evt) => {
    switch (evt.key) {
      case "ArrowUp":
        return cellListener(cells[nullCellIndex + fieldSize]);
      case "ArrowDown":
        return cellListener(cells[nullCellIndex - fieldSize]);
      case "ArrowLeft":
        return cellListener(cells[nullCellIndex + 1]);
      case "ArrowRight":
        return cellListener(cells[nullCellIndex - 1]);
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", moveCell)

    return () => (window as any).removeEventListener("keyup", moveCell);

  }, [moves])


  useEffect(() => {
    const isCellsInOrder = cells.every((el, i) => {
      if (el === null) {
        return true;
      }

      return (el - 1) - i === 0;
    })

    if (isCellsInOrder) {
      setIsWon(true);
    }
  }, [cells]);

  return (
    <StyledFiled id="field">
      <StyledDiv className="cells-wrapper">
        {cells.map((number, i) => {
          return <Cell
            cellIndex={i}
            fieldSize={fieldSize}
            isWon={isWon}
            key={number}
            nullCellIndex={nullCellIndex}
            number={number}
            onCellClick={cellListener}
            onKeyDown={cellListener}
          />;
        })}
      </StyledDiv>
    </StyledFiled>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cells: state.cells,
  fieldSize: state.fieldSize,
  isWon: state.isWon,
  moves: state.moves
});

const mapDispatchToProps = (dispatch) => ({
  cellHandler: (changedCells, moves) => {
    dispatch(ActionCreator.setCells(changedCells));
    dispatch(ActionCreator.setMoves(moves + 1))
  },
  setIsWon: () => {
    dispatch(ActionCreator.setIsWon(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

