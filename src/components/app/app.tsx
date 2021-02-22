import React from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
  }
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Field />
        <SizeButton />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
