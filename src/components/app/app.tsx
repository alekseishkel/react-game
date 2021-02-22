import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Footer />
    </React.Fragment>
  );
};

export default App;
