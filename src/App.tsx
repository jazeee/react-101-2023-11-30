import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { APP_THEME } from './Mui/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={APP_THEME}>
        <CssBaseline />
        <Typography>Hello There</Typography>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
