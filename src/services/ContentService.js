import axios from '../api/axios';

const url = 'content';

const findById = async (id) => axios.get(`${url}/${id}`);

const findByTrackAndSubtrack = async (track, subtrack) => axios.get(`${url}/${track}/${subtrack}`);

export default {
  findById,
  findByTrackAndSubtrack,
};
