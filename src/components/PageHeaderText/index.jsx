import PropTypes from 'prop-types';

const PageHeaderText = ({ title, text }) => (
  <div className="container__header__text">
    <div className="container__header__text__description">
      <h1>
        {title}
      </h1>
      <p>
        {text}
      </p>
    </div>
  </div>
);

PageHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageHeaderText;
