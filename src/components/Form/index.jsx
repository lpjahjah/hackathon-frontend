import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';
import { useCallback, useState } from 'react';

import Button from './Button';
import Input from './Input';
import Select from './Select';
import style from './style.module.css';

const Form = ({
  state,
  setState,
  onSubmitAction,
  inputs,
  selects,
  buttonText,
  children,
}) => {
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      return onSubmitAction().catch(({ message }) => setError(message));
    },
    [onSubmitAction]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;

      setState({ ...state, [name]: value });
    },
    [setState, state]
  );

  const generateInputs = useCallback(
    ({ name, label, type, value }) => (
      <Input
        key={`${name}-input`}
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={handleChange}
      />
    ),
    [handleChange]
  );

  const generateSelects = useCallback(
    ({ name, label, value, options }) => (
      <Select
        key={`${name}-select`}
        name={name}
        label={label}
        value={value}
        options={options}
        onChange={handleChange}
      />
    ),
    [handleChange]
  );

  const open = Boolean(error);
  const handleClose = () => setError(null);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {inputs.map(generateInputs)}
      {selects && selects.map(generateSelects)}
      <div className={style.form__action}>
        <Button text={buttonText} />
        {children}
      </div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </form>
  );
};

Form.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmitAction: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  selects: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    )
  ),
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Form.defaultProps = {
  selects: [],
  children: null,
};

export default Form;
