import React from "react";
import styled from "styled-components";

interface CellProps {
  cellIndex: number;
  fieldSize: number;
  key: number;
  nullCellIndex: number;
  number: number;
  onCellClick: (nubmer: number) => void;
}

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #eceff1;
  color: #000000;
  font-size: 35px;
`;

const Cell: React.FC<CellProps> = ({ cellIndex, fieldSize, number, nullCellIndex, onCellClick }) => {
  if (nullCellIndex === cellIndex + 1 ||
    nullCellIndex === cellIndex - 1 ||
    nullCellIndex === cellIndex + fieldSize ||
    nullCellIndex === cellIndex - fieldSize) {
    return <StyledCell onClick={() => onCellClick(number)}>{number}</StyledCell>;
  }

  return <StyledCell>{number}</StyledCell>;
};

export default Cell;
