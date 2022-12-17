import axios from "axios";

const baseUrl = "/api/practitioner";

export const getPractitioners = async () => {
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

//eslint-disable-next-line
