import PropTypes from 'prop-types';
import relogio from '../../images/relogio1.svg';
import style from './style.module.css';

const TrackCard = (props) => {
  const { title, image } = props;
  return (
    <section className={style.card}>
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

export default TrackCard;

TrackCard.propTypes = {
  title: PropTypes.string,
}.isRequired;
