import React from "react";

import styled from "styled-components";

import shuffleCells from '../../utils/utils';

interface GameWonProps {
  cells: number[];
  isWon: boolean;
  setCells: (cells: number[]) => void;
  setIsWon: (isWon: boolean) => void;
}

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
  width: 350px;
  height: 280px;
  border: 10px solid #b0bec5;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  background-color: #eceff1;
`

const StyledParagraph = styled.div`
  margin-top: 80px;
`

const StyledButton = styled.button`
  background-color: #90a4ae;
  color: #000;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

`
const GameWon: React.FC<GameWonProps> = ({ cells, isWon, setCells, setIsWon }) => {
  if (!isWon) {
    return null;
  }

  return (
    <StyledGameWon>
      <StyledDiv>
        <StyledParagraph>Вы победили!</StyledParagraph>
        <StyledButton
          className="waves-effect waves-light btn"
          value="3"
          onClick={() => {
            setIsWon(false)
            setCells(shuffleCells(cells));
          }}>
          Новая игра
        </StyledButton>
      </StyledDiv>
    </StyledGameWon>
  );
};

export default GameWon;
