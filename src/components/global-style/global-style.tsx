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
    background-color: #607d8b;
  }

  .row {
    margin-bottom: 0;
  }

  .page-footer {
    padding-top: 0;
  }

  .btn {
    background-color: #b0bec5;
    margin-bottom: 10px;
  }

  .btn:hover {
    background-color: #78909c;
  }

  .btn:focus {
    background-color: #b0bec5;
  }

  .nav-wrapper {
    height: 50px;
    line-height: 48px;
  }

  .page-footer .footer-copyright {
    height: 30px;
    min-height: 30px;
    padding: 0;
  }

  .rules, .links {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 992px) {
    .s12 {
      text-align: center;
    }
  }
`;

export default GlobalStyle;
