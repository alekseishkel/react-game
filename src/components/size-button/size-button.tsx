import React from "react";
import styled from "styled-components";

const StyledSizeButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 510px;
  margin-top: 10px;
`;

const SizeButton: React.FC = () => {
  return (
    <StyledSizeButton>
      <a className="waves-effect waves-light btn">Размер поля: 3х3</a>
      <a className="waves-effect waves-light btn">Размер поля: 4х4</a>
      <a className="waves-effect waves-light btn">Размер поля: 5х5</a>
    </StyledSizeButton>
  );
};

export default SizeButton;
