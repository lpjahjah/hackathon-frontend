import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';

import trackContent from '../../assets/TrackContent';
import ListCard from '../../components/ListCard';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import subtracks from '../../enums/SubtracksEnum';
import style from './style.module.css';

const Track = () => {
  const { track } = useParams();
  const navigate = useNavigate();

  const renderCard = useCallback((subtrack) => {
    const { nameHeader, name, description, duration } = trackContent.find(
      ({ id }) => id === subtrack
    );

    return (
      <ListCard
        key={subtrack}
        onClick={() => navigate(`${subtrack}`)}
        nameHeader={nameHeader}
        name={name}
        description={description}
        duration={duration}
      />
    );
  }, [navigate]);

  return (
    <Page>
      <PageHeaderText
        title={track.toUpperCase()}
        text="Nossas trilhas foram montadas pensando em quem está começando na área,
        ou passando por uma migração de carreira e ainda não sabe exatamente o que é
        esse mundo. Então, aperta o cinto e vem com a gente nessa jornada!"
      />
      <div className={style['subtrack-cards']}>
        {Object.values(subtracks).map(
          (subtrack) => renderCard(subtrack)
        )}
      </div>
    </Page>
  );
};

export default Track;
