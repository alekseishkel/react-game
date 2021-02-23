import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
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
    background-color: #607d8b
  }

  .row {
    margin-bottom: 0;
  }

  .page-footer {
    padding-top: 0;
  }

  .btn {
    background-color: #b0bec5;
  }

  .btn:hover {
    background-color: #78909c;
  }
`;

export default GlobalStyle;
