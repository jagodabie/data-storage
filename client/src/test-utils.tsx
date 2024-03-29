import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppProviders from './providers/AppProviders';

const defaultTheme = {};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: typeof defaultTheme; // Use the appropriate type for your theme
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter>
      <AppProviders theme={options?.theme || defaultTheme}>
        {children}
      </AppProviders>
    </MemoryRouter>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
