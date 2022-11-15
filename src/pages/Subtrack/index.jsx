import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AddBoxOutlined } from '@mui/icons-material';
import TrackContent from '../../assets/TrackContent';
import ContentModal from '../../components/ContentModal';
import ListCard from '../../components/ListCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import { listByTrackAndSubtrack } from '../../services/content';
import style from '../Track/style.module.css';
import { useAuth } from '../../contexts/AuthContext';
import ContentFormModal from '../../components/ContentFormModal';
import CreateContentForm from '../../components/CreateContentForm';
import EditContentForm from '../../components/EditContentForm';
import FormButton from '../../components/FormButton';

const Subtrack = () => {
  const { track, subtrack } = useParams();
  const { completedContents, updateCompletedContents, currentUser } = useAuth();
  const [content, setContent] = useState([]);
  const [selectedContent, setSelectedContent] = useState();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [refreshContent, setRefreshContent] = useState(false);
  const [contentToEdit, setContentToEdit] = useState({});

  const { isAdmin } = currentUser;

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await listByTrackAndSubtrack(track, subtrack);

      setContent(data);
      setLoading(false);
    };

    fetch();
  }, [refreshContent]);

  const getSubtrackName = useCallback(() => {
    const { name } = TrackContent.find(
      ({ id }) => id === subtrack
    );

    return name;
  }, [subtrack]);

  const renderContent = useCallback((item) => {
    const { _id, type, name, creator, duration, previewData, link } = item;
    const { title, description } = previewData;

    const formattedName = title === 'None' ? name : title;

    return (
      <ListCard
        key={_id}
        onClick={() => { setSelectedContent(item); setOpenModal(true); }}
        nameHeader={type.toUpperCase()}
        name={formattedName}
        creator={creator}
        duration={duration}
        description={description}
        id={_id}
        link={link}
        type={type}
        completed={completedContents.includes(_id)}
        updateCompletion={async () => updateCompletedContents(_id)}
        openEditModal={setOpenEditModal}
        setContentToEdit={setContentToEdit}
      />
    );
  }, []);

  return (
    <Page>
      <div className={style['header-container']}>
        <PageHeaderText
          title={track.toUpperCase()}
          subtitle={getSubtrackName()}
          text="Aqui você tem acesso a vídeos, lives, artigos, apostilas e até
          cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros
          e empresas que confiamos. Bons estudos!"
        />
        {isAdmin && (
        <FormButton
          type="button"
          title="Criar conteúdo"
          icon={<AddBoxOutlined fontSize="larger" />}
          onClick={() => setOpenCreateModal(true)}
          className="create-content__button"
        />
        )}
      </div>

      <div className={style['list-cards']}>
        {!loading
          ? content.map((item) => renderContent(item))
          : (
            <LoadingSpinner />
          )}
      </div>
      <ContentModal content={selectedContent} open={openModal} setOpen={setOpenModal} />
      <ContentFormModal
        content={<CreateContentForm refresh={setRefreshContent} setOpen={setOpenCreateModal} />}
        title="Criar Conteúdo"
        open={openCreateModal}
        setOpen={setOpenCreateModal}
      />
      <ContentFormModal
        content={(
          <EditContentForm
            defaultState={contentToEdit}
            setOpen={setOpenEditModal}
            refresh={setRefreshContent}
          />
        )}
        title="Editar Conteúdo"
        open={openEditModal}
        setOpen={setOpenEditModal}
      />
    </Page>
  );
};

export default Subtrack;
