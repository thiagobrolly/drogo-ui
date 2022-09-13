import { ThemeProvider } from '@drogo-ui/styles';
import { render, RenderResult } from '@testing-library/react';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);
