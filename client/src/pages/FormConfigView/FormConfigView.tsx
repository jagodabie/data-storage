import GenericForm from '../../components/form/GenericForm';

const FormConfigView = () => (
  <div>
    <h1>Configure your form</h1>
    <div className="content-container">
      <GenericForm
        title="Dev test"
        config={[
          {
            type: 'text',
            label: 'input base',
            variant: 'standard',
            name: 'input-test',
          },
        ]}
      />
    </div>
  </div>
);
export default FormConfigView;
