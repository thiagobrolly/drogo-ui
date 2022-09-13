import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

const mediaFont = () => css`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.xxlarge};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${({ theme }) => theme.font.size.small};
  `,
  medium: () => css`
    font-size: ${({ theme }) => theme.font.size.medium};
  `,
  large: () => css`
    font-size: ${({ theme }) => theme.font.size.large};
  `,
  xlarge: () => css`
    font-size: ${({ theme }) => theme.font.size.xlarge};
  `,
  xxlarge: () => css`
    font-size: ${({ theme }) => theme.font.size.xxlarge};
    ${mediaFont()};
  `,
  big: () => css`
    font-size: ${({ theme }) => theme.font.size.big};
    ${mediaFont()};
  `,
  xbig: () => css`
    font-size: ${({ theme }) => theme.font.size.xbig};
    ${mediaFont()};
  `,
  huge: () => css`
    font-size: ${({ theme }) => theme.font.size.huge};
    ${mediaFont()};
  `,
};

const titleColor = {
  white: () => css`
    color: ${({ theme }) => theme.colors.neutral_white};
  `,
  gray: () => css`
    color: ${({ theme }) => theme.colors.gray_80};
  `,
  black: () => css`
    color: ${({ theme }) => theme.colors.gray_110};
  `,
  primary: () => css`
    color: ${({ theme }) => theme.colors.primary};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ color, size, uppercase, bold, m, mb, ml, mr, mt, mx, my }) => css`
    ${titleColor[color!]()};
    ${titleSize[size!]()};
    ${titleCase(uppercase!)};
    font-weight: ${bold ? '800' : '400'};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
  `}
`;
