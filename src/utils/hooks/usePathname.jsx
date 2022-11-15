import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { login, register } from '../../api/services/user';
import { useAuth } from '../../contexts/AuthContext';

const usePathname = (registerData) => {
  const { setCurrentUser, setCompletedContents } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { name, ...loginData } = registerData;
  const { email, password } = loginData;
  const inputs = [
    { name: 'name', label: 'Nome', type: 'text', value: name },
    { name: 'email', label: 'Endereço de e-mail', type: 'email', value: email },
    { name: 'password', label: 'Senha', type: 'password', value: password },
  ];

  const getUserData = useCallback(async () => {
    try {
      const { completedContents, _v, ...userData } = await login(loginData);

      setCurrentUser(userData);
      setCompletedContents(completedContents);

      return navigate('/');
    } catch ({ response }) {
      throw response.data;
    }
  }, [loginData, navigate, setCompletedContents, setCurrentUser]);

  const postUserData = useCallback(async () => {
    try {
      await register(registerData);

      return navigate('/login');
    } catch ({ response }) {
      throw response.data;
    }
  }, [navigate, registerData]);

  return pathname === '/login'
    ? [
      getUserData,
      inputs.slice(1),
      'Login',
      'Ainda não possui uma conta?',
      'register',
      'Cadastre-se',
    ]
    : [
      postUserData,
      inputs,
      'Cadastrar',
      'Já possui uma conta?',
      'login',
      'Faça Login',
    ];
};

export default usePathname;
