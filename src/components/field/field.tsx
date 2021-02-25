import React, { useState } from "react";

import Cell from "../cell/cell";

import styled from "styled-components";

interface FieldProps {
  cellNumbers: number[];
}

const StyledFiled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 340px;
  margin: 10px 0;
  padding: 20px;
  background-color: #b0bec5;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Field: React.FC<FieldProps> = ({ cellNumbers }) => {
  const [cells, setCells] = useState<number[]>(cellNumbers);

  const onCellClick = (number: number): void => {
    setCells((cells) => {
      const nullCellIndex: number = cells.findIndex((cell) => cell === null);
      const cellIndex: number = cells.findIndex((cell) => cell === number);

      cells.splice(cellIndex, 1, null);
      cells.splice(nullCellIndex, 1, number);

      return [...cells];
    });
  };
  return (
    <StyledFiled className="cells">
      {cells.map((number) => {
        return <Cell key={number} number={number} onCellClick={onCellClick} />;
      })}
    </StyledFiled>
  );
};

export default Field;
