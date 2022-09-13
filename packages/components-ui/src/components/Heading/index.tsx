import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'big'
    | 'xbig'
    | 'huge';
  color?: 'white' | 'gray' | 'black' | 'primary';
  bold?: boolean;
  uppercase?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Heading = ({
  children,
  as = 'h1',
  size = 'medium',
  uppercase = false,
  bold = false,
  color = 'black',
  ...props
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      uppercase={uppercase}
      bold={bold}
      color={color}
      {...props}
    >
      {children}
    </Styled.Title>
  );
};
