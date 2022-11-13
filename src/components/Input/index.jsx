import PropTypes from 'prop-types';

import style from './style.module.css';

const Input = (props) => {
  const { name, label, type, value, onChange } = props;

  return (
    <label htmlFor={name} className={style['login-form__label']}>
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={style['login-form__input']}
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
