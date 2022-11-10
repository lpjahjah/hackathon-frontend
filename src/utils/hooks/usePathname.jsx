import { useLocation, useNavigate } from 'react-router-dom';

import { login, register } from '../../api/services/user';
import { useAuth } from '../../contexts/AuthContext';

export default function usePathname(registerData, generateInputs) {
  const { setCurrentUser } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { name, ...loginData } = registerData;
  const { email, password } = loginData;

  const inputs = [
    { name: 'name', label: 'Nome', type: 'text', value: name },
    { name: 'email', label: 'Endereço de e-mail', type: 'email', value: email },
    { name: 'password', label: 'Senha', type: 'password', value: password },
  ];

  const getUserData = async () => {
    try {
      const userData = await login(loginData);

      setCurrentUser(userData);

      return navigate('/');
    } catch ({ response }) {
      throw response.data;
    }
  };

  const postUserData = async () => {
    try {
      await register(registerData);

      return navigate('/login');
    } catch ({ response }) {
      throw response.data;
    }
  };

  return pathname === '/login'
    ? [getUserData, inputs.slice(1).map(generateInputs)]
    : [postUserData, inputs.map(generateInputs)];
}
