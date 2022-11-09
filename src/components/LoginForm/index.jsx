import { useState } from 'react';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import {
  login, register,
} from '../../api/services/user';
import { useAuth } from '../../contexts/AuthContext';

import Button from '../Button';
import Input from '../Input';
import style from './style.module.css';

const LoginForm = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name: fullName, email, password } = registerData;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setUserData } = useAuth();

  const loginData = {
    email,
    password,
  };

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

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    return pathname === '/login'
      ? login(loginData).then((userData) => {
        setUserData(userData);

        return navigate('/');
      })
      : register(registerData).then(() => navigate('/login'));
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
};

export default LoginForm;
