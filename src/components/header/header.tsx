import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  padding: 0 1%;
`;

const Header: React.FC = () => {
  return (
    <header>
      <StyledHeader className="nav-wrapper brown lighten-2">
        <a href="#" className="brand-logo black-text">
          Пятнашки
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="black-text" href="sass.html">Правила</a>
          </li>
        </ul>
      </StyledHeader>
    </header>
  );
};

export default Header;
