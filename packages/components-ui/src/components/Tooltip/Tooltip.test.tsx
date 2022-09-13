import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Tooltip } from '.';

describe('<Tooltip />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle Tooltip">Click here</h1>;

    renderWithTheme(
      <Tooltip trigger={title}>
        <span>Content</span>
      </Tooltip>,
    );
  });

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle Tooltip/)).toBeInTheDocument();
  });
});
