import GenericForm from '../../components/form/GenericForm/GenericForm';

const FormConfigView = () => (
  <GenericForm
    title="Configure your form"
    // TODO: remove config test purpose only
    // eslint-disable-next-line no-console
    onSubmit={data => console.log('submit', data)}
    config={[
      {
        type: 'text',
        label: 'input multiline',
        variant: 'standard',
        name: 'input-multiline',
        multiline: true,
      },
      {
        type: 'text',
        label: 'input base',
        variant: 'standard',
        name: 'input-test',
      },
      {
        type: 'number',
        label: 'input number base',
        variant: 'standard',
        name: 'input-test-number',
      },
      {
        type: 'select',
        label: 'Select base',
        variant: 'standard',
        name: 'select-test',
        options: [
          { label: 'None', value: '' },
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ],
      },
      {
        type: 'checkbox',
        label: 'checkbox',
        name: 'checkbox-test',
      },
      {
        type: 'radio',
        label: 'radio',
        name: 'radio-test',
        radiosValues: ['Option 1', 'Option 2', 'Option 3'],
      },
    ]}
  />
);
export default FormConfigView;
