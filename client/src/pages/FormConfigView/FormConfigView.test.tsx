import React from 'react';
import { render, screen } from '@testing-library/react';
import FormConfigView from './FormConfigView'; // Załóżmy, że ten import jest poprawny

describe('FormConfigView', () => {
  it('renders the heading with correct text', () => {
    render(<FormConfigView />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Configure your form');
  });
});
