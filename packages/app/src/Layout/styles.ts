import styled from 'styled-components';
import { LayoutProps } from '.';

export const Grid = styled.div<LayoutProps>`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS MH'
    'AS CT';

  min-height: 100vh;

  @media (max-width: 930px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'MH'
      'CT';

    /* aside {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: none;
    } */
  }
`;
