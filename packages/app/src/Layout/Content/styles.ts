import styled from 'styled-components';

export const Wrapper = styled.main`
  grid-area: CT;
  background-color: ${({ theme }) => theme.colors.content};
  overflow: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.colors.content};
  padding: 1.6rem;
  margin: 0 auto;
  overflow: auto;

  @media (max-width: 1024px) {
    //background-color: beige;
    max-width: 1024px;
  }

  @media (max-width: 768px) {
    //background-color: antiquewhite;
    max-width: 768px;
  }

  @media (max-width: 480px) {
    //background-color: burlywood;
    max-width: 480px;
  }

  @media (max-width: 320px) {
    //background-color: yellowgreen;
    max-width: 320px;
  }
`;
