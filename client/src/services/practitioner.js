import axios from "axios";

const baseUrl = "/api/practitioner";

const getAll = async () => {
  const token = await JSON.parse(window.localStorage.getItem("user"))
    .accessToken;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}`, config);

  return response.data;
};

export const create = async (practitioner) => {
  const token = await JSON.parse(window.localStorage.getItem("user"))
    .accessToken;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.post(`${baseUrl}`, practitioner, config);

  return response.data;
};

const update = async (id, newObject) => {
  const token = await JSON.parse(window.localStorage.getItem("user"))
    .accessToken;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  const response = await request;
  return response.data;
};

const remove = async (id) => {
  const token = await JSON.parse(window.localStorage.getItem("user"))
    .accessToken;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const request = axios.delete(`${baseUrl}/${id}`, config);
  const response = await request;
  return response.data;
};

//eslint-disable-next-line
export default {
  getAll,
  create,
  update,
  remove,
  // setToken,
};
