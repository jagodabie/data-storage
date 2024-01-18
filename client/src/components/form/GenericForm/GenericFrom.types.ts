import { TextFieldVariants } from '@mui/material';

export type fieldType =
  | 'number'
  | 'text'
  | 'select'
  | 'checkbox'
  | 'radio'
  | '';

export interface FormsElementProps {
  label?: string;
  name?: string;
  variant?: TextFieldVariants;
  type: fieldType;
}

export interface IFormField {
  name: string;
  type?: fieldType;
  variant?: string;
  label?: string;
}
export interface IGenericFormProps {
  config: IFormField[];
  title?: string;
  saveButtonLabel?: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: unknown) => void;
}
