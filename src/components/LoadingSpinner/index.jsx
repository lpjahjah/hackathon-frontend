import { ScaleLoader } from 'react-spinners';

import PropTypes from 'prop-types';

const LoadingSpinner = ({ loading }) => (
  <ScaleLoader
    loading={loading}
    color="var(--primary-dark)"
    margin="4px"
  />
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  loading: false,
};

export default LoadingSpinner;
