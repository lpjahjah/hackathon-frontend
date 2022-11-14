import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';
import { toggleCompletedContents } from '../services/user';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
    isAdmin: false,
  });

  const [completedContents, setCompletedContents] = useState([]);

  const updateCompletedContents = async (contentId) => {
    const { _id: userId } = currentUser;

    const updatedContents = await toggleCompletedContents(userId, contentId);

    setCompletedContents(updatedContents);
  };

  const contextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      completedContents,
      setCompletedContents,
      updateCompletedContents,
    }),
    [
      currentUser,
      setCurrentUser,
      completedContents,
      setCompletedContents,
      updateCompletedContents,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
