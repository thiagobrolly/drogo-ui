import styled, { css } from 'styled-components';
import { shade, lighten, transparentize } from 'polished';
import { ButtonProps } from './index';

const buttonModifiers = {
  small: () => css`
    ${({ theme }) => css`
      min-height: 3rem;
      font-size: ${theme.font.size.xsmall};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius.small};
    `}
  `,

  medium: () => css`
    ${({ theme }) => css`
      min-height: 4rem;
      font-size: ${theme.font.size.small};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    `}
  `,

  large: () => css`
    ${({ theme }) => css`
      min-height: 5rem;
      font-size: ${theme.font.size.medium};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `}
  `,

  fullSize: () => css`
    ${({ theme }) => css`
      width: 100%;
      min-height: 4.5rem;
      font-size: ${theme.font.size.medium};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `}
  `,
};

const buttonTheme = {
  standard: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    }
  `,

  filled: () => css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.primary)};
    }
  `,

  outline: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    }

    &:disabled {
      background: transparent;
      color: ${({ theme }) => theme.colors.gray_70};
      box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.gray_70};
    }
  `,

  approve: () => css`
    background: ${({ theme }) => theme.colors.green_80};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.green_80)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.green_80)};
    }
  `,

  danger: () => css`
    background: ${({ theme }) => theme.colors.red_100};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.red_100)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.red_100)};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({
    variant,
    size,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    disabled,
    theme,
    isLoading,
    as,
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.weight.semiBold};
    text-align: center;
    transition: background 0.3s;
    border: none;
    border-radius: ${theme.border.radius.medium};
    text-decoration: none;
    width: fit-content;
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    cursor: pointer;
    ${buttonTheme[variant!]()}
    ${buttonModifiers[size!]()}



    ${(!!disabled || isLoading) &&
    css`
      cursor: not-allowed;
      background: ${theme.colors.gray_40};
      color: ${theme.colors.gray_60};

      span {
        pointer-events: none;
      }

      svg {
        fill: ${theme.colors.gray_60};
      }
    `}

    ${(!!disabled || isLoading) &&
    as &&
    css`
      pointer-events: none;
    `}

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  `}

  ${({ screen }) =>
    css`
      @media screen and (max-width: ${!!screen && `${screen[0]}px`}) {
        ${buttonModifiers.small}
      }
    `}
`;
