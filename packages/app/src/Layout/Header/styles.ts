import styled from 'styled-components';
import { HeaderProps } from '.';

export const Wrapper = styled.header<HeaderProps>`
  grid-area: MH;
  background: ${({ theme }) => theme.colors.aside};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  padding-left: 300px;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: ${({ theme }) => theme.layers.menu};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_40};

  button {
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
  }

  @media (max-width: 930px) {
    padding-left: 1.6rem;
  }
`;

export const ButtonAsideBar = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 930px) {
    display: none;
  }
`;
