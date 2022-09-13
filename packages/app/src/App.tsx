import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@drogo-ui/styles';
import { Router } from './routes';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
