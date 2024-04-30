import { CssBaseline, ThemeProvider } from "@mui/material";
import { APP_THEME } from "./Mui/theme";

export function App() {
  return (
    <ThemeProvider theme={APP_THEME}>
      <CssBaseline />
    </ThemeProvider>
  );
}
