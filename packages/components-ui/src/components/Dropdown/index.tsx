import { forwardRef } from 'react';
import { DropdownHandle } from './DropdownHandle';
import * as S from './styles';

export type SelectProps = {
  children: JSX.Element[];
  title?: string;
  onClick?: (value: string | number) => void;
  maxWidth?: string;
};

export const Dropdown = forwardRef<HTMLDivElement, SelectProps>(
  ({ children, title, onClick, maxWidth = '22.5rem', ...props }, ref) => {
    return (
      <S.SelectContainer role="menu" maxWidth={maxWidth}>
        {title && (
          <S.DropDownLabel htmlFor={title} aria-label="dropdown title">
            {title}
          </S.DropDownLabel>
        )}
        <DropdownHandle title={title} onClick={onClick} {...props} ref={ref}>
          {children}
        </DropdownHandle>
      </S.SelectContainer>
    );
  },
);
