import React from "react";

import Field from "../field/field";
import Footer from "../footer/footer";
import GlobalStyle from "../global-style/global-style";
import Header from "../header/header";
import SizeButton from "../size-button/size-button";

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
