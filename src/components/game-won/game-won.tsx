import React from "react";
import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';

import styled, { keyframes } from "styled-components";

import shuffleCells from '../../utils/utils';

interface GameWonProps {
  cells: number[];
  isWon: boolean;
  moves: number;
  onNewGameClick: (cells: number[]) => void;
  time: { minutes: number, seconds: number };
}

const bounce = keyframes`
  0% {
    transform: translateY(-2000px);
  }

  75% {
    transform: translateY(-5px);
  }

  80% {
    transform: translateY(5px);
  }

  90% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0)
  }
`;

const shake = keyframes`
  0%,
  100% {
      transform: translateX(0);
  }

  50%,
  70% {
      transform: translateX(0.7px);
  }

  60%,
  80% {
      transform: translateX(-0.7px);
  }
`;

const StyledGameWon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  font-family: "Segoe UI";
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  width: 40vw;
  border: 10px solid #b0bec5;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  background-color: #eceff1;
  animation: ${bounce} 1s linear;
`

const StyledTable = styled.table`
  font-size: 1.5rem;
`

const StyledParagraph = styled.div`
  margin-top: 20px;
  font-size: 2.1rem;
`

const StyledTd = styled.td`
  padding: 3px 10px;
`

const StyledButton = styled.button`
  margin-top: 15px;
  background-color: #90a4ae;
  color: #000;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  animation: ${shake} 1s linear infinite;
`
const GameWon: React.FC<GameWonProps> = ({ cells, isWon, moves, onNewGameClick, time }) => {
  if (!isWon) {
    return null;
  }

  const gameTable = JSON.parse(localStorage.getItem("react-game-table"));
  
  const lastResult = [time, moves];
  let updatedGameTable;

  if (gameTable === null) {
    updatedGameTable = [lastResult];
  }

  if (gameTable !== null && gameTable.length < 10) {
    updatedGameTable = [lastResult, ...gameTable];
  }

  if (gameTable !== null && gameTable.length >= 10) {
    const filtredGameTable = gameTable.filter((_, i) => i < 9);
    updatedGameTable = [lastResult, ...filtredGameTable]
  }

  localStorage.setItem("react-game-table", JSON.stringify(updatedGameTable));

  return (
    <StyledGameWon>
      <StyledDiv>
        <StyledParagraph>Вы победили!</StyledParagraph>
        <StyledTable>
          <thead>
            <tr>
              <th>Последние результаты:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledTd></StyledTd>
              <StyledTd>Время</StyledTd>
              <StyledTd>Шаги</StyledTd>
            </tr>
            {updatedGameTable.map((el, i) => {
              return (
                <tr key={el[1].toString() + i.toString()}>
                  <StyledTd>{i + 1}</StyledTd>
                  <StyledTd>{el[0].minutes}:{el[0].seconds}</StyledTd>
                  <StyledTd>{el[1]}</StyledTd>
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
        <StyledButton
          className="waves-effect waves-light btn"
          value="3"
          onClick={() => onNewGameClick(cells)}>
          Новая игра
        </StyledButton>
      </StyledDiv>
    </StyledGameWon >
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cells: state.cells,
  isWon: state.isWon,
  moves: state.moves,
  time: state.time
});

const mapDispatchToProps = (dispatch) => ({
  onNewGameClick: (cells: number[]) => {
    dispatch(ActionCreator.setIsWon(false));
    dispatch(ActionCreator.setCells(shuffleCells(cells)));
    dispatch(ActionCreator.setTime({ minutes: 0, seconds: 0 }));
    dispatch(ActionCreator.setMoves(0));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameWon);
