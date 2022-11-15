import PropTypes from 'prop-types';
import { Select, MenuItem } from '@mui/material';
import style from './style.module.css';
import { inputStyle, placeHolderStyle } from './customStyles';

const SelectItem = ({ options, value, onChange, name, label }) => (
  <label htmlFor={name} className={style['create_content-form__label']}>
    {label}
    <Select name={name} onChange={onChange} value={value} sx={inputStyle}>
      {options.map((option) => (
        <MenuItem key={option} value={option} sx={placeHolderStyle}>{option}</MenuItem>
      ))}
    </Select>
  </label>
);

export default SelectItem;

SelectItem.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
