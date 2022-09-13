import styled, { css } from 'styled-components';

import { LogoProps } from '.';

const wrapperModifiers = {
  small: () => css`
    .paylivre {
      width: 16rem;
    }
    .slogan {
      width: 19.7rem;
    }
  `,

  medium: () => css`
    .paylivre {
      width: 24rem;
    }
    .slogan {
      width: 29.5rem;
    }
  `,

  large: () => css`
    .paylivre {
      width: 32rem;
    }
    .slogan {
      width: 39.2rem;
    }
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size, m, mb, ml, mr, mt, mx, my }) => css`
    color: ${({ theme }) => theme.colors[color!]};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    ${!!size && wrapperModifiers[size]}
  `}
`;
