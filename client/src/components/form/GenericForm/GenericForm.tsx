import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ComponentMapper from '../ComponentMapper/ComponentMapper';
import { IGenericFormProps } from './GenericFrom.types';
import { FormWrapper, Form } from '.';

const GenericForm: React.FC<IGenericFormProps> = ({
  formConfig: { title, config, saveButtonLabel },
  onSubmit,
}) => {
  const { handleSubmit, control } = useForm();

  return (
    <FormWrapper>
      {config?.length ? (
        <Form onSubmit={handleSubmit(data => onSubmit(data))}>
          {!!title && <h4>{title}</h4>}
          {config?.map((formConfigItem) => (
            <Controller
              key={formConfigItem.name}
              render={({ field: { onChange, value } }) => (
                <ComponentMapper
                  onChange={onChange}
                  value={value || ''}
                  label={formConfigItem.label}
                  name={formConfigItem.name}
                  type={formConfigItem.type ?? ''}
                  multiline={formConfigItem?.multiline}
                  radiosValues={formConfigItem.radiosValues ?? []}
                  options={formConfigItem.options ?? []}
                />
              )}
              name={formConfigItem.name}
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
