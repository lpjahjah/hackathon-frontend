import { Close } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useEffect, useCallback, useRef } from 'react';
import './style.css';

const Modal = ({ open, setOpen, title, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (open)
      modalRef.current.classList.toggle('show');
    else
      modalRef.current.classList.remove('show');
  }, [open]);

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div ref={modalRef} className="modal" aria-hidden="true">

      <div className="modal__content">
        <div className="modal__header">
          <h2>{title}</h2>
          <div className="modal__header__close_button" onClick={toggleModal} aria-hidden="true">
            <Close />
          </div>
        </div>

        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: PropTypes.node,
};

export default Modal;
