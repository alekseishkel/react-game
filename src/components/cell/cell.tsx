import React from "react";
import styled from "styled-components";

interface CellProps {
  number: number, 
  key: number, 
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

const Cell: React.FC<CellProps> = ({ number, onCellClick }) => {

  return <StyledCell onClick={() => onCellClick(number)}>{number}</StyledCell>;
};

export default Cell;
