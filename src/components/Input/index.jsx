import PropTypes from 'prop-types';

const Input = (props) => {
  const { name, label, type, value, onChange } = props;

  return (
    <label htmlFor={name}>
      {label}
      <input id={name} type={type} name={name} value={value} onChange={onChange} />
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
