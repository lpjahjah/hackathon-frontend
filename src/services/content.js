import axios from '../api/axios';

const URL = 'content';

const findById = async (id) => axios.get(`${URL}/${id}`);

const listByTrackAndSubtrack = async (track, subtrack) => axios.get(`${URL}/${track}/${subtrack}`);

export {
  findById,
  listByTrackAndSubtrack,
};
