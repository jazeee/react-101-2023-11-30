import { CssBaseline, ThemeProvider } from '@mui/material';
import { APP_THEME } from './Mui/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FeaturePage } from './Feature/Page';
import { FeatureProvider } from './Feature/context';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={APP_THEME}>
        <CssBaseline />
        {/* <FeatureContext.Provider value={{ name, setName }}> */}
        {/* </FeatureContext.Provider> */}
        <FeatureProvider id="abc" suffix="123">
          <FeaturePage />
          test
        </FeatureProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
