import { TextFieldVariants } from '@mui/material';

export type fieldType =
  | 'number'
  | 'text'
  | 'select'
  | 'checkbox'
  | 'radio'
  | '';
export interface Option {
  value: string;
  label: string;
}

export interface FormsElementProps {
  label?: string;
  name?: string;
  variant?: TextFieldVariants;
  type: fieldType;
}

export interface IFormField {
  title?: string;
  saveButtonLabel?: string;
  config:{
    name: string;
    type?: fieldType;
    variant?: string;
    label?: string;
    radiosValues?: string[];
    options?: Option[];
    multiline?: boolean;
  }[];
}
export interface IGenericFormProps {
  formConfig: IFormField;
    // eslint-disable-next-line no-unused-vars
  onSubmit: (data: unknown) => void;
}
