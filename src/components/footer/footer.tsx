import React from "react";
import { connect } from 'react-redux';

import styled from "styled-components";

interface FooterProps {
  lang: string,
  mainColor: string;
}

const Copyright = styled.div`
  text-align: center;
`;

const StyledH5 = styled.h5`
  margin: 0.8rem 0 .656rem 0;
`

const StyledFooter = styled.footer`
  background-color: ${(props: { color: string }) => props.color === "#eceff1" ? "#eceff1" : "#607d8b"};
`

const Footer: React.FC<FooterProps> = ({lang, mainColor}) => {
  return (
    <StyledFooter color={mainColor} className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <StyledH5 className="black-text">{lang === "ru" ? "Правила" : "Rules"}</StyledH5>
            <p className="black-text rules">
            {lang === "ru" ? "Цель игры Пятнашки - выстроить все цифры по порядку. Чтобы переместить цифру вместо пустой ячейки - нажмите на нее. Также в игру можно играть с помощью горячих клавиш: Стрелка влево - переместить правую цифру относительно пустой ячейки. Стрелка вправо - переместить левую цифру. Стрелка вверх - переместить нижнюю цифру. Стрелка вниз - переместить верхнюю цифру. Клавиша Enter - новая игра" : "The goal of the game is to line up all the numbers in order. To move a number instead of an empty cell - click on it. You can also play the game using the following hotkeys: Left arrow - move the right number relative to the empty cell. Right arrow - move the left number. Up arrow - move the bottom number. Down arrow - move the top number. Enter key - new game"}
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="black-text">{lang === "ru" ? "Ссылки" : "Links"}</h5>
            <ul className="links">
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/alekseishkel"
                >
                  <img src="/img/github.png" width="82px" alt="Github" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://rs.school/js/"
                >
                  <img src="/img/rs_school.svg" width="82px" alt="RS School" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/"
                >
                  <img src="/img/youtube.png" width="82px" alt="RS School" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container black-text">
          <Copyright>{lang === "ru" ? "© 2021 Пятнашки" : "© 2021 Piatnashki"}</Copyright>
        </div>
      </div>
    </StyledFooter>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  lang: state.lang,
  mainColor: state.mainColor
});

export default connect(mapStateToProps)(Footer);
