import React, { useState } from "react";
import styled from "styled-components";

interface HeaderProps {
  isMusicPlaying: boolean;
  moves: number;
  setIsMusicPlaying: (isMusicPlaying: boolean) => void;
}

const StyledHeader = styled.nav`
  padding: 0 1%;
`;

const StyledImg = styled.img`
  vertical-align: middle;
`;

const StyledLi = styled.li`
  margin-right: 20px;
  font-family: "Segoe UI";
  font-size: 1.8rem;
  color: #000;
`;

const Header: React.FC<HeaderProps> = ({ isMusicPlaying, moves, setIsMusicPlaying }) => {
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);

  return (
    <header>
      <StyledHeader className="nav-wrapper blue-grey lighten-5">
        <span className="brand-logo black-text">
          Пятнашки
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <StyledLi>
            Ходы: {moves}
          </StyledLi>
          <li>
            <a className="black-text" onClick={() => document.getElementById("field").requestFullscreen()}>
              <StyledImg src="/img/full_screen.svg" width="30px" alt="Full screen" />
            </a>
          </li>
          <li>
            <a className="black-text" onClick={() => {
              setIsMusicPlaying(!isMusicPlaying);
              const music = document.getElementById("music") as HTMLAudioElement;
              isMusicPlaying ? music.pause() : music.play();
            }}>
              <StyledImg
                src={isMusicPlaying ? "/img/pause-button.svg" : "/img/play-button.svg"} width="30px" alt="Play music" />
            </a>
          </li>
          <li>
            <a className="black-text" onClick={() => {
              setIsSoundOn(!isSoundOn);
              const slideSound = document.getElementById("slide-sound") as HTMLAudioElement;
              isSoundOn ? slideSound.volume = 0 : slideSound.volume = 1;
            }}>
              <StyledImg src={isSoundOn ? "/img/volume-on.svg" : "/img/volume-off.svg"} width="40px" alt="Sound on/off" />
            </a>
          </li>
        </ul>
      </StyledHeader>
    </header >
  );
};

export default Header;
