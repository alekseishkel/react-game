import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  padding: 0 1%;
`;

const Header: React.FC = () => {
  return (
    <header>
      <StyledHeader className="nav-wrapper blue darken-3">
        <a href="#" className="brand-logo">
          Пятнашки
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Правила</a>
          </li>
        </ul>
      </StyledHeader>
    </header>
  );
};

export default Header;
