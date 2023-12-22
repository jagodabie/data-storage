import { Switch } from '@mui/material';
import { GlobalStyle } from './globals/GlobalStyles';
import useTheme from './hooks/useTheme';
import { AppProviders } from './providers/AppProviders';
import { customTheme } from './const';
import { StyledDarkModeIcon, StyledLightModeIcon } from '.';
import Navigation from './components/Navigation/Navigation';

function App() {
  const { theme, toggleTheme, themesStyles } = useTheme();

  return (
    <AppProviders theme={themesStyles(theme)}>
      <GlobalStyle />
      <div className="App" data-testid="app">
        <Navigation
          toggleButton={(
            <Switch
              checked={customTheme.dark === theme}
              onChange={toggleTheme}
              inputProps={{ 'aria-label': 'enable dark mode' }}
              icon={<StyledLightModeIcon />}
              checkedIcon={<StyledDarkModeIcon />}
            />
          )}
        />
      </div>
    </AppProviders>
  );
}

export default App;
