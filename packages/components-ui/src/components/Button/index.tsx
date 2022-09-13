import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  variant?: 'standard' | 'filled' | 'outline' | 'approve' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'fullSize';
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  isLoading?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  as?: React.ElementType;
  screen?: number[];
} & ButtonTypes;

export const Button = ({
  children,
  variant = 'filled',
  size = 'medium',
  isLoading = false,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      size={size}
      variant={variant}
      isLoading={isLoading}
      disabled={disabled}
      {...props}
    >
      <span>
        {children}
        {isLoading && <Spinner size={16} />}
      </span>
    </S.Button>
  );
};
