import { screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { Switch } from '@mui/material';
import { render } from '../../test-utils';
import { whiteTheme } from '../../const';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('pass toggle button to navigation and renders correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );

    const switchElement = screen.getByRole('checkbox', {
      name: 'enable dark mode test',
    });
    expect(switchElement).toBeInTheDocument();
  });
  test('renders button hamburger correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );
    const hamburgerButton = screen.queryByRole('button', {
      name: 'hamburger',
    });
    expect(hamburgerButton).toBeInTheDocument();
  });

  test('when hamburger is clicked, menu list is opened', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );
    const hamburgerButton = screen.queryByRole('button', {
      name: 'hamburger',
    });
    
    expect(hamburgerButton).toBeInTheDocument();
  });
  test('renders nav tag correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );
    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toBeInTheDocument();
  });

  test('renders ul tag correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
  test('renders li tag correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <Navigation
          toggleButton={
            <Switch
              inputProps={{
                'aria-label': 'enable dark mode test',
              }}
            />
          }
        />
      </ThemeProvider>
    );
    const listElement = screen.getByRole('listitem');
    expect(listElement).toBeInTheDocument();
  });
});
