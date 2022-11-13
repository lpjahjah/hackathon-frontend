import PropTypes from 'prop-types';

import style from './style.module.css';

const PageHeaderText = ({ title, text }) => (
  <header className={style.header}>
    <h1>{title}</h1>
    <p className={style.header__text}>{text}</p>
  </header>
);

PageHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageHeaderText;
