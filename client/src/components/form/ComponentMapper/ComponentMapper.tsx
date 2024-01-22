import {
  TextField,
  Select,
  Checkbox,
  Radio,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  InputLabel,
  FormControl,
} from '@mui/material';

import { ComponentMapperProps } from './ComponentMapper.type';

const ComponentMapper = ({
  type,
  value,
  name,
  label,
  variant,
  onChange,
  radiosValues,
  options,
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
        <FormControl>
          <InputLabel>test test</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            name={name}
            label={label}
            variant={variant}
          >
            {options?.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case 'checkbox':
      return (
        <FormControlLabel
          control={
            <Checkbox checked={!!value} onChange={onChange} name={name} />
          }
          label={label}
        />
      );
    case 'radio':
      return (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup name={name}>
            {radiosValues?.map(radioValue => (
              <FormControlLabel
                key={radioValue}
                value={radioValue}
                control={<Radio />}
                label={radioValue}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    default:
      return <p aria-label={name}>{name}</p>;
  }
};
export default ComponentMapper;
