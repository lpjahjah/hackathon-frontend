import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackContent from '../../assets/TrackContent';
import SubtrackCard from '../../components/SubtrackCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import { listByTrackAndSubtrack } from '../../services/content';
import style from '../Track/style.module.css';

const Subtrack = () => {
  const { track, subtrack } = useParams();
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
    const { id, type, name, duration, previewData } = item;
    const { title, description } = previewData;

    const formattedName = title === 'None' ? name : title;

    return (
      <SubtrackCard
        key={id}
        nameHeader={type.toUpperCase()}
        name={formattedName}
        duration={duration}
        description={description}
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

      <div className={style['subtrack-cards']}>
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
