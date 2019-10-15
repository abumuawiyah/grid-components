import React from "react";
import { StyledGrid } from "./Grid.styled";

function Grid({ children, ...others }) {
  return <StyledGrid {...others}>{children}</StyledGrid>;
}

export default Grid;
