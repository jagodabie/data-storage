import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { render } from './test-utils';
import App from './App';

describe('App elements displays correctly', () => {
  test('Switcher renders in document', () => {
    render(<App />);
    const switcherButton = screen.getByRole('checkbox', {
      name: 'enable dark mode',
    });
    expect(switcherButton).toBeInTheDocument();
  });
});

describe('Switch app modes', () => {
  test('Switcher change background color', async () => {
    render(<App />);
    const switcherButton = screen.getByRole('checkbox', {
      name: 'enable dark mode',
    });

    await user.click(switcherButton);
    const backgroundElement = screen.getByTestId('app');

    const oneTimesClickedStyles = `
      background-color: #rgba(0, 0, 0, 0);
      color: #rgba(64, 64, 64, 0.9)`;

    expect(backgroundElement).toHaveStyle(oneTimesClickedStyles);

    const twoTimesClickedStyles = `
      background-color: #rgb(255, 255, 255)
      color: #rgba(0, 0, 0, 0)`;

    await user.click(switcherButton);
    expect(backgroundElement).toHaveStyle(twoTimesClickedStyles);
  });
});
