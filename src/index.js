import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import GridItem from "./GridItem";

function App() {
  return (
    <div className="App">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
