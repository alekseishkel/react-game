import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 0 1%;
`;

const Header: React.FC = () => {
  return (
      <nav>
        <StyledHeader className="nav-wrapper light-blue">
          <a href="#" className="brand-logo">Пятнашки</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Правила</a></li>
          </ul>
        </StyledHeader>
      </nav>
  )


}

export default Header;