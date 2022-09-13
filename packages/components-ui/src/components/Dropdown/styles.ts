import styled, { css } from 'styled-components';
import { DropdownListProps } from './DropdownList';

export const SelectContainer = styled.div`
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
  width: 100%;
  position: relative;
  margin-right: 1rem;
  margin-top: 2rem;
  cursor: pointer;
`;
export const DropDownLabel = styled.label`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.gray_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 89px 4px 16px;
`;

export const DropDownHeader = styled.div<Pick<DropdownListProps, 'isOpen'>>`
  ${({ theme, isOpen }) => css`
    color: ${theme.colors.gray_100};
    font-size: 1.6rem;
    border-radius: 10px;
    height: 48px;
    padding: 0.6rem 0.6rem 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.1rem solid
      ${isOpen ? theme.colors.gray_100 : theme.colors.gray_50};
  `}
`;

export const DropDownList = styled.ul`
  height: auto;
  margin: 5px 0;
  padding: 10px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 3px 10px 0 rgba(112, 112, 112, 0.4);
  background-color: #fff;
  position: absolute;
  z-index: 100;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    padding: 11px 16px 6px;
    overflow: hidden;
    font-size: 1.5rem;
    background-color: ${({ keyActivated }: { keyActivated: boolean }) =>
      keyActivated ? theme.colors.gray_20 : 'white'};

    &:hover {
      background-color: ${theme.colors.gray_20};
    }
  `}
`;
