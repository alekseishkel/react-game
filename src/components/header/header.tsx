import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  padding: 0 1%;
`;

const StyledImg = styled.img`
  vertical-align: middle;
`;

const Header: React.FC = () => {
  return (
    <header>
      <StyledHeader className="nav-wrapper blue-grey lighten-5">
        <span className="brand-logo black-text">
          Пятнашки
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="black-text" onClick={() => document.getElementById("field").requestFullscreen()}>
              <StyledImg className="img" src="/img/full_screen.svg" width="30px" alt="Full screen" />
            </a>
          </li>
        </ul>
      </StyledHeader>
    </header>
  );
};

export default Header;
