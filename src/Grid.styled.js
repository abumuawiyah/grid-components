import styled from "styled-components";

const StyledGrid = styled.div`
  display: -ms-grid;
  display: ${p => (p.display ? p.display : "grid")};

  -ms-grid-columns: ${p =>
    p.gridTemplateColumns.split(" ").join(` ${p.gridColumnGap} `)};
  grid-template-columns: ${p => p.gridTemplateColumns && p.gridTemplateColumns};

  -ms-grid-rows: ${p =>
    p.gridTemplateRows.split(" ").join(` ${p.gridRowGap} `)};
  -ms-grid-rows: 25% ${p => p.gridRowGap} 100px ${p => p.gridRowGap} auto;
  grid-template-rows: ${p => p.gridTemplateRows && p.gridTemplateRows};

  grid-template-areas: ${p => p.gridTemplateAreas && p.gridTemplateAreas};
  grid-column-gap: ${p => p.gridColumnGap && p.gridColumnGap};
  grid-row-gap: ${p => p.gridRowGap && p.gridRowGap};
  grid-gap: ${p => p.gridGap && p.gridGap};
  justify-items: ${p => p.justifyItems && p.justifyItems};

  -webkit-box-align: ${p => p.alignItems && p.alignItems};
  -ms-flex-align: ${p => p.alignItems && p.alignItems};
  align-items: stretch;

  -webkit-box-pack: ${p => p.justifyContent && p.justifyContent};
  -ms-flex-pack: ${p => p.justifyContent && p.justifyContent};
  justify-content: ${p => p.justifyContent && p.justifyContent};

  -ms-flex-line-pack: ${p => p.alignContent && p.alignContent};
  align-content: ${p => p.alignContent && p.alignContent};

  grid-auto-columns: ${p => p.gridAutoColumns && p.gridAutoColumns};
  grid-auto-flow: ${p => p.gridAutoFlow && p.gridAutoFlow};
  grid-auto-rows: ${p => p.gridAutoRows && p.gridAutoRows};
  grid: ${p => p.grid && p.grid};
`;

export { StyledGrid };
