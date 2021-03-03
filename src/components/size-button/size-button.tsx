import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';

import shuffleCells from '../../utils/utils';

interface SizeButtonProps {
  fieldSize: number;
  lang: string
  sizeButtonHandler: (evt: React.MouseEvent<HTMLButtonElement>, cells: number[]) => void;
  onSizeButtonClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
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
  width: 475px;
  animation: ${bounceButtons} 0.8s linear;

  @media (max-width: 768px) {
    width: 165px;
  }
`;

const SizeButton: React.FC<SizeButtonProps> = ({ lang, fieldSize, sizeButtonHandler }) => {
  const onSizeButtonClick = (evt: any): void => {
    const size = Number(evt.currentTarget.value);
    const numbers = new Array(size * size).fill(0).map((_, i) => ++i);
    const cells = [...numbers.slice(0, numbers.length - 1), null];

    sizeButtonHandler(evt, shuffleCells(cells));
  }

  const enterKeyup = (evt) => {
    if (evt.key === "Enter") {
      const size = {
        currentTarget: {
          value: fieldSize
        }
      }
      onSizeButtonClick(size);
    }
    
  }

  useEffect(() => {
    window.addEventListener("keyup", enterKeyup);

    return () => (window as any).removeEventListener("keyup", enterKeyup);

  }, [])

  return (
    <StyledSizeButton>
      <button className="waves-effect waves-light btn" value="3" onClick={onSizeButtonClick}>{lang === "ru" ? "Новая игра: 3х3" : "New game: 3x3"}</button>
      <button className="waves-effect waves-light btn" value="4" onClick={onSizeButtonClick}>{lang === "ru" ? "Новая игра: 4х4" : "New game: 4x4"}</button>
      <button className="waves-effect waves-light btn" value="5" onClick={onSizeButtonClick}>{lang === "ru" ? "Новая игра: 5х5" : "New game: 5x5"}</button>
    </StyledSizeButton >
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  fieldSize: state.fieldSize,
  lang: state.lang
});

const mapDispatchToProps = (dispatch) => ({
  sizeButtonHandler: (evt: React.MouseEvent<HTMLButtonElement>, cells: number[]) => {
    dispatch(ActionCreator.setFieldSize(Number(evt.currentTarget.value)));
    dispatch(ActionCreator.setCells(cells));
    dispatch(ActionCreator.setMoves(0));
    dispatch(ActionCreator.setTime({
      minutes: 0,
      seconds: 0,
    }));

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeButton);
