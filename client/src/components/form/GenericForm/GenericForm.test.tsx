import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import GenericForm from './GenericForm';
import { IFormField } from './GenericFrom.types';

describe('GenericForm', () => {
  const config: IFormField[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
    },
  ];
  const setup = (jsx: JSX.Element) => ({
    user: userEvent,
    ...render(jsx),
  });

  it('Renders the form with correct fields', () => {
    const mockSave = jest.fn();
    render(
      <GenericForm config={config} title="Test Form" onSubmit={mockSave} />
    );

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
  });

  it('Calls onSubmit with form data when submit button is clicked', async () => {
    const mockSave = jest.fn();
    const { user } = setup(
      <GenericForm config={config} title="Test Form" onSubmit={mockSave} />
    );

    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' });

    await user.type(firstNameInput, 'Jane');
    await user.type(lastNameInput, 'Davies ');

    expect(firstNameInput).toHaveValue('Jane');
    expect(lastNameInput).toHaveValue('Davies ');

    const submitButton = screen.getByRole('button', { name: 'Save' });
    await user.click(submitButton);

    await waitFor(() =>
      expect(mockSave).toHaveBeenCalledWith({
        firstName: 'Jane',
        lastName: 'Davies ',
      })
    );
  });
});
