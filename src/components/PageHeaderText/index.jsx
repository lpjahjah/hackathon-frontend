import PropTypes from 'prop-types';

import style from './style.module.css';

const PageHeaderText = ({ title, subtitle, text }) => (
  <header className={style.header}>
    <h1>{title}</h1>
    {subtitle && (<h2 className={style.header__subtitle}>{subtitle}</h2>)}
    <p className={style.header__text}>{text}</p>
  </header>
);

PageHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageHeaderText.defaultProps = {
  subtitle: '',
};

export default PageHeaderText;
