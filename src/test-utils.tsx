import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';

const defaultTheme = {};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: typeof defaultTheme; // Use the appropriate type for your theme
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  // Create a wrapper that will provide the theme to the components
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <AppProviders theme={options?.theme || defaultTheme}>
        {children}
      </AppProviders>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
