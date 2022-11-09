import PropTypes from 'prop-types';
import {
  createContext,
  useContext,
  useMemo, useState,
} from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  const contextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAuth = () => useContext(AuthContext);

export {
  AuthProvider, useAuth,
};
