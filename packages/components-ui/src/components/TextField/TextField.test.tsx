import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { TextField } from '.';

describe('<TextField />', () => {
  it('Render with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Render with Label', () => {
    renderWithTheme(
      <TextField variant="outlined" label="Label" name="Label" />,
    );

    expect(screen.getByLabelText('Label')).toHaveStyle({
      background: 'transparent',
      color: '#000000',
    });
  });
});
