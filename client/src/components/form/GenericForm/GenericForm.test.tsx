import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
    {
      type: 'number',
      label: 'Age',
      name: 'age',
    },
    {
      type: 'checkbox',
      label: 'Accept policy',
      name: 'acceptPolicy',
    },
    {
      // TODO: due that MUI Select(input inside component) is not aria-label friendly, also pass test-id is not possible, i need to find a way to test it.
      type: 'select',
      label: 'Choose sex',
      name: 'sex',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
    },
  ];
  const setup = (jsx: JSX.Element) => ({
    user: userEvent,
    ...render(jsx),
  });

  it('Renders a message when config is an empty array', () => {
    const mockSave = jest.fn();
    render(<GenericForm config={[]} title="Test Form" onSubmit={mockSave} />);

    expect(screen.getByText('Form not yet configured')).toBeInTheDocument();
  });
  it('Renders the title when provided', () => {
    const mockSave = jest.fn();
    render(
      <GenericForm config={config} title="Test Form" onSubmit={mockSave} />
    );
    expect(
      screen.getByRole('heading', { name: 'Test Form' })
    ).toBeInTheDocument();
  });

  it('Renders the form with expected fields', () => {
    const mockSave = jest.fn();
    render(
      <GenericForm config={config} title="Test Form" onSubmit={mockSave} />
    );
    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' });
    const ageInput = screen.getByRole('spinbutton', { name: 'Age' });
    const acceptPolicyCheckbox = screen.getByRole('checkbox', {
      name: 'Accept policy',
    });
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(acceptPolicyCheckbox).toBeInTheDocument();
  });

  it('Calls onSubmit with form data when submit button is clicked', async () => {
    const mockSave = jest.fn();
    const { user } = setup(
      <GenericForm config={config} title="Test Form" onSubmit={mockSave} />
    );

    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' });
    const ageInput = screen.getByRole('spinbutton', { name: 'Age' });
    const acceptPolicyCheckbox = screen.getByRole('checkbox', {
      name: 'Accept policy',
    });

    await user.type(firstNameInput, 'Jane');
    await user.type(lastNameInput, 'Davies ');
    await user.type(ageInput, '20');
    await user.click(acceptPolicyCheckbox);

    expect(firstNameInput).toHaveValue('Jane');
    expect(lastNameInput).toHaveValue('Davies ');
    expect(ageInput).toHaveValue(20);
    expect(acceptPolicyCheckbox).toBeChecked();

    const submitButton = screen.getByRole('button', { name: 'Save' });
    await user.click(submitButton);

    await waitFor(() =>
      expect(mockSave).toHaveBeenCalledWith({
        firstName: 'Jane',
        lastName: 'Davies ',
        age: '20',
        acceptPolicy: true,
        sex: undefined,
      })
    );
  });
});
