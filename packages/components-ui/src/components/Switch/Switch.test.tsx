import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Switch } from '.';

describe('<Switch />', () => {
  it('should render Switch', () => {
    renderWithTheme(<Switch />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render Switch off', () => {
    renderWithTheme(<Switch />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    expect(screen.getByRole('checkbox')).toHaveStyle({
      backgroundColor: '#D3D6DA',
    });
  });

  it('should render Switch on', () => {
    renderWithTheme(<Switch />);

    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByRole('checkbox')).toHaveStyle({
      backgroundColor: '#ecedef',
    });
  });
});
