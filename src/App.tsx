import { Switch } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from 'styled-components';
import GlobalStyle from './globals/GlobalStyles';
import useTheme from './hooks/useTheme';
import AppProviders from './providers/AppProviders';
import { customTheme } from './const';

import HomeView from './pages/HomeView';
import Navigation from './components/Navigation/Navigation';

export const StyledDarkModeIcon = styled(DarkModeIcon)`
  &.MuiSvgIcon-root {
    font-size: 1em;
    margin: 2px 0 0;
  }
`;

export const StyledLightModeIcon = styled(LightModeIcon)`
  &.MuiSvgIcon-root {
    font-size: 0.85em;
    margin: 3px 0 0 4px;
  }
`;

const App = () => {
  const { theme, toggleTheme, themesStyles } = useTheme();

  return (
    <AppProviders theme={themesStyles(theme)}>
      <GlobalStyle />
      <div className="App" data-testid="app">
        <Navigation
          toggleButton={
            <Switch
              checked={customTheme.dark === theme}
              onChange={toggleTheme}
              inputProps={{
                'aria-label': 'enable dark mode',
              }}
              icon={<StyledLightModeIcon />}
              checkedIcon={<StyledDarkModeIcon />}
            />
          }
        />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </AppProviders>
  );
};

export default App;
