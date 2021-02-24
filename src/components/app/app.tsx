import React, {useState} from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

const App: React.FC = () => {
  const [cells, setCells] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, null]);

  const onCellClick = (number: number): void => {
    setCells(cells => {
      const nullCellIndex = cells.findIndex((cell) => cell === null);
      const cellIndex = number - 1;
    })
    
  }
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Field cells={cells} onCellClick={onCellClick}/>
        <SizeButton />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
