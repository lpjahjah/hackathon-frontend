import PropTypes from 'prop-types';

const Page = ({ children }) => (<div className="container">{children}</div>);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
