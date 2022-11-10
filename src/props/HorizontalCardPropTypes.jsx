import PropTypes from 'prop-types';

export default {
  previewData: PropTypes.objectOf({
    title: PropTypes.string.isRequired(),
    description: PropTypes.string.isRequired(),
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired(),
};
