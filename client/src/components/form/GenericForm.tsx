import { useForm } from 'react-hook-form';

interface IGenericFormProps {
  // TODO: create type when it will be known
  config: unknown[];
  title?: string;
  saveButtonLabel?: string;
}
// TODO: implement submit function
const onSubmit = (data: unknown) => console.log(data);

// eslint-disable-next-line no-undef
const GenericForm: React.FC<IGenericFormProps> = ({
  saveButtonLabel,
  config,
  title,
}) => {
  const { handleSubmit } = useForm();

  return (
    <div className="form-wrapper">
      {!!title && <h4>{title}</h4>}
      {config?.length ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">{saveButtonLabel || 'Save'}</button>
        </form>
      ) : (
        <p>Form not yet configured</p>
      )}
    </div>
  );
};

export default GenericForm;
