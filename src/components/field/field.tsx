import React, { useState } from "react";

import Cell from "../cell/cell";

import styled from "styled-components";

const StyledFiled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 350px;
  height: 350px;
  padding: 25px;
  background-color: #b0bec5;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Field: React.FC = () => {
  const [cells, setCells] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, null]);

  return (
    <StyledFiled className="cells">
      {cells.map((cell, i) => {
        return <Cell key={cell + i} number={cell} />;
      })}
    </StyledFiled>
  );
};

export default Field;
