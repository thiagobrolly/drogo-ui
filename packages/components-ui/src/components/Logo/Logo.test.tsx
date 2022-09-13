import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo in the primary color by default', () => {
    renderWithTheme(<Logo />);
    expect(
      screen.getByRole('img', { name: /paylivre/i }).parentElement,
    ).toHaveStyle({
      color: '#215aff',
    });
  });

  it('should render the logo in white color', () => {
    renderWithTheme(<Logo color="white" />);
    expect(
      screen.getByRole('img', { name: /paylivre/i }).parentElement,
    ).toHaveStyle({
      color: '#ffffff',
    });
  });

  it('should render average logo by default', () => {
    renderWithTheme(<Logo size="medium" />);
    expect(screen.getByRole('img', { name: /paylivre/i })).toHaveStyle({
      width: '24rem',
    });
  });

  it('should render small logo when small size is passed', () => {
    renderWithTheme(<Logo size="small" />);
    expect(screen.getByRole('img', { name: /paylivre/i })).toHaveStyle({
      width: '16rem',
    });
  });

  it('should render large logo when large size is passed', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByRole('img', { name: /paylivre/i })).toHaveStyle({
      width: '32rem',
    });
  });

  it('should render large logo with slogan when large size is requested and showSlogan is true', () => {
    renderWithTheme(<Logo showSlogan size="large" />);
    expect(
      screen.getByRole('img', { name: /paylivre \- liberdade de conecta/i }),
    ).toHaveStyle({
      width: '39.2rem',
    });
  });
});
