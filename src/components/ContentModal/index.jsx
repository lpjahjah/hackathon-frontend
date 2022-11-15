import { ImageAspectRatio } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

import Modal from '../Modal';
import YoutubeVideo from '../YoutubeVideo';
import style from './style.module.css';

const ContentModal = ({ content, open, setOpen }) => {
  const {
    creator,
    duration,
    link,
    name,
    previewData: { description, images, title },
    type,
  } = content;

  const renderImage = useCallback(
    () => (link.startsWith('https://www.youtube.com/watch') ? (
      <YoutubeVideo title={name} url={link} />
    ) : (
      <img alt={name} src={images[0]} />
    )),
    [images, link, name]
  );

  return (
    <Modal title={content ? name : ''} open={open} setOpen={setOpen}>
      {content ? (
        <>
          <div className={style['content-modal__image']}>
            {images[0] !== 'None' && images.length > 0 ? (
              renderImage()
            ) : (
              <ImageAspectRatio className={style.placeholder} />
            )}
          </div>
          <div className={style['content-modal__content']}>
            <div className={style['content-modal__content-item']}>
              <h3 className={style['content-modal__content-description']}>
                {title === 'None' ? '----' : title}
              </h3>
              <br />
              <p className={style['content-modal__content-description']}>
                {description === 'None' ? '----' : description}
              </p>
            </div>

            <div className={style['content-modal__content-inline']}>
              <div className={style['content-modal__content-item']}>
                <h3>Autor</h3>
                <p>{creator}</p>
              </div>

              <div className={style['content-modal__content-item']}>
                <h3>Tipo</h3>
                <p>{type}</p>
              </div>

              <div className={style['content-modal__content-item']}>
                <h3>Duração</h3>
                <p>{duration}</p>
              </div>
            </div>

            <div className={style['content-modal__content-footer']}>
              <a target="_blank" href={link} rel="noreferrer">
                <h3>Ir para o site!</h3>
              </a>
            </div>
          </div>
        </>
      ) : null}
    </Modal>
  );
};

ContentModal.propTypes = {
  content: PropTypes.shape({
    creator: PropTypes.string,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    link: PropTypes.string,
    name: PropTypes.string,
    previewData: PropTypes.shape({
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    }),
    type: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

ContentModal.defaultProps = {
  content: {
    creator: '',
    duration: '' || 0,
    link: '',
    name: '',
    previewData: { description: '', images: [], title: '' },
    type: '',
  },
};

export default ContentModal;
