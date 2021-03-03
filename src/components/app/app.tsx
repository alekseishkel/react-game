import React from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import GameWon from "../game-won/game-won";
import Header from "../header/header";
import Music from "../audio/music";
import SizeButton from "../size-button/size-button";

const App: React.FC = () => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <GameWon />
      <Music />
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
