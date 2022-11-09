import { useState } from 'react';
import {
  useLocation, useNavigate,
} from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';
import style from './style.module.css';

const LoginForm = () => {
  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name: fullName, email, password } = login;

  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  return (
    <form onSubmit={handleSubmit}>
      {pathname === '/register' && (
        <Input
          name="name"
          label="Nome"
          type="text"
          value={fullName}
          onChange={handleChange}
        />
      )}
      <Input
        name="email"
        type="email"
        label="Endereço de e-mail"
        value={email}
        onChange={handleChange}
      />
      <Input
        name="password"
        label="Senha"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <Button />
    </form>
  );
};

export default LoginForm;
