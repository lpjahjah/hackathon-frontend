import PropTypes from 'prop-types';

import style from './style.module.css';

const Input = (props) => {
  const { name, label, type, value, onChange } = props;

  return (
    <label htmlFor={name} className={style.form__label}>
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={style.form__input}
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
