import axios from '../axios';

const register = async (data) => axios.post('/user', data);

const login = async (data) => axios.post('/login', data).then((json) => json.data);

const toggleCompletedContents = async (userId, contentId) => axios.patch(`/user/${userId}/${contentId}`).then((json) => json.data);

export {
  login, register, toggleCompletedContents,
};
