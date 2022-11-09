import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function useCurrentUser() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => !currentUser.email && navigate('login'), []);
}
