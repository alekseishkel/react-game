import React from "react";
import styled from "styled-components";

const Copyright = styled.div`
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <footer className="page-footer  blue-grey lighten-5">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="black-text">Правила игры</h5>
            <p className="black-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              nostrum ullam debitis possimus libero amet eum consectetur natus?
              Adipisci iure ratione cupiditate sit, quam voluptatum error libero
              praesentium cum iusto!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="black-text">Ссылки</h5>
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
        <div className="container black-text">
          <Copyright>© 2021 Пятнашки</Copyright>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
