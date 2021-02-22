import React, { useState } from "react";
import styled from "styled-components";

const StyledFiled = styled.div`
  width: 350px;
  height: 350px;
  background-color: #1565c0;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Field: React.FC = () => {
  const [cells, setCells] = useState([, 1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <main>
      <StyledFiled className="cells"></StyledFiled>
    </main>
  );
};

export default Field;
