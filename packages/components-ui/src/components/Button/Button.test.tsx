import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      minHeight: '4rem',
      padding: '0.8rem 1.6rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      minHeight: '3rem',
      fontSize: '1.2rem',
      borderRadius: '0.5rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      minHeight: '5rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button size="fullSize">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render the standard variant', () => {
    renderWithTheme(<Button variant="standard">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: 'transparent',
      color: '#215aff',
    });
  });

  it('should render the filled variant', () => {
    renderWithTheme(<Button variant="filled">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#215aff',
      color: '#ffffff',
    });
  });

  it('should render the outline variant', () => {
    renderWithTheme(<Button variant="outline">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: 'transparent',
      color: '#215aff',
      boxShadow: 'inset 0px 0px 0px 2px #215aff',
    });
  });

  it('should render the approve variant', () => {
    renderWithTheme(<Button variant="approve">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#48c88f',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render the cancel variant', () => {
    renderWithTheme(<Button variant="danger">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#ff2e00',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render Button as a link', () => {
    // const { debug, container } = render(
    //   <Button as="a" href="/link">
    //     Link
    //   </Button>,
    // );
    // debug(container);
    renderWithTheme(
      <Button as="a" href="/link">
        Link
      </Button>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link" disabled>
        Link
      </Button>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toHaveStyle({
      cursor: 'not-allowed',
      pointerEvents: 'none',
      background: '#D3D6DA',
      color: '#929AA3',
    });
  });
});
