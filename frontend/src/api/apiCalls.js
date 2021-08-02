import axios from 'axios';

export const signup = body => {
  return axios.post('/api/users', body);
};

export const login = creds => {
  return axios.post('/api/auth', creds);
};

export const logout = () => {
  return axios.post('/api/logout');
}

export const changeLanguage = language => {
  axios.defaults.headers['accept-language'] = language;
};

export const getUsers = (page = 0, size = 3) => {
  return axios.get(`/api/users?page=${page}&size=${size}`);
};

export const setAuthorizationHeader = ({ isLoggedIn, token }) => {
  if (isLoggedIn) {
    const authorizationHeaderValue = `Bearer ${token}`;
    axios.defaults.headers['Authorization'] = authorizationHeaderValue;
  } else {
    delete axios.defaults.headers['Authorization'];
  }
};

export const getUser = username => {
  return axios.get(`/api/users/${username}`);
};

export const getImage = image => {
  return axios.get(`/api/users/${image}`);
};

export const updateUser = (username, body) => {
  return axios.put(`/api/users/${username}`, body);
};

export const deleteUser = username => {
  return axios.delete(`/api/users/${username}`);
};
