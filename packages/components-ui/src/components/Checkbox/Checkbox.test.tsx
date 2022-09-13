import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Checkbox } from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    // input a partir do label/role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with color label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="#0065fc" />,
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#0065fc',
    });
  });

  // it('should dispatch onCheck when status changes', async () => {
  //   const onCheck = jest.fn();

  //   renderWithTheme(<Checkbox label="Checkbox" />);

  //   expect(onCheck).not.toHaveBeenCalled();

  //   userEvent.click(screen.getByRole('checkbox'));
  //   await waitFor(() => {
  //     expect(onCheck).toHaveBeenCalledTimes(1);
  //   });

  //   expect(onCheck).toHaveBeenCalledWith(true);
  // });

  // it('should dispatch onCheck when status changes', async () => {
  //   const onCheck = jest.fn();

  //   renderWithTheme(<Checkbox label="Checkbox" />);

  //   userEvent.click(screen.getByRole('checkbox'));
  //   await waitFor(() => {
  //     expect(onCheck).toHaveBeenCalledTimes(1);
  //   });

  //   expect(onCheck).toHaveBeenCalledWith(false);
  // });

  // it('should be accessible with tab', async () => {
  //   renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

  //   expect(document.body).toHaveFocus();

  //   userEvent.tab();

  //   expect(screen.getByLabelText(/Checkbox/i)).toHaveFocus();
  // });
});
