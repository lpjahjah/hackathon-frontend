import { useEffect } from 'react';

import HorizontalCardPropTypes from '../../props/HorizontalCardPropTypes';
import style from './style.module.css';

const HorizontalCard = ({ previewData }) => {
  useEffect(() => console.log(previewData), []);

  return (
    <div>
      <div>half left</div>
      <div>half left</div>
    </div>
  );
};

HorizontalCard.propTypes = HorizontalCardPropTypes;

export default HorizontalCard;
