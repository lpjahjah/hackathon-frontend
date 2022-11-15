import PropTypes from 'prop-types';

import style from './style.module.css';

const Button = ({ text }) => (
  <button type="submit" className={style.form__button}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
