import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import relogio from '../../images/relogio1.svg';
import style from './style.module.css';

const TrackCard = (props) => {
  const { title, image, track } = props;
  const navigate = useNavigate();

  const sendToTrack = useCallback(() => {
    navigate(`/track/${track}`);
  }, [track, navigate]);

  return (
    <section className={style.card} onClick={sendToTrack} aria-hidden="true">
      <img src={image} alt="logo" className={style.logo} />
      <div className={style.badge}>
        <h3>{ title }</h3>
        <div className={style.time}>
          <img src={relogio} alt="relogio" className={style.clock} />
          <h4>Tempo estimado: 30 horas</h4>
        </div>
      </div>
    </section>
  );
};

TrackCard.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default TrackCard;
