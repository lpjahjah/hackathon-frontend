import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import usePathname from '../../../utils/hooks/usePathname';
import style from './style.module.css';

const LoginForm = () => {
  const [registerData, setRegisterData] = useState(
    { name: '', email: '', password: '' }
  );
  const [error, setError] = useState(null);

  const { pathname } = useLocation();

  useEffect(
    () => setRegisterData({ name: '', email: '', password: '' }),
    [pathname]
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setRegisterData({ ...registerData, [name]: value });
  };

  const generateInputs = ({ name, label, type, value }) => (
    <Input
      key={`${name}-input`}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );

  const [onSubmitAction, formInputs] = usePathname(registerData, generateInputs);

  const handleSubmit = async (event) => {
    event.preventDefault();

    return onSubmitAction().catch(({ message }) => setError(message));
  };

  const open = Boolean(error);
  const handleClose = () => setError(null);

  return (
    <form onSubmit={handleSubmit} className={style['login-form']}>
      {formInputs}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">
          {error}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default LoginForm;
