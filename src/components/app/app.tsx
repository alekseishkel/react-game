import React, { useState } from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

const App: React.FC = () => {
  const [cells, setCells] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, null]);
  const [fieldSize, setFieldSize] = useState<number>(3);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Field cells={cells} fieldSize={fieldSize} setCells={setCells} />
        <SizeButton fieldSize={fieldSize} setCells={setCells} setFieldSize={setFieldSize} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
