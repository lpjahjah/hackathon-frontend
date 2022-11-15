import axios from '../axios';

const URL = 'content';

const findById = async (id) => axios.get(`${URL}/${id}`);

const listByTrackAndSubtrack = async (track, subtrack) => axios.get(`${URL}/${track}/${subtrack}`);

const createContent = async (body) => axios.post('/content', body);

const updateContent = async (id, body) => axios.put(`/content/:${id}`, body);

export {
  findById,
  listByTrackAndSubtrack,
  createContent,
  updateContent,
};
