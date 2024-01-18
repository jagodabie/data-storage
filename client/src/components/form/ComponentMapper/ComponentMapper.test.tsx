import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentMapper from './ComponentMapper';

describe('ComponentMapper Component', () => {
  const testString = 'dfsdfsdfsdffgdfgdfgfdgdfgdfgdgfdgdgdfgffsdfsdfsdfsdffdg';

  it('renders a number input when type is number', () => {
    render(
      <ComponentMapper type="number" name="nameTest" label="Test Label" />
    );
    const numberInput = screen.getByLabelText('Test Label');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveAttribute('type', 'number');
  });

  it('renders a text input when type is text', () => {
    render(<ComponentMapper type="text" name="nameTest" label="Test Label" />);

    const textInput = screen.getByLabelText('Test Label');
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute('type', 'text');
  });

  it('renders a select input when type is select', () => {
    render(
      <ComponentMapper type="select" name="nameTest" label="Test Label" />
    );

    const selectInput = screen.getByText('Test Label');
    expect(selectInput).toBeInTheDocument();
  });

  it('renders a checkbox input when type is checkbox', () => {
    render(
      <ComponentMapper type="checkbox" name="nameTest" label="Test Label" />
    );

    const checkboxInput = screen.getByText('Test Label');
    expect(checkboxInput).toBeInTheDocument();
  });

  it('renders a radio input when type is radio', () => {
    render(<ComponentMapper type="radio" name="nameTest" label="Test Label" />);

    const radioInput = screen.getByText('Test Label');
    expect(radioInput).toBeInTheDocument();
  });

  it('renders a p element when type is empty', () => {
    render(<ComponentMapper name="nameTest" label="Test Label" />);
    const pElement = screen.getByText('nameTest');
    expect(pElement).toBeInTheDocument();
    expect(pElement.tagName).toBe('P');
  });

  it('updates the value of the input when typing', () => {
    render(<ComponentMapper type="text" name="nameTest" label="Test Label" />);

    const textInput = screen.getByLabelText('Test Label');
    expect(textInput).toBeInTheDocument();

    userEvent.type(textInput, testString);
    expect(textInput).toHaveValue(testString);
  });

  it('calls the onChange function when the input value changes', () => {
    const onChange = jest.fn();
    render(
      <ComponentMapper
        type="text"
        name="nameTest"
        label="Test Label"
        onChange={onChange}
      />
    );

    const textInput = screen.getByLabelText('Test Label');
    expect(textInput).toBeInTheDocument();

    userEvent.type(textInput, testString);
    expect(onChange).toHaveBeenCalledTimes(testString.length);
  });
});
