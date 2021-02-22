import React from "react";
import styled from "styled-components";

const StyledSizeButton = styled.div`
  margin-top: 10px;
`;

const SizeButton: React.FC = () => {
  return (
    <StyledSizeButton>
      <a className="waves-effect waves-light btn">Размер поля: 3х3</a>
      <a className="waves-effect waves-light btn">Размер поля: 3х3</a>
      <a className="waves-effect waves-light btn">Размер поля: 3х3</a>
    </StyledSizeButton>
  );
};

export default SizeButton;
