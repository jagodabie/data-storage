import { render, screen } from '@testing-library/react';
import GenericForm from './GenericForm';

describe('GenericForm passing props', () => {
  it(`When title props is given, form's heading renders correctly`, () => {
    render(<GenericForm config={[]} title="Test Title" />);
    expect(
      screen.getByRole('heading', { name: 'Test Title', level: 4 })
    ).toBeInTheDocument();
  });
  it(`When title props is empty string, form's heading does not render`, () => {
    render(<GenericForm config={[]} title="" />);
    expect(
      screen.queryByRole('heading', { name: 'Test Title', level: 4 })
    ).not.toBeInTheDocument();
  });
  it(`When title props is NOT given, form's heading does not render`, () => {
    render(<GenericForm config={[]} />);
    expect(
      screen.queryByRole('heading', { name: 'Test Title', level: 4 })
    ).not.toBeInTheDocument();
  });

  it('When saveButtonLabel aris empty string given, submit button renders correctly with default Save label', async () => {
    render(<GenericForm config={[{}]} title="Test Title" saveButtonLabel="" />);
    const saveButton = screen.getByRole('button', { name: 'Save' });
    expect(saveButton).toBeInTheDocument();
  });
  it('When saveButtonLabel NOT given, submit button renders correctly with default Save label', async () => {
    render(<GenericForm config={[{}]} title="Test Title" />);
    const saveButton = screen.getByRole('button', { name: 'Save' });
    expect(saveButton).toBeInTheDocument();
  });
  it('When saveButtonLabel is  given, submit button renders correctly with  labels value passed', async () => {
    render(
      <GenericForm
        config={[{}]}
        title="Test Title"
        saveButtonLabel="Submit Test"
      />
    );
    const saveButton = screen.getByRole('button', { name: 'Submit Test' });
    expect(saveButton).toBeInTheDocument();
  });
  it('Given config =[], then', async () => {
    render(
      <GenericForm
        config={[]}
        title="Test Title"
        saveButtonLabel="Submit Test"
      />
    );
    const paragraph = screen.getByText('Form not yet configured');
    expect(paragraph).toBeInTheDocument();
  });
});
