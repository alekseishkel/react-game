import React, { useEffect } from "react";
import styled from "styled-components";

interface SizeButtonProps {
  fieldSize: number;
  setCells: (cells: number[]) => void;
  setFieldSize: (fieldSize: number) => void;
}

const StyledSizeButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 510px;

  @media (max-width: 768px) {
    width: 165px;
  }
`;

const SizeButton: React.FC<SizeButtonProps> = ({ fieldSize, setFieldSize, setCells }) => {
  const onSizeButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const getCells = (): number[] => {
      let cells = [];
      for (let i = 1; i <= fieldSize * fieldSize; i++) {
        i === fieldSize * fieldSize ? cells.push(null) : cells.push(i);
      }

      return cells;
    }

    setFieldSize(Number(evt.currentTarget.value));
    setCells(getCells());
  };

  return (
    <StyledSizeButton>
      <button className="waves-effect waves-light btn" value="3" onClick={onSizeButtonClick}>Размер поля: 3х3</button>
      <button className="waves-effect waves-light btn" value="4" onClick={onSizeButtonClick}>Размер поля: 4х4</button>
      <button className="waves-effect waves-light btn" value="5" onClick={onSizeButtonClick}>Размер поля: 5х5</button>
    </StyledSizeButton >
  );
};

export default SizeButton;
