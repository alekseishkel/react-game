import React from "react";
import styled from "styled-components";

const Copyright = styled.div`
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <footer className="page-footer blue darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Правила игры</h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              nostrum ullam debitis possimus libero amet eum consectetur natus?
              Adipisci iure ratione cupiditate sit, quam voluptatum error libero
              praesentium cum iusto!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Ссылки</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/alekseishkel"
                >
                  <img src="/img/github.png" width="82px" alt="Github" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://rs.school/js/"
                >
                  <img src="/img/rs_school.svg" width="82px" alt="RS School" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/"
                >
                  <img src="/img/youtube.png" width="82px" alt="RS School" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <Copyright>© 2020 Пятнашки</Copyright>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
