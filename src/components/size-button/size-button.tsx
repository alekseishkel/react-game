import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import shuffleCells from '../../utils/utils';

interface SizeButtonProps {
  fieldSize: number;
  setCells: (cells: number[]) => void;
  setFieldSize: (fieldSize: number) => void;
}

const bounceButtons = keyframes`
  0% {
    transform: translateX(2000px);
  }

  100% {
    transform: translateX(0);
  }
`;

const StyledSizeButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 510px;
  animation: ${bounceButtons} 0.8s linear;

  @media (max-width: 768px) {
    width: 165px;
  }
`;

const SizeButton: React.FC<SizeButtonProps> = ({ fieldSize, setFieldSize, setCells }) => {
  const onSizeButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setFieldSize(Number(evt.currentTarget.value));
  };

  const getCells = (): number[] => {
    const numbers = new Array(fieldSize * fieldSize).fill(0).map((_, i) => ++i);
    const cells = [...numbers.slice(0, numbers.length - 1), null];

    return shuffleCells(cells);
  }

  useEffect(() => {
    setCells(getCells());
  }, [fieldSize]);

  return (
    <StyledSizeButton>
      <button className="waves-effect waves-light btn" value="3" onClick={onSizeButtonClick}>Размер поля: 3х3</button>
      <button className="waves-effect waves-light btn" value="4" onClick={onSizeButtonClick}>Размер поля: 4х4</button>
      <button className="waves-effect waves-light btn" value="5" onClick={onSizeButtonClick}>Размер поля: 5х5</button>
    </StyledSizeButton >
  );
};

export default SizeButton;
