import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrackContent from '../../assets/TrackContent';
import ListCard from '../../components/ListCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import ContentService from '../../services/ContentService';

const Subtrack = () => {
  const { track, subtrack } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await ContentService.findByTrackAndSubtrack(track, subtrack);

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
      <ListCard
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

      <div className="container__list">
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
