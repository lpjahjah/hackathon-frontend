import { AddBoxOutlined, EditOutlined } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  createContent,
  listByTrackAndSubtrack,
  updateContent,
} from '../../api/services/content';
import TrackContent from '../../assets/TrackContent';
import Button from '../../components/Button';
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
  const [refreshContent, setRefreshContent] = useState(false);
  const [contentToEdit, setContentToEdit] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    creator: '',
    link: '',
    track,
    subTrack: subtrack,
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
  }, [subtrack, track, refreshContent]);

  const getSubtrackName = useCallback(() => {
    const { name } = TrackContent.find(({ id }) => id === subtrack);

    return name;
  }, [subtrack]);

  const handleOpenModal = useCallback(() => setOpenCreateModal(true), []);

  const clearInputs = useCallback(() => setFormData({
    name: '',
    type: '',
    duration: '',
    creator: '',
    link: '',
    track,
    subTrack: subtrack,
  }), [subtrack, track]);

  const renderContent = useCallback(
    (item) => {
      const { _id, type, name, creator, duration, previewData, link } = item;
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
          link={link}
          type={type}
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
    { name: 'name', label: 'T??tulo', type: 'text', value: formData.name || '' },
    {
      name: 'type',
      label: 'Tipo de Conte??do',
      type: 'text',
      value: formData.type || '',
    },
    {
      name: 'duration',
      label: 'Dura????o',
      type: 'time',
      value: formData.duration || '',
    },
    {
      name: 'creator',
      label: 'Criado por',
      type: 'text',
      value: formData.creator || '',
    },
    { name: 'link', label: 'Link', type: 'url', value: formData.link || '' },
  ];

  const selects = [
    {
      name: 'track',
      label: 'Trilha',
      value: formData.track || track,
      options: Object.values(tracksEnum),
    },
    {
      name: 'subTrack',
      label: 'Subtrilha',
      value: formData.subTrack || subtrack,
      options: Object.values(subtracksEnum),
    },
  ];

  return (
    <Page>
      <div className={style['header-container']}>
        <PageHeaderText
          title={track.toUpperCase()}
          subtitle={getSubtrackName()}
          text="Aqui voc?? tem acesso a v??deos, lives, artigos, apostilas e at??
          cursos gratuitos, al??m desses conte??dos serem da Orange Juice, de parceiros
          e empresas que confiamos. Bons estudos!"
        />
        {isAdmin && (
          <Button
            text="Criar conte??do"
            icon={<AddBoxOutlined fontSize="larger" />}
            onClick={handleOpenModal}
            modifier="button_m"
          />
        )}
      </div>

      <div className={style['list-cards']}>
        {!loading ? (
          content.map(renderContent)
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
        title="Criar Conte??do"
        open={openCreateModal}
        setOpen={setOpenCreateModal}
      >
        <Form
          state={formData}
          setState={setFormData}
          onSubmitAction={async () => {
            await createContent(formData);
            setOpenCreateModal(false);
            clearInputs();
            setRefreshContent((prev) => !prev);
          }}
          inputs={inputs}
          selects={selects}
          buttonModifier="button_m"
          buttonText="Criar"
          buttonIcon={<AddBoxOutlined fontSize="larger" />}
        />
      </Modal>
      <Modal
        title="Editar Conte??do"
        open={openEditModal}
        setOpen={setOpenEditModal}
      >
        <Form
          state={formData}
          setState={setFormData}
          defaultState={contentToEdit}
          onSubmitAction={async () => {
            await updateContent(contentToEdit.id, formData);
            setOpenEditModal(false);
            clearInputs();
            setRefreshContent((prev) => !prev);
          }}
          inputs={inputs}
          selects={selects}
          buttonModifier="button_m"
          buttonText="Editar"
          buttonIcon={<EditOutlined fontSize="larger" />}
        />
      </Modal>
    </Page>
  );
};

export default Subtrack;
