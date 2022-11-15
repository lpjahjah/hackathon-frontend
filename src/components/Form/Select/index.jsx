import PropTypes from 'prop-types';
import { Select as MUISelect, MenuItem } from '@mui/material';
import style from '../Input/style.module.css';
import { inputStyle, placeHolderStyle } from './customStyles';

const Select = ({ options, value, onChange, name, label }) => (
  <label htmlFor={name} className={style.form__label}>
    {label}
    <MUISelect name={name} onChange={onChange} value={value} sx={inputStyle}>
      {options.map((option) => (
        <MenuItem key={option} value={option} sx={placeHolderStyle}>{option}</MenuItem>
      ))}
    </MUISelect>
  </label>
);

export default Select;

Select.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
