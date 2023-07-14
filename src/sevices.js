import axios from "./interceptor";
const baseURL = "https://web-vinci-python-qa.azurewebsites.net";

export function login(data) {
  return axios({
    method: "POST",
    url: `${baseURL}/accountsapi/user/login/`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      return response.data;
    })
    .catch(function (response) {
      //handle error
      return Promise.reject(response);
    });
}
