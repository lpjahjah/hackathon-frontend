/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import style from './style.module.css';

const FormButton = ({ type, onClick, className, icon, title }) => (
  <button type={type} onClick={onClick} className={style[className]}>
    {title}
    {icon}
  </button>
);

export default FormButton;

FormButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
}.isRequired;
