import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Dropdown } from '.';

describe('<Dropdown />', () => {
  beforeEach(() => {
    renderWithTheme(
      <Dropdown title="test">
        <span>Content</span>
        <span>Content2</span>
      </Dropdown>,
    );
  });

  describe('should handle open/close dropdown', () => {
    it('should render with title', () => {
      expect(screen.getByLabelText('dropdown title')).toBeInTheDocument();
      expect(screen.getByLabelText('dropdown title')).toHaveTextContent('test');
    });

    it('icon arrow down and and first children of dropdown should be in the document', () => {
      const content = screen.getByText(/content/i);
      expect(
        screen.getByRole('img', { name: /ploutlinearrowdown/i }),
      ).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });

    it('show open dropdown list when click on dropdown container', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);

      expect(screen.getAllByText(/^content$/i)).toHaveLength(2);
      expect(screen.getByText(/^content2$/i)).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowup/i,
        }),
      ).toBeInTheDocument();
    });

    it('show open dropdown list when click on dropdown container and close when on a second click', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);

      expect(screen.getAllByText(/^content$/i)).toHaveLength(2);
      expect(screen.getByText(/^content2$/i)).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowup/i,
        }),
      ).toBeInTheDocument();

      userEvent.click(dropdownContainer);

      expect(screen.getAllByText(/^content$/i)).toHaveLength(1);
    });

    it('should close dropdown list when click outside of element', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);
      expect(screen.getByRole('list')).toBeInTheDocument();

      userEvent.click(document.body);
      expect(screen.getAllByText(/^content$/i)).toHaveLength(1);
    });

    it('should close dropdown list when a item from the list is clicked', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);
      expect(screen.getByRole('list')).toBeInTheDocument();

      userEvent.click(screen.getByTestId('1'));
      expect(screen.getAllByText(/^content2$/i)).toHaveLength(1);
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowdown/i,
        }),
      ).toBeInTheDocument();
    });

    it('Should close dropdown list when press Escape keyboard button', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);
      userEvent.keyboard('{Escape}');
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowdown/i,
        }),
      ).toBeInTheDocument();
    });

    it('Should close dropdown list when press Enter keyboard button', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);
      userEvent.keyboard('{Enter}');
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowdown/i,
        }),
      ).toBeInTheDocument();
    });
  });

  describe('should be able to navigate with arrows key', () => {
    it('when dropdown list is open it is possible to navigate to down', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });
    });

    it('when dropdown list is open it is possible to navigate to up', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });
    });

    it('when dropdown list is open just the selected field change background color', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': 'white',
      });

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': 'white',
      });

      userEvent.keyboard('{ArrowUp}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': 'white',
      });

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': 'white',
      });

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': 'white',
      });

      userEvent.keyboard('{ArrowDown}');
      expect(screen.getByTestId('0')).toHaveStyle({
        'background-color': '#ecedef',
      });
      expect(screen.getByTestId('1')).toHaveStyle({
        'background-color': 'white',
      });
    });
  });

  describe('should handle selecting a value', () => {
    it('Selecting by mouse click', () => {
      const content = screen.getByText(/content/i);
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });

      expect(
        screen.getByRole('img', { name: /ploutlinearrowdown/i }),
      ).toBeInTheDocument();
      expect(content).toBeInTheDocument();

      userEvent.click(dropdownContainer);
      userEvent.click(screen.getByTestId('1'));
      expect(screen.getAllByText(/^content2$/i)).toHaveLength(1);
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowdown/i,
        }),
      ).toBeInTheDocument();
    });

    it('Selecting by keyboard Enter key press', () => {
      const dropdownContainer = screen.getByRole('listbox', {
        name: /dropdown toggle/i,
      });
      userEvent.click(dropdownContainer);
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{Enter}');

      expect(screen.getAllByText(/^content2$/i)).toHaveLength(1);
      expect(
        screen.getByRole('img', {
          name: /ploutlinearrowdown/i,
        }),
      ).toBeInTheDocument();
    });
  });
});
