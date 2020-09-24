import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(`This is the token: ${token}`);
  const myRequest = axios.create({
    headers: {
      Authorization: token,
    },
  });
  console.log(`This is the axios request: ${myRequest}`);
  return myRequest;
};
