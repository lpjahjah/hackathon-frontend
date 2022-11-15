import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';
import { useCallback, useState } from 'react';

import Button from './Button';
import Input from './Input';
import style from './style.module.css';

const LoginForm = ({
  state,
  setState,
  onSubmitAction,
  inputs,
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

  const open = Boolean(error);
  const handleClose = () => setError(null);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {inputs.map(generateInputs)}
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

LoginForm.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmitAction: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

LoginForm.defaultProps = {
  children: null,
};

export default LoginForm;
