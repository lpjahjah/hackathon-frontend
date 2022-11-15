import PropTypes from 'prop-types';
import style from './style.modules.css';

const Select = ({ options, value, onChange, name, label }) => (
  <label htmlFor={name} className={style['create-content-form__label']}>
    {label}
    <select name={name} onChange={onChange} value={value}>
      {options.map((option) => <option key={option} value={option} className={style['create-content-input']}>{option}</option>)}
    </select>
  </label>
);

export default Select;

Select.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
