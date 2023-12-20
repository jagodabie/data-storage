import { GlobalStyle } from "./globals/GlobalStyles";
import useTheme from "./hooks/useTheme";
import { AppProviders } from "./providers/AppProviders";

function App() {
  const { theme, toggleTheme, themesStyles } = useTheme();

  return (
    <AppProviders theme={themesStyles(theme)}>
      <GlobalStyle />
      <div className="App" data-testid="app">
        <h1>Hello App </h1>

        <button onClick={toggleTheme}>Switch</button>
      </div>
    </AppProviders>
  );
}

export default App;
