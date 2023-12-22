import { screen } from "@testing-library/react";

import { StyledList, StyledNav } from ".";
import { ThemeProvider } from "styled-components";
import { whiteTheme } from "../../const";
import { render } from "../../test-utils";
describe("Navigation", () => {
  test("renders nav tag correctly", () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <StyledNav />
      </ThemeProvider>
    );
    const navigationElement = screen.getByRole("navigation");
    expect(navigationElement).toBeInTheDocument();
  });
  test("renders ul tag correctly", () => {
    render(
      <ThemeProvider theme={whiteTheme}>
        <StyledNav>
          <StyledList open={false}></StyledList>
        </StyledNav>
      </ThemeProvider>
    );
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders li tags correctly", () => {});
});
