import GenericForm from '../../components/form/GenericForm/GenericForm';

const FormConfigView = () => (
  <div>
    <h1>Configure your form</h1>
    <div className="content-container">
      <GenericForm
        title="Dev test"
        // TODO: remove config test purpose only
        // eslint-disable-next-line no-console
        onSubmit={data => console.log('submit', data)}
        config={[
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
          },
        ]}
      />
    </div>
  </div>
);
export default FormConfigView;
