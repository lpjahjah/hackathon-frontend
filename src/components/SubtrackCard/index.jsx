import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import style from './style.module.css';

const SubtrackCard = ({ nameHeader, name, description, duration }) => (
  <>
    <div className={style['subtrack-card']}>
      <div
        className={`${style['subtrack-card-half']} ${style['subtrack-card-header']}`}
      >
        <h1 className={style['subtrack-card-half__header']}>{nameHeader}</h1>
        <h2 className={style['subtrack-card-half__body']}>{name}</h2>
      </div>

      <div
        className={`${style['subtrack-card-half']} ${style['subtrack-card-body']}`}
      >
        <div className={style['subtrack-card-body__division_60']}>
          <h2 className={style['subtrack-card-half__header']}>Assunto</h2>
          <p
            data-tip={description}
            className={style['subtrack-card-half__text']}
          >
            {description}
          </p>
        </div>

        <div className={style['subtrack-card-body__division_40']}>
          <h2 className={style['subtrack-card-half__header']}>Duração</h2>
          <p className={style['subtrack-card-half__body']}>{duration}</p>
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
  // contentData: PropTypes.objectOf({
  //   creator: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   type: PropTypes.string.isRequired,
  //   images: PropTypes.arrayOf(PropTypes.string),
  // }),
};

export default SubtrackCard;
