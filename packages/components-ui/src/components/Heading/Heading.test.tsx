import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Heading } from '.';

describe('<Heading />', () => {
  it('should render a gray heading by default', () => {
    renderWithTheme(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#2C2C2E',
    });
  });

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#fff',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#2C2C2E',
    });
  });

  it('should render a primary heading when color is passed', () => {
    renderWithTheme(<Heading color="primary">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#215aff',
    });
  });

  it('should render a gray heading when color is passed', () => {
    renderWithTheme(<Heading color="gray">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#636366',
    });
  });

  it('should render a medium sized title by default', () => {
    renderWithTheme(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '1.6rem',
    });
  });

  it('should render a small title when the size is passed', () => {
    renderWithTheme(<Heading size="small">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '1.4rem',
    });
  });

  it('should render a large title when the size is passed', () => {
    renderWithTheme(<Heading size="large">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '2.0rem',
    });
  });

  it('should render a xlarge title when the size is passed', () => {
    renderWithTheme(<Heading size="xlarge">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '2.4rem',
    });
  });

  it('should render a xxlarge title when the size is passed', () => {
    renderWithTheme(<Heading size="xxlarge">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '3.4rem',
    });
  });

  it('should render a big title when the size is passed', () => {
    renderWithTheme(<Heading size="big">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '4.8rem',
    });
  });

  it('should render a xbig title when the size is passed', () => {
    renderWithTheme(<Heading size="xbig">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '6.0rem',
    });
  });

  it('should render a huge title when the size is passed', () => {
    renderWithTheme(<Heading size="huge">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '9.6rem',
    });
  });

  it('should render a title with uppercase font when passed', () => {
    renderWithTheme(<Heading uppercase>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      textTransform: 'uppercase',
    });
  });

  it('should render a title with bold font when passed', () => {
    renderWithTheme(<Heading bold>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontWeight: '800',
    });
  });
});
