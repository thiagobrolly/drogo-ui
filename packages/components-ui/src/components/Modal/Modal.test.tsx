import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Modal } from '.';

describe('<Modal />', () => {
  it('modal opening', async () => {
    const fn = jest.fn();

    const { container } = renderWithTheme(
      <Modal
        isOpen
        viewCloseButton
        shouldCloseOnOverlayClick
        shouldCloseOnEscClick
        onRequestClose={fn}
      >
        Content Modal
      </Modal>,
    );

    const modal = screen.getByLabelText('paylivre-modal');

    const ContentModal = screen.getByText(/content modal/i);
    const buttonClose = screen.getByRole('button', { name: /close modal/i });
    const overlay = screen.getByRole('region', { name: /overlay/i });

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(ContentModal).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();

    expect(buttonClose).toBeInTheDocument();

    userEvent.click(buttonClose);
    userEvent.click(overlay);
    fireEvent.keyDown(container, { key: 'Escape' });

    expect(fn).toHaveBeenCalled();
  });

  it('modal closed', async () => {
    const fn = jest.fn();

    renderWithTheme(
      <Modal
        isOpen={false}
        viewCloseButton
        shouldCloseOnOverlayClick
        shouldCloseOnEscClick
        onRequestClose={fn}
      >
        Content Modal
      </Modal>,
    );

    const modal = screen.getByLabelText('paylivre-modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
  });

  it('modal render title', async () => {
    const fn = jest.fn();

    renderWithTheme(
      <Modal title="Title Modal" isOpen onRequestClose={fn}>
        Content Modal
      </Modal>,
    );

    expect(
      screen.getByRole('heading', { name: /title modal/i }),
    ).toBeInTheDocument();
  });
});
