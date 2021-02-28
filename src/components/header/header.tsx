import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  padding: 0 1%;
`;

const Header: React.FC = () => {
  return (
    <header>
      <StyledHeader className="nav-wrapper blue-grey lighten-5">
        <a href="#" className="brand-logo black-text">
          Пятнашки
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button className="black-text" onClick={() => document.getElementById("field").requestFullscreen()}>
              Фулл Скрин
            </button>
          </li>
        </ul>
      </StyledHeader>
    </header>
  );
};

export default Header;
