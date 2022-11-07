import PropTypes from 'prop-types';
import relogio from '../../images/relogio1.svg';
import style from './style.module.css';

const TrackCard = (props) => {
  const { title } = props;
  return (
    <section className={style.card}>
      <div className={style.badge}>
        <h1>{ title }</h1>
        <div className={style.time}>
          <img src={relogio} alt="relogio" />
          <p>Tempo estimado: 30 horas</p>
        </div>
      </div>
    </section>
  );
};

export default TrackCard;

TrackCard.propTypes = {
  title: PropTypes.string,
}.isRequired;
