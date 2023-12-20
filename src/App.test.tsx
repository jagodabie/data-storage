import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";
import user from "@testing-library/user-event";

describe("App elements displays correctly", () => {
  test("renders header correctly", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });
  test("switch button renders in document", () => {
    render(<App />);
    const switcherButton = screen.getByRole("button", { name: "Switch" });
    expect(switcherButton).toBeInTheDocument();
  });
});

describe("Switch app modes", () => {
  test("switch button change background color", async () => {
    render(<App />);
    const switcherButton = screen.getByRole("button", { name: "Switch" });
    await user.click(switcherButton);
    const backgroundElement = screen.getAllByTestId("app");
    const changedColor = "#rgba(0, 0, 0, 0);";
    expect(backgroundElement[0]).toHaveStyle(
      `background-color: ${changedColor}`
    );

    const doubleChangedColor = "#rgb(255, 255, 255)";
    await user.click(switcherButton);
    expect(backgroundElement[0]).toHaveStyle(
      `background-color: ${doubleChangedColor}`
    );
  });
});
