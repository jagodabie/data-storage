import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";
import user from "@testing-library/user-event";

describe("App elements displays correctly", () => {
  test("switch button renders in document", () => {
    render(<App />);
    const switcherButton = screen.getByRole("checkbox", {
      name: "enable dark mode",
    });
    expect(switcherButton).toBeInTheDocument();
  });
});

describe("Switch app modes", () => {
  test("switch button change background color", async () => {
    render(<App />);
    const switcherButton = screen.getByRole("checkbox", {
      name: "enable dark mode",
    });

    await user.click(switcherButton);
    const backgroundElement = screen.getAllByTestId("app");

    const oneTimesClickedStyles = `
      background-color: #rgba(0, 0, 0, 0);
      color: #rgba(64, 64, 64, 0.9)`;

    expect(backgroundElement[0]).toHaveStyle(oneTimesClickedStyles);

    const twoTimesClickedStyles = `
      background-color: #rgb(255, 255, 255)
      color: #rgba(0, 0, 0, 0)`;

    await user.click(switcherButton);
    expect(backgroundElement[0]).toHaveStyle(twoTimesClickedStyles);
  });
});
