import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Input from '../Input';
import Select from '../Select';
import tracksEnum from '../../enums/TracksEnum';
import subTracksEnum from '../../enums/SubtracksEnum';
import { createContent } from '../../services/content';

const CreateContentForm = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    creator: '',
    link: '',
    track: 'fullstack',
    subTrack: 'fundamentals',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData, [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createContent(formData).catch(({ message }) => setError(message));
  };

  const open = Boolean(error);
  const handleClose = () => setError(null);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Título"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        name="type"
        label="Tipo do Conteúdo"
        type="text"
        value={formData.type}
        onChange={handleChange}
      />
      <Input
        name="duration"
        label="Duração"
        type="time"
        value={formData.duration}
        onChange={handleChange}
      />
      <Input
        name="creator"
        label="Criado por"
        type="text"
        value={formData.creator}
        onChange={handleChange}
      />
      <Input
        name="link"
        label="Link:"
        type="url"
        value={formData.link}
        onChange={handleChange}
      />
      <Select
        name="track"
        value={formData.track}
        label="Trilha:"
        onChange={handleChange}
        options={Object.values(tracksEnum)}
      />
      <Select
        name="subTrack"
        value={formData.subTrack}
        label="Subtrilha:"
        onChange={handleChange}
        options={Object.values(subTracksEnum)}
      />
      <button type="submit">Criar Conteúdo</button>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">
          {error}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default CreateContentForm;
