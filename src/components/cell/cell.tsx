import React from "react";
import styled, { keyframes, css } from "styled-components";

interface CellProps {
  cellIndex: number;
  fieldSize: number;
  isWon: boolean;
  key: number;
  nullCellIndex: number;
  number: number;
  onCellClick: (nubmer: number) => void;
}

const FIELD_SIZE_IN_PERCENTS = 100;

const flashing = keyframes`
  0% { background-color: rgba(236,239,241, 0.3); }
  50% { background-color: rgba(236,239,241, 1); }
  100% { background-color: rgba(236,239,241, 0.3); }
}
`;

const animation = css`
  ${flashing} 2.5s linear infinite;
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: { fieldSize: number }) => FIELD_SIZE_IN_PERCENTS / props.fieldSize}%};
  min-height: ${(props: { fieldSize: number }) => FIELD_SIZE_IN_PERCENTS / props.fieldSize}%};
  background-color: #eceff1;
  color: #000000;
  font-size: 35px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
  cursor: ${(props: { allowed: boolean, isWon: boolean }) => (
    props.allowed && props.isWon === false ? "pointer" : "default")};
  animation: ${(props: { allowed: boolean, isWon: boolean }) => (
    props.allowed && props.isWon === false ? animation : "none")};
`;

const Cell: React.FC<CellProps> = ({ cellIndex, fieldSize, isWon, number, nullCellIndex, onCellClick }) => {
  if (((nullCellIndex + 1) % fieldSize === 0 && cellIndex % fieldSize === 0) ||
    (nullCellIndex % fieldSize === 0 && (cellIndex + 1) % fieldSize === 0)
  ) {
    return <StyledCell className="cell" fieldSize={fieldSize}>{number}</StyledCell>;
  }

  if (nullCellIndex === cellIndex + 1 ||
    nullCellIndex === cellIndex - 1 ||
    nullCellIndex === cellIndex + fieldSize ||
    nullCellIndex === cellIndex - fieldSize
  ) {
    return (
      <StyledCell
        allowed={true}
        className="cell"
        isWon={isWon}
        fieldSize={fieldSize}
        onClick={() => onCellClick(number)}>
        {number}
      </StyledCell>
    );
  }

  return <StyledCell className="cell" fieldSize={fieldSize}>{number}</StyledCell>;
};

export default Cell;
