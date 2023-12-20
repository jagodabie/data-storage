import { ThemeProvider } from "styled-components";

interface AppProvidersProps {
  children: React.ReactNode;
  theme: any;
}

export const AppProviders = ({ children, theme }: AppProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
