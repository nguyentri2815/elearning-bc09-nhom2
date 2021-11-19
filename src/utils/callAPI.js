import { api } from "./config";
import {
  TokenCybersoft,
   Token
} from "./config";
import Axios from "axios";
export const callApi = async (url, method = "GET", data, params = null) => {
  return await Axios({
    url: api + "/" + url,
    method,
    data,
    headers: {
      TokenCybersoft,
      Authorization: "Bearer " + localStorage.getItem(Token),
    },
    params,
  });
};

export const callApiAttachToken = async (
  url,
  method = "POST",
  data,
  token = null
) => {
  return await Axios({
    url: api + "/" + url,
    method,
    data,
    headers: {
      TokenCybersoft,
      Authorization: "Bearer " + token,
    },
  });
};
