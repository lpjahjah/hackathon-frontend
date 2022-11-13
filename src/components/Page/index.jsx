import PropTypes from 'prop-types';
import style from './style.module.css';

const Page = ({ children }) => (
  children
    ? <div className={style.page}>{children}</div>
    : <div className={style.page} />
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
