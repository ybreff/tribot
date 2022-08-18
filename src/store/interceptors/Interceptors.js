import Axios from 'axios';
// import promise from 'promise';
import { getTokenLocalStorange } from '../services/StorageServices';
import { actionSetResponseCode } from '../actions/SharedActions';

var oAxiosInstance = Axios.create();

oAxiosInstance.interceptors.request.use(async function (oConfig) {
  var sToken = await getTokenLocalStorange();
  if (sToken)
    if (oConfig.method !== 'OPTIONS')
      oConfig.headers.Authorization = sToken;
  return oConfig;
}, function (oError) {
  return Promise.reject(oError);
});

oAxiosInstance.interceptors.response.use(
  next => {
    return Promise.resolve(next);
  },
  error => {
    if (error.response && error.response.status === 401) {
        actionSetResponseCode(401);
    }
    return Promise.reject(error);
  }
);

export default oAxiosInstance;