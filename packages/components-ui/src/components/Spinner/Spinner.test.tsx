import React from 'react';
import { screen } from '@testing-library/react';
import { Spinner } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Spinner />', () => {
  it('should render Spinner with size 50', () => {
    renderWithTheme(<Spinner size={50} />);
    expect(screen.getByRole('img')).toHaveStyle({
      width: '50',
    });
  });
});
