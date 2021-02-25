import React from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

const App: React.FC = () => {
  const cellNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, null];

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Field cellNumbers={cellNumbers} />
        <SizeButton />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
