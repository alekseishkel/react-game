import React, { useEffect } from "react";

import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';

import styled from "styled-components";

interface HeaderProps {
  isMusicPlaying: boolean;
  isSoundOn: boolean;
  isWon: boolean;
  lang: string,
  moves: number;
  mainColor: string;
  onMusicClick: (isMusicPlaying: boolean) => void;
  setTime: (time: { minutes: number, seconds: number }) => void;
  setLang: (language: string) => void;
  setIsSoundOn: (isSoundOn: boolean) => void;
  setMainColor: (color: string) => void;
  time: { minutes: number, seconds: number };
}

const StyledHeader = styled.nav`
  padding: 0 1%;
  background-color: ${(props: { color: string }) => props.color === "#eceff1" ? "#eceff1" : "#607d8b"};

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

const StyledColorLi = styled.li`
  width: 27px;
  height: 27px;
  margin-right: 10px;
  margin-top: 12px;
  font-family: "Segoe UI";
  font-size: 1.8rem;
  color: #000;
  background-color: ${(props: { color: string }) => props.color === "#eceff1" ? "#eceff1" : "#607d8b"};
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
`;

const ONE_SECOND = 1000;
const Header: React.FC<HeaderProps> = ({ isMusicPlaying, isWon, isSoundOn, lang, moves,
  mainColor, onMusicClick, time, setTime, setIsSoundOn, setLang, setMainColor }) => {

  useEffect(() => {
    let timer = setTimeout(() => {
      if (time.seconds >= 59 && isWon === false) {
        setTime({
          minutes: time.minutes + 1,
          seconds: 0
        })
      } else if (time.seconds < 59 && isWon === false) {
        setTime({
          minutes: time.minutes,
          seconds: time.seconds + 1
        })
      }
    }, ONE_SECOND);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <header>
      <StyledHeader color={mainColor} className="nav-wrapper">
        <span className="brand-logo black-text">
          {lang === "ru" ? "Пятнашки" : "Piatnashki"}
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <StyledLi>
            {lang === "ru" ? `${"Ходы: " + moves}` : `${"Moves: " + moves}`}
          </StyledLi>
          <StyledLi>
            {lang === "ru" ? `${"Время: " + (time.minutes < 10 ? "0" + time.minutes : "" + time.minutes) + ":" + 
            (time.seconds < 10 ? "0" + time.seconds : "" + time.seconds)}` : 
            `${"Time: " + (time.minutes < 10 ? "0" + time.minutes : "" + time.minutes) + ":" + 
            (time.seconds < 10 ? "0" + time.seconds : "" + time.seconds)}`}

          </StyledLi>
          <li>
            <a className="black-text" onClick={() => document.getElementById("field").requestFullscreen()}>
              <StyledImg src="/img/full_screen.svg" width="30px" alt="Full screen" />
            </a>
          </li>
          <li>
            <a className="black-text" onClick={() => {
              onMusicClick(isMusicPlaying);
              const music = document.getElementById("music") as HTMLAudioElement;
              isMusicPlaying ? music.pause() : music.play();
            }}>
              <StyledImg
                src={isMusicPlaying ? "/img/pause-button.svg" : "/img/play-button.svg"} width="30px" alt="Play music" />
            </a>
          </li>
          <li>
            <a className="black-text" onClick={() => {
              setIsSoundOn(isSoundOn);
              const slideSound = document.getElementById("slide-sound") as HTMLAudioElement;
              isSoundOn ? slideSound.volume = 0 : slideSound.volume = 1;
            }}>
              <StyledImg src={isSoundOn ? "/img/volume-on.svg" : "/img/volume-off.svg"} width="40px" alt="Sound on/off" />
            </a>
          </li>
          <li>
            <a className="black-text" onClick={() => {
              const language = lang === "ru" ? "en" : "ru";
              setLang(language);
            }}>
              <StyledImg src={lang === "ru" ? "/img/ru.png" : "/img/en.png"} width="30px" alt="Full screen" />
            </a>
          </li >
          <StyledColorLi color={mainColor} onClick={() => {
              const color = mainColor === "#eceff1" ? "#607d8b" : "#eceff1";
              setMainColor(color);
              document.querySelector("main").style.backgroundColor = mainColor;
            }}>
          </StyledColorLi>
        </ul>
      </StyledHeader>
    </header >
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isMusicPlaying: state.isMusicPlaying,
  isSoundOn: state.isSoundOn,
  isWon: state.isWon,
  moves: state.moves,
  time: state.time,
  lang: state.lang,
  mainColor: state.mainColor
});

const mapDispatchToProps = (dispatch) => ({
  onMusicClick: (isMusicPlaying) => {
    dispatch(ActionCreator.setIsMusicPlaying(!isMusicPlaying));
  },
  setTime: (time) => {
    dispatch(ActionCreator.setTime(time));
  },
  setIsSoundOn: (isSoundOn) => {
    dispatch(ActionCreator.setIsSoundOn(!isSoundOn));
  },
  setLang: (language) => {
    dispatch(ActionCreator.setLanguage(language));
  },
  setMainColor: (color) => {
    dispatch(ActionCreator.setMainColor(color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
