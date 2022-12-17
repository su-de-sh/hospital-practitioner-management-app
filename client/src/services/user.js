import axios from "axios";

const baseUrl = "/api/users";

export const signUp = async (email, password) => {
  const response = await axios.post(`${baseUrl}/signup`, {
    email,
    password,
  });
  return response.data;
};
export const signIn = async (email, password) => {
  const response = await axios.post(`${baseUrl}/signin`, {
    email,
    password,
  });
  return response.data;
};
//eslint-disable-next-line
