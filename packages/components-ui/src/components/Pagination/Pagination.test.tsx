import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Pagination } from '.';

describe('<Pagination />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={1}
        onPageChange={() => undefined}
      />,
    );

    expect(
      screen.getByRole('navigation', { name: /Pagination/i }),
    ).toBeInTheDocument();
  });

  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={1}
        onPageChange={() => undefined}
      />,
    );

    expect(
      screen.queryByRole('img', {
        name: /ploutlinearrowleft/i,
      }),
    ).not.toBeInTheDocument();
  });

  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={2}
        onPageChange={() => undefined}
      />,
    );

    expect(
      screen.getByRole('img', {
        name: /ploutlinearrowright/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={10}
        onPageChange={() => undefined}
      />,
    );

    expect(
      screen.queryByRole('img', {
        name: /ploutlinearrowright/i,
      }),
    ).not.toBeInTheDocument();
  });

  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={2}
        onPageChange={() => undefined}
      />,
    );

    expect(screen.getByRole('button', { name: /2/i })).toHaveStyle({
      background: '#215aff',
      color: '#ffffff',
    });

    expect(screen.getByRole('button', { name: /3/i })).toHaveStyle({
      background: 'none',
      color: '#3A3A3C',
    });
  });

  it('should render the heading', () => {
    renderWithTheme(
      <Pagination
        totalCountOfRegisters={10}
        currentPage={2}
        onPageChange={() => undefined}
        isDisabled
      />,
    );

    expect(screen.getByRole('button', { name: /2/i })).toHaveStyle({
      background: '#D3D6DA',
      color: '#929AA3',
    });
  });
});
