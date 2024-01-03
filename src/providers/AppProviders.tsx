import { ThemeProvider } from 'styled-components';

interface AppProvidersProps {
  children: React.ReactNode;
  theme: any;
}

const AppProviders = ({ children, theme }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default AppProviders;
