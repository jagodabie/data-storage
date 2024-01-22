import React from 'react'; // Add this line
import { useForm, Controller } from 'react-hook-form';
import ComponentMapper from '../ComponentMapper/ComponentMapper';
import { IGenericFormProps } from './GenericFrom.types';

// eslint-disable-next-line no-undef
const GenericForm: React.FC<IGenericFormProps> = ({
  saveButtonLabel = 'Save',
  config,
  title,
  onSubmit,
}) => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="form-wrapper">
      {!!title && <h4>{title}</h4>}
      {config?.length ? (
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          {config.map(configItem => (
            <Controller
              key={configItem.name}
              render={({ field: { onChange, value } }) => (
                <ComponentMapper
                  onChange={onChange}
                  value={value}
                  label={configItem.label}
                  name={configItem.name}
                  type={configItem.type ?? ''}
                  radiosValues={configItem.radiosValues ?? []}
                  options={configItem.options ?? []}
                />
              )}
              name={configItem.name}
              control={control}
            />
          ))}
          <button type="submit">{saveButtonLabel}</button>
        </form>
      ) : (
        <p>Form not yet configured</p>
      )}
    </div>
  );
};

export default GenericForm;
