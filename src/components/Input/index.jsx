import PropTypes from 'prop-types';

import style from './style.module.css';

const Input = (props) => {
  const { name, label, type, value, onChange } = props;

  return (
    <label htmlFor={name} className={style.inputArea}>
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={style.inputElement}
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
