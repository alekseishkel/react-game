import React, { useState } from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import GameWon from "../game-won/game-won";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

import shuffleCells from '../../utils/utils';

const App: React.FC = () => {
  const [cells, setCells] = useState<number[]>(shuffleCells([1, 2, 3, 4, 5, 6, 7, 8, null]));
  const [fieldSize, setFieldSize] = useState<number>(4);
  const [isWon, setIsWon] = useState<boolean>(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <GameWon cells={cells} isWon={isWon} setCells={setCells} setIsWon={setIsWon} />
      <Header />
      <main>
        <Field cells={cells} fieldSize={fieldSize} isWon={isWon}
          setCells={setCells} setIsWon={setIsWon} />
        <SizeButton fieldSize={fieldSize} setCells={setCells} setFieldSize={setFieldSize} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
