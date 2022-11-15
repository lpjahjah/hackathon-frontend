import { FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import TimeDuration from 'time-duration';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';

import style from './style.module.css';

const ListCard = ({
  id,
  nameHeader,
  name,
  link,
  creator,
  type,
  description,
  duration,
  completed,
  onClick,
  updateCompletion,
  openEditModal,
  setContentToEdit,
}) => {
  const { subtrack, track } = useParams();
  const { currentUser } = useAuth();
  const [checked, setChecked] = useState(completed);
  const { isAdmin } = currentUser;

  const conditionalRenderings = subtrack
    ? ['Autor', creator]
    : ['Assunto', description === 'None' ? '----' : description];

  const handleModalOpening = useCallback(() => {
    openEditModal(true);
    setContentToEdit({
      id,
      name,
      type,
      duration,
      creator,
      link,
      track,
      subTrack: subtrack,
    });
  }, [
    creator,
    duration,
    id,
    link,
    name,
    openEditModal,
    setContentToEdit,
    subtrack,
    track,
    type,
  ]);

  return (
    <>
      <div
        className={`${style['list-card']} ${
          onClick ? 'list-card_clickable' : ''
        }`}
      >
        <div
          onClick={onClick}
          aria-hidden="true"
          className={`${style['list-card-half']} ${style['list-card-header']}`}
        >
          <h1 className={style['list-card-half__header']}>{nameHeader}</h1>
          <h3 data-tip={name} className={style['list-card-half__body']}>
            {name}
          </h3>
        </div>

        <div
          className={`${style['list-card-half']} ${style['list-card-body']}`}
        >
          <div className={style['list-card-body__division_general-info']}>
            <h2 className={style['list-card-half__header']}>
              {conditionalRenderings[0]}
            </h2>
            <p
              data-tip={conditionalRenderings[1]}
              className={style['list-card-half__text']}
            >
              {conditionalRenderings[1]}
            </p>
          </div>

          <div className={style['list-card-body__division_duration']}>
            <h2 className={style['list-card-half__header']}>Duração</h2>
            <p className={style['list-card-half__body']}>
              {duration
                ? `${
                  typeof duration === 'number'
                    ? new TimeDuration(duration).toString()
                    : duration
                }`
                : '----'}
            </p>
          </div>
          {subtrack && isAdmin && (
            <Button
              text="Editar"
              icon={<EditOutlinedIcon fontSize="larger" />}
              onClick={handleModalOpening}
              modifier="button_sm"
            />
          )}
          {subtrack && !isAdmin && (
            <div className={style['list-card-body__division_progress']}>
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
                  <h2 className={style['list-card-half__header']}>
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

ListCard.propTypes = {
  id: PropTypes.string,
  nameHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  creator: PropTypes.string,
  description: PropTypes.string.isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  link: PropTypes.string,
  type: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
  updateCompletion: PropTypes.func,
  openEditModal: PropTypes.func,
  setContentToEdit: PropTypes.func,
};

ListCard.defaultProps = {
  id: '',
  creator: '',
  link: '',
  type: '',
  onClick: () => {},
  completed: false,
  updateCompletion: () => {},
  openEditModal: () => {},
  setContentToEdit: () => {},
};

export default ListCard;
