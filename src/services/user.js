import axios from '../api/axios';

const register = async (data) => axios.post('/user', data);

const login = async (data) => axios.post('/login', data).then((json) => json.data);

export {
  login, register,
};
