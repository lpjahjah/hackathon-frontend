import { FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import TimeDuration from 'time-duration';

import style from './style.module.css';

const SubtrackCard = ({
  onClick,
  nameHeader,
  name,
  description,
  duration,
  completed,
  updateCompletion,
}) => {
  const { subtrack } = useParams();
  const [checked, setChecked] = useState(completed);

  return (
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
          <h3 data-tip={name} className={style['subtrack-card-half__body']}>
            {name}
          </h3>
        </div>

        <div
          className={`${style['subtrack-card-half']} ${style['subtrack-card-body']}`}
        >
          <div className={style['subtrack-card-body__division_subject']}>
            <h2 className={style['subtrack-card-half__header']}>Assunto</h2>
            <p
              data-tip={description === 'None' ? '----' : description}
              className={style['subtrack-card-half__text']}
            >
              {description === 'None' ? '----' : description}
            </p>
          </div>

          <div className={style['subtrack-card-body__division_duration']}>
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
          {subtrack && (
            <div className={style['subtrack-card-body__division_progress']}>
              <FormControlLabel
                control={(
                  <Switch
                    checked={checked}
                    onChange={async ({ target }) => {
                      setChecked(target.checked);
                      await updateCompletion();
                    }}
                    color="success"
                  />
                )}
                label={(
                  <h2 className={style['subtrack-card-half__header']}>
                    Concluído?
                  </h2>
                )}
                labelPlacement="top"
              />
            </div>
          )}
        </div>
      </div>
      <ReactTooltip place="left" effect="solid" />
    </>
  );
};

SubtrackCard.propTypes = {
  nameHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  updateCompletion: PropTypes.func,
  // contentData: PropTypes.objectOf({
  //   creator: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   type: PropTypes.string.isRequired,
  //   images: PropTypes.arrayOf(PropTypes.string),
  // }),
};

SubtrackCard.defaultProps = {
  onClick: () => {},
  completed: false,
  updateCompletion: () => {},
};

export default SubtrackCard;
