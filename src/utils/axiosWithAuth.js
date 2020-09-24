import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(`This is the token: ${token}`);

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
