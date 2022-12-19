import axios from "axios";

const baseUrl = "/api/practitioner";

const getAll = async () => {
  const token = JSON.parse(window.localStorage.getItem("user"));

  const config = {
    headers: {
      Authorization: `bearer ${token?.accessToken}`,
    },
  };
  const response = await axios.get(`${baseUrl}`, config);

  return response.data;
};

export const create = async (practitioner) => {
  const token = JSON.parse(window.localStorage.getItem("user"));

  const config = {
    headers: {
      Authorization: `bearer ${token?.accessToken}`,
    },
  };
  const response = await axios.post(`${baseUrl}`, practitioner, config);

  return response.data;
};

const update = async (id, newObject) => {
  const token = JSON.parse(window.localStorage.getItem("user"))?.accessToken;

  const config = {
    headers: {
      Authorization: `bearer ${token?.accessToken}`,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  const response = await request;
  return response.data;
};

const remove = async (id) => {
  const token = JSON.parse(window.localStorage.getItem("user"));
  const config = {
    headers: {
      Authorization: `bearer ${token?.accessToken}`,
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
