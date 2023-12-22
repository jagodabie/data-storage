import { ThemeProvider } from 'styled-components';

interface AppProvidersProps {
  children: React.ReactNode;
  theme: any;
}

function AppProviders({ children, theme }: AppProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default AppProviders;
