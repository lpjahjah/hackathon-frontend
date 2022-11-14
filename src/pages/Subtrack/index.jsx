import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackContent from '../../assets/TrackContent';
import ListCard from '../../components/ListCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import { listByTrackAndSubtrack } from '../../services/content';
import style from '../Track/style.module.css';
import { useAuth } from '../../contexts/AuthContext';

const Subtrack = () => {
  const { track, subtrack } = useParams();
  const { completedContents, updateCompletedContents } = useAuth();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await listByTrackAndSubtrack(track, subtrack);

      setContent(data);
      setLoading(false);
    };

    fetch();
  }, []);

  const getSubtrackName = useCallback(() => {
    const { name } = TrackContent.find(
      ({ id }) => id === subtrack
    );

    return name;
  }, [subtrack]);

  const renderContent = useCallback((item) => {
    const { _id, type, name, duration, previewData } = item;
    const { title, description } = previewData;

    const formattedName = title === 'None' ? name : title;

    return (
      <ListCard
        key={_id}
        nameHeader={type.toUpperCase()}
        name={formattedName}
        duration={duration}
        description={description}
        completed={completedContents.includes(_id)}
        updateCompletion={async () => updateCompletedContents(_id)}
      />
    );
  }, []);

  return (
    <Page>
      <PageHeaderText
        title={track.toUpperCase()}
        subtitle={getSubtrackName()}
        text="Aqui você tem acesso a vídeos, lives, artigos, apostilas e até
        cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros
        e empresas que confiamos. Bons estudos!"
      />

      <div className={style['list-cards']}>
        {!loading
          ? content.map((item) => renderContent(item))
          : (
            <LoadingSpinner />
          )}
      </div>
    </Page>
  );
};

export default Subtrack;
