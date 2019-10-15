import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const StyledButton = styled.button`
  background: red;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StyledButton
        css={`
          margin: 10px;
        `}
      >
        Button 123
      </StyledButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
