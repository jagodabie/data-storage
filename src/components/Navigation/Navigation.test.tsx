import { screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { whiteTheme } from '../../const';
import { render } from '../../test-utils';
import { StyledList, StyledNav } from '.';

describe('Navigation', () => {
  test('renders nav tag correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <StyledNav />
      </ThemeProvider>
    );
    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toBeInTheDocument();
  });
  test('renders ul tag correctly', () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <StyledNav>
          <StyledList open={false} />
        </StyledNav>
      </ThemeProvider>
    );
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
  test('renders li tags correctly', () => {});
});
