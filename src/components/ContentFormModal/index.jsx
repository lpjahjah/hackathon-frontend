/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Modal from '../Modal';

const ContentFormModal = ({ content, open, setOpen, title }) => (
  <Modal title={title} open={open} setOpen={setOpen}>
    {content}
  </Modal>
);

ContentFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  content: PropTypes.object,
  title: PropTypes.string,
};

export default ContentFormModal;
