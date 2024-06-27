import { CssBaseline, ThemeProvider } from '@mui/material';
import { APP_THEME } from './Mui/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Feature1Page } from './Feature1/Page';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={APP_THEME}>
        <CssBaseline />
        <Feature1Page />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
