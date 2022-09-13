import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Skeleton } from '.';

describe('<Skeleton />', () => {
  it('should render the Skeleton', () => {
    renderWithTheme(<Skeleton height="10px" />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveStyle({
      height: '10px',
    });
  });
});
