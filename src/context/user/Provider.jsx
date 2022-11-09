import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import UserContext from './Context';

export default function Provider({ children }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  const contextValue = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
