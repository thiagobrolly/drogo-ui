import styled from 'styled-components';
import { AsideProps } from '.';

export const Wrapper = styled.aside<AsideProps>`
  grid-area: AS;
  background: ${({ theme }) => theme.colors.aside};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_40};
  position: fixed;
  width: 300px;
  height: 100%;
  transition: 0.2s;
  z-index: ${({ theme }) => theme.layers.menu};

  @media (max-width: 930px) {
    padding-left: 0px;
    position: fixed;
    z-index: 19;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0px')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    overflow: hidden;
    padding-top: 70px;
    height: 100vh;
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;
