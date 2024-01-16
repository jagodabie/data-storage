import { TextFieldVariants } from '@mui/material';

export type fieldType = 'number' | 'text';

export interface FormsElementProps {
  label?: string;
  name?: string;
  variant?: TextFieldVariants;
  type: fieldType;
}
