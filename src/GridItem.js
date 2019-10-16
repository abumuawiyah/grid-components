import React from "react";
import { StyledGridItem } from "./GridItem-styled";

function GridItem({ children, ...others }) {
  return <StyledGridItem {...others}>{children}</StyledGridItem>;
}

export default GridItem;
