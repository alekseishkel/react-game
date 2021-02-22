import React from "react";
import styled from "styled-components";

const StyledCell = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #bbdefb;
  color: #1565c0;
  font-size: 35px;
`;

const Cell: React.FC<{ number: number }> = (props) => {
  return <StyledCell>{props.number}</StyledCell>;
};

export default Cell;
