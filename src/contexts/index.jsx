import PropTypes from 'prop-types';
import { AuthProvider } from './AuthContext';

const Contexts = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
