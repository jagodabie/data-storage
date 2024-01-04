import { screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import user from '@testing-library/user-event';

import { Switch } from '@mui/material';
import { render } from '../../test-utils';
import { whiteTheme } from '../../const';
import Navigation from './Navigation';
import * as useScreenSize from '../../hooks/useScreenSize/useScreenSize';

jest.mock('../../hooks/useScreenSize/useScreenSize');

describe('Navigation mobile value', () => {
  const mockNavigationSetup = (width: number) => {
    const useScreenSizeMock = useScreenSize.default as jest.Mock;
    useScreenSizeMock.mockImplementation(() => ({
      width,
      height: 800,
      isMobile: width <= 768,
    }));

    return render(
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
  };

  describe('Navigation', () => {
    test('should display hamburger icon when width is smaller than 768px', () => {
      mockNavigationSetup(765);
      const hamburgerButton = screen.getByTestId('mobile-menu');
      expect(hamburgerButton).toBeInTheDocument();
    });

    test('should display hamburger icon when width', () => {
      mockNavigationSetup(765);
      const hamburgerButton = screen.getByTestId('mobile-menu');
      expect(hamburgerButton).toBeInTheDocument();
    });
    test('should display hamburger icon when width is larger than 768px', () => {
      mockNavigationSetup(769);
      const hamburgerButton = screen.queryByTestId('mobile-menu');
      expect(hamburgerButton).not.toBeInTheDocument();
    });

    test('Appears X icon when hamburger icon is clicked', async () => {
      mockNavigationSetup(765);
      const hamburgerButton = screen.getByTestId('mobile-menu');
      await user.click(hamburgerButton);
      const closeButton = screen.queryByTestId('close-menu');
      expect(closeButton).toBeInTheDocument();
      await user.click(hamburgerButton);
      expect(closeButton).not.toBeInTheDocument();
    });
    test('pass toggle button to navigation and renders correctly', () => {
      mockNavigationSetup(1024);
      const switchElement = screen.getByRole('checkbox', {
        name: 'enable dark mode test',
      });
      expect(switchElement).toBeInTheDocument();
    });
    test('click on toggle switch button', async () => {
      mockNavigationSetup(1024);
      const switchElement = screen.getByRole('checkbox', {
        name: 'enable dark mode test',
      });
      await user.click(switchElement);
      const backgroundElement = screen.getByRole('navigation');
      const oneTimesClickedStyles = `
        background-color: #rgba(0, 0, 0, 0);
        color: #rgba(64, 64, 64, 0.9)`;
      expect(backgroundElement).toHaveStyle(oneTimesClickedStyles);
    });
    test('renders nav tag correctly', () => {
      mockNavigationSetup(1024);
      const navigationElement = screen.getByRole('navigation');
      expect(navigationElement).toBeInTheDocument();
    });
    test('renders ul tag correctly', () => {
      mockNavigationSetup(1024);
      const listElement = screen.getByRole('list');
      expect(listElement).toBeInTheDocument();
    });
    test('renders li tag correctly', () => {
      mockNavigationSetup(1024);
      const listElement = screen.getByRole('listitem');
      expect(listElement).toBeInTheDocument();
    });
  });
});
