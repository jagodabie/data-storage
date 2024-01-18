import {
  TextField,
  Select,
  Checkbox,
  Radio,
  MenuItem,
  FormControlLabel,
} from '@mui/material';

import { ComponentMapperProps } from './ComponentMapper.type';

const ComponentMapper = ({
  type,
  value,
  name,
  label,
  variant,
  onChange,
}: ComponentMapperProps) => {
  switch (type) {
    case 'number':
      return (
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          label={label}
          variant={variant}
          inputProps={{
            min: 0,
          }}
        />
      );
    case 'text':
      return (
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          name={name}
          label={label}
          variant={variant}
        />
      );
    case 'select':
      return (
        <Select
          value={value}
          onChange={onChange}
          name={name}
          label={label}
          variant={variant}
          defaultValue={value}
        >
          <p>{label}</p>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      );
    case 'checkbox':
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={value as boolean}
              onChange={onChange}
              name={name}
            />
          }
          label={label}
        />
      );
    case 'radio':
      return (
        <FormControlLabel
          control={
            <Radio checked={value as boolean} onChange={onChange} name={name} />
          }
          label={label}
        />
      );
    default:
      return <p>{name}</p>;
  }
};
export default ComponentMapper;
