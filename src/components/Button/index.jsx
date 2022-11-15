import PropTypes from 'prop-types';

import style from './style.module.css';

const Button = ({ modifier, text, icon, onClick, formButton }) => (
  <button
    type={formButton ? 'submit' : 'button'}
    className={`${style.button} ${style[modifier]}`}
    onClick={onClick}
  >
    {text}
    {icon}
  </button>
);

Button.propTypes = {
  modifier: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  formButton: PropTypes.bool,
};

Button.defaultProps = {
  modifier: '',
  icon: null,
  onClick: () => {},
  formButton: false,
};

export default Button;
