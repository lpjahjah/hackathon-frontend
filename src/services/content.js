import axios from '../api/axios';

const URL = 'content';

const findById = async (id) => axios.get(`${URL}/${id}`);

const findByTrackAndSubtrack = async (track, subtrack) => axios.get(`${URL}/${track}/${subtrack}`);

export default {
  findById,
  findByTrackAndSubtrack,
};
