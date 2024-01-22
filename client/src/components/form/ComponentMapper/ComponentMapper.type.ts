import { TextFieldVariants } from '@mui/material';
import { Option, fieldType } from '../GenericForm/GenericFrom.types';

export interface FieldBaseProps {
  name: string;
  label?: string;
  variant?: TextFieldVariants;
  value?: unknown;
  // eslint-disable-next-line no-unused-vars
  onChange?: (...event: unknown[]) => void;
}
export interface ComponentMapperProps extends FieldBaseProps {
  type?: fieldType;
  checked?: boolean;
  radiosValues?: string[];
  options?: Option[];
}
