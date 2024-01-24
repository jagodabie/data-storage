import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ComponentMapper from '../ComponentMapper/ComponentMapper';
import { IGenericFormProps } from './GenericFrom.types';
import { FormWrapper, Form } from '.';

const GenericForm: React.FC<IGenericFormProps> = ({
  saveButtonLabel = 'Save',
  config,
  title,
  onSubmit,
}) => {
  const { handleSubmit, control } = useForm();

  return (
    <FormWrapper>
      {config?.length ? (
        <Form onSubmit={handleSubmit(data => onSubmit(data))}>
          {!!title && <h4>{title}</h4>}
          {config.map(configItem => (
            <Controller
              key={configItem.name}
              render={({ field: { onChange, value } }) => (
                <ComponentMapper
                  onChange={onChange}
                  value={value || ''}
                  label={configItem.label}
                  name={configItem.name}
                  type={configItem.type ?? ''}
                  multiline={configItem?.multiline}
                  radiosValues={configItem.radiosValues ?? []}
                  options={configItem.options ?? []}
                />
              )}
              name={configItem.name}
              control={control}
            />
          ))}

          <button type="submit">{saveButtonLabel}</button>
        </Form>
      ) : (
        <p aria-label="Form not yet configured">Form not yet configured</p>
      )}
    </FormWrapper>
  );
};

export default GenericForm;
