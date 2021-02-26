import React from "react";
import styled, { keyframes } from "styled-components";

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
  background-color: ${(props) => (props.allowed ? "#cfd8dc" : "#eceff1")};
  color: #000000;
  font-size: 35px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
const Cell: React.FC<CellProps> = ({
  cellIndex,
  fieldSize,
  number,
  nullCellIndex,
  onCellClick,
}) => {
  if (
    ((nullCellIndex + 1) % fieldSize === 0 && cellIndex % fieldSize === 0) ||
    (nullCellIndex % fieldSize === 0 && (cellIndex + 1) % fieldSize === 0)
  ) {
    return <StyledCell>{number}</StyledCell>;
  }

  if (
    nullCellIndex === cellIndex + 1 ||
    nullCellIndex === cellIndex - 1 ||
    nullCellIndex === cellIndex + fieldSize ||
    nullCellIndex === cellIndex - fieldSize
  ) {
    return (
      <StyledCell onClick={() => onCellClick(number)}>{number}</StyledCell>
    );
  }

  return <StyledCell>{number}</StyledCell>;
};

export default Cell;
