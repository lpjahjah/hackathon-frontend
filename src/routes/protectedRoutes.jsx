import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  return !currentUser.email ? <Navigate to="/login" /> : children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
