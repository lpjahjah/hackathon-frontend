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

  return pathname === '/login'
    ? [
      () => login(loginData).then((userData) => {
        setCurrentUser(userData);

        return navigate('/');
      }),
      inputs.slice(1).map(generateInputs),
    ]
    : [
      () => register(registerData).then(navigate('/login')),
      inputs.map(generateInputs),
    ];
}
