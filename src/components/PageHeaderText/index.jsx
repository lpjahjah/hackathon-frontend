/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const PageHeaderText = ({ title, text, subtitle }) => (
  <div className="container__header__text">
    <div className="container__header__text__description">
      <h1>
        {title}
      </h1>
      {subtitle && (
        <h2 className="container__header__text__description__subtitle">
          {subtitle}
        </h2>
      )}
      <p>
        {text}
      </p>
    </div>
  </div>
);

PageHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeaderText;
