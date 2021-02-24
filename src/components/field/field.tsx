import React from "react";

import Cell from "../cell/cell";

import styled from "styled-components";

interface FieldProps {
  cells: number[], 
  onCellClick: (number: number) => void
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

const Field: React.FC<FieldProps> = ({cells, onCellClick}) => {
  

  return (
    <StyledFiled className="cells">
      {cells.map((number, i) => {
        return <Cell key={number + i} number={number} onCellClick={onCellClick}/>;
      })}
    </StyledFiled>
  );
};

export default Field;
