import React from "react";
import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';

import styled, { keyframes, css } from "styled-components";

import shuffleCells from '../../utils/utils';

interface GameWonProps {
  cells: number[];
  isWon: boolean;
  onNewGameClick: (cells: number[]) => void;
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
  width: 340pw;
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
  margin-top: 80px;
`

const StyledButton = styled.button`
  background-color: #90a4ae;
  color: #000;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  animation: ${shake} 1s linear infinite;
`
const GameWon: React.FC<GameWonProps> = ({ cells, isWon, onNewGameClick }) => {
  if (!isWon) {
    return null;
  }

  return (
    <StyledGameWon>
      <StyledDiv>
        <StyledParagraph>Вы победили!</StyledParagraph>
        <StyledTable>
          <tr>
            <th>Последние результаты:</th>
          </tr>
          <tr>
            <td></td>
            <td>Время</td>
            <td>Шаги</td>
          </tr>
          {JSON.parse(localStorage.getItem("react-game-table")).map((el, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{el[0].minutes}:{el[0].seconds}</td>
                <td>{el[1]}</td>
              </tr>
            )
          })}
        </StyledTable>
        <StyledButton
          className="waves-effect waves-light btn"
          value="3"
          onClick={() => {

          }}>
          Новая игра
        </StyledButton>
      </StyledDiv>
    </StyledGameWon>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cells: state.cells,
  isWon: state.isWon
});

const mapDispatchToProps = (dispatch) => ({
  onNewGameClick: (cells: number[]) => {
    dispatch(ActionCreator.setIsWon(false));
    dispatch(ActionCreator.setCells(shuffleCells(cells)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameWon);
