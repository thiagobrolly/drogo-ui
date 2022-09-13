import React from 'react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Popover } from '.';

describe('<Popover />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Popover trigger="Click">Content</Popover>);
  });
});
