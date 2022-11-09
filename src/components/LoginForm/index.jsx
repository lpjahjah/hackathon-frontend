import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';
import style from './style.module.css';

function LoginForm() {
  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name: fullName, email, password } = login;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const inputs = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      value: fullName,
    },
    {
      name: 'email',
      label: 'Endereço de e-mail',
      type: 'email',
      value: email,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      value: password,
    },
  ];

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    return pathname === '/login' ? navigate('/') : navigate('/login');
  };

  const generateInputs = ({ name, label, type, value }) => (
    <Input
      key={`input-${name}`}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );

  return (
    <form onSubmit={handleSubmit} className={style.loginForm}>
      {pathname === '/login'
        ? inputs.slice(1).map(generateInputs)
        : inputs.map(generateInputs)}
      <Button />
    </form>
  );
}

export default LoginForm;
