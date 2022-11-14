/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { ImageAspectRatio } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import Modal from '../Modal';
import YoutubeVideo from '../YoutubeVideo';
import './style.css';

const ContentModal = ({ content, open, setOpen }) => {
  const renderImage = useCallback(() => (
    content.link.startsWith('https://www.youtube.com/watch')
      ? <YoutubeVideo title={content.name} url={content.link} />
      : <img alt={content.name} src={content.previewData.images[0]} />), [content]);

  return (
    <Modal title={content ? content.name : ''} open={open} setOpen={setOpen}>
      {content ? (
        <>
          <div className="content_modal__image">
            {content.previewData.images[0] !== 'None' && content.previewData.images.length > 0
              ? renderImage()
              : <ImageAspectRatio className="placeholder" /> }
          </div>
          <div className="content_modal__content">
            <div className="content_modal__content__item">
              <h3 className="content_modal__content__item__description">{content.previewData.title === 'None' ? '----' : content.previewData.title}</h3>
              <br />
              <p className="content_modal__content__item__description">
                {content.previewData.description === 'None' ? '----' : content.previewData.description}
              </p>
            </div>

            <div className="content_modal__content__item__inline">
              <div className="content_modal__content__item">
                <h3>Criador</h3>
                <p>{content.creator}</p>
              </div>

              <div className="content_modal__content__item">
                <h3>Tipo</h3>
                <p>{content.type}</p>
              </div>

              <div className="content_modal__content__item">
                <h3>Duração</h3>
                <p>{content.duration}</p>
              </div>
            </div>

            <div className="content_modal__content__footer">
              <a target="_blank" href={content.link} rel="noreferrer">
                <h3>Ir para o site!</h3>
              </a>
            </div>
          </div>
        </>
      ) : (<></>)}
    </Modal>
  );
};

ContentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  content: PropTypes.object,
};

export default ContentModal;
