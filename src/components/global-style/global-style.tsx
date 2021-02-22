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
    background-color: #efebe9
  }

  .row {
    margin-bottom: 0;
  }

  .page-footer {
    padding-top: 0;
  }

  .btn {
    background-color: #795548;
  }

  .btn:hover {
    background-color: #5d4037;
  }
`;

export default GlobalStyle;