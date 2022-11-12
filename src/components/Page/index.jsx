/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  children
    ? <div className="container">{children}</div>
    : <div className="container" />
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
