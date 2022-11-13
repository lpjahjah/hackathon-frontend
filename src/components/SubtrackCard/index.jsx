import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import TimeDuration from 'time-duration';

import style from './style.module.css';

const SubtrackCard = ({ onClick, nameHeader, name, description, duration }) => (
  <>
    <div
      className={`${style['subtrack-card']} ${
        onClick ? 'subtrack-card_clickable' : ''
      }`}
      onClick={onClick}
      aria-hidden="true"
    >
      <div
        className={`${style['subtrack-card-half']} ${style['subtrack-card-header']}`}
      >
        <h1 className={style['subtrack-card-half__header']}>{nameHeader}</h1>
        <h2 data-tip={name} className={style['subtrack-card-half__body']}>
          {name}
        </h2>
      </div>

      <div
        className={`${style['subtrack-card-half']} ${style['subtrack-card-body']}`}
      >
        <div className={style['subtrack-card-body__division_60']}>
          <h2 className={style['subtrack-card-half__header']}>Assunto</h2>
          <p
            data-tip={description === 'None' ? '----' : description}
            className={style['subtrack-card-half__text']}
          >
            {description === 'None' ? '----' : description}
          </p>
        </div>

        <div className={style['subtrack-card-body__division_40']}>
          <h2 className={style['subtrack-card-half__header']}>Duração</h2>
          <p className={style['subtrack-card-half__body']}>
            {duration
              ? `${
                typeof duration === 'number'
                  ? new TimeDuration(duration).toString()
                  : duration
              }h`
              : '----'}
          </p>
        </div>
      </div>
    </div>
    <ReactTooltip place="left" effect="solid" />
  </>
);

SubtrackCard.propTypes = {
  nameHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  // contentData: PropTypes.objectOf({
  //   creator: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   type: PropTypes.string.isRequired,
  //   images: PropTypes.arrayOf(PropTypes.string),
  // }),
};

SubtrackCard.defaultProps = {
  onClick: () => {},
};

export default SubtrackCard;
