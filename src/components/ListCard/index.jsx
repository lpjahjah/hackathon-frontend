/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import TimeDuration from 'time-duration';
import style from './style.module.css';

const ListCard = ({ nameHeader, name, description, duration, onClick }) => (
  <>
    <div className={`${style.card} ${onClick ? 'clickable' : ''}`} onClick={onClick} aria-hidden="true">
      <div className={`${style.card__half} ${style.card__half__first_half}`}>
        <h2 className={style.card__half__header}>{nameHeader}</h2>
        <h1
          data-tip={name}
          className={style.card__half__text}
        >
          {name}
        </h1>
      </div>

      <div className={`${style.card__half} ${style.card__half__second_half}`}>
        <div className={style.card__half__second_half__wrap_1}>
          <h2 className={style.card__half__header}>Assunto</h2>
          <p
            data-tip={description === 'None' ? '----' : description}
            className={style.card__half__text__description}
          >
            {description === 'None' ? '----' : description}
          </p>
        </div>

        <div className={style.card__half__second_half__wrap_2}>
          <h2 className={style.card__half__header}>Duração</h2>
          <p className={style.card__half__text}>
            {duration
              ? `${(typeof duration === 'number'
                ? new TimeDuration(duration).toString()
                : duration)}h`
              : '----'}
          </p>
        </div>
      </div>
    </div>
    <ReactTooltip place="left" effect="solid" />
  </>
);

ListCard.propTypes = {
  nameHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func,
  // contentData: PropTypes.objectOf({
  //   creator: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   images: PropTypes.arrayOf(PropTypes.string),
  // }),
};

export default ListCard;
