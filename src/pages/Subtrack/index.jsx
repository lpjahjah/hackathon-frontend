import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  createContent,
  listByTrackAndSubtrack,
  updateContent,
} from '../../api/services/content';
import TrackContent from '../../assets/TrackContent';
import ContentModal from '../../components/ContentModal';
import Form from '../../components/Form';
import ListCard from '../../components/ListCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Modal from '../../components/Modal';
import Page from '../../components/Page';
import PageHeaderText from '../../components/PageHeaderText';
import { useAuth } from '../../contexts/AuthContext';
import subtracksEnum from '../../enums/SubtracksEnum';
import tracksEnum from '../../enums/TracksEnum';
import style from '../Track/style.module.css';

const Subtrack = () => {
  const { track, subtrack } = useParams();
  const { completedContents, updateCompletedContents, currentUser } = useAuth();
  const [content, setContent] = useState([]);
  const [selectedContent, setSelectedContent] = useState();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [contentToEdit, setContentToEdit] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    creator: '',
    link: '',
    track: 'fullstack',
    subTrack: 'fundamentals',
  });
  const { isAdmin } = currentUser;

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await listByTrackAndSubtrack(track, subtrack);

      setContent(data);
      setLoading(false);
    };

    fetch();
  }, [subtrack, track]);

  const getSubtrackName = useCallback(() => {
    const { name } = TrackContent.find(({ id }) => id === subtrack);

    return name;
  }, [subtrack]);

  const renderContent = useCallback(
    (item) => {
      const { _id, type, name, creator, duration, previewData } = item;
      const { title, description } = previewData;

      const formattedName = title === 'None' ? name : title;

      return (
        <ListCard
          key={`${_id}-card`}
          id={_id}
          nameHeader={type.toUpperCase()}
          name={formattedName}
          creator={creator}
          description={description}
          duration={duration}
          completed={completedContents.includes(_id)}
          onClick={() => {
            setSelectedContent(item);
            setOpenModal(true);
          }}
          updateCompletion={async () => updateCompletedContents(_id)}
          openEditModal={setOpenEditModal}
          setContentToEdit={setContentToEdit}
        />
      );
    },
    [completedContents, updateCompletedContents]
  );

  const inputs = [
    { name: 'name', label: 'Título', type: 'text', value: formData.name },
    {
      name: 'type',
      label: 'Tipo de Conteúdo',
      type: 'text',
      value: formData.type,
    },
    {
      name: 'duration',
      label: 'Duração',
      type: 'time',
      value: formData.duration,
    },
    {
      name: 'creator',
      label: 'Criado por',
      type: 'text',
      value: formData.creator,
    },
    { name: 'link', label: 'Link', type: 'url', value: formData.link },
  ];

  const selects = [
    {
      name: 'track',
      label: 'Trilha',
      value: formData.track,
      options: Object.values(tracksEnum),
    },
    {
      name: 'subTrack',
      label: 'Subtrilha',
      value: formData.subTrack,
      options: Object.values(subtracksEnum),
    },
  ];

  return (
    <Page>
      <PageHeaderText
        title={track.toUpperCase()}
        subtitle={getSubtrackName()}
        text="Aqui você tem acesso a vídeos, lives, artigos, apostilas e até
        cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros
        e empresas que confiamos. Bons estudos!"
      />
      {isAdmin && (
        <button type="button" onClick={() => setOpenCreateModal(true)}>
          Criar Conteúdo
        </button>
      )}

      <div className={style['list-cards']}>
        {!loading ? (
          content.map((item) => renderContent(item))
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <ContentModal
        content={selectedContent}
        open={openModal}
        setOpen={setOpenModal}
      />
      <Modal
        title="Criar Conteúdo"
        open={openCreateModal}
        setOpen={setOpenCreateModal}
      >
        <Form
          state={formData}
          setState={setFormData}
          onSubmitAction={async () => createContent(formData)}
          inputs={inputs}
          selects={selects}
          buttonText="Criar"
        />
      </Modal>
      <Modal
        title="Editar Conteúdo"
        open={openEditModal}
        setOpen={setOpenEditModal}
      >
        <Form
          state={formData}
          setState={setFormData}
          onSubmitAction={async () => updateContent(contentToEdit, formData)}
          inputs={inputs}
          selects={selects}
          buttonText="Editar"
        />
      </Modal>
    </Page>
  );
};

export default Subtrack;
