import styled from "styled-components";

const StyledGridItem = styled.div`
  -ms-grid-column: 2;
  grid-column-start: ${p => p.gridColumnStart && p.gridColumnStart};

  -ms-grid-column-span: NaN;
  grid-column-end: ${p => p.gridColumnEnd && p.gridColumnEnd};

  -ms-grid-row: ${p => p.gridRowStart && p.gridRowStart};
  grid-row-start: ${p => p.gridRowStart && p.gridRowStart};

  -ms-grid-row-span: NaN;
  grid-row-end: ${p => p.gridRowEnd && p.gridRowEnd};

  grid-column: ${p => p.gridColumn && p.gridColumn};
  grid-row: ${p => p.gridRow && p.gridRow};
  grid-area: ${p => p.gridArea && p.gridArea};

  -ms-grid-column-align: ${p => p.justifySelf && p.justifySelf};
  justify-self: ${p => p.justifySelf && p.justifySelf};
  -ms-grid-row-align: ${p => p.gridArea && p.gridArea};
  align-self: ${p => p.gridArea && p.gridArea};
`;

export { StyledGridItem };
