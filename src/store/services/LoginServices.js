import { CONSTANTS } from "../../constants/Constants";
import oAxiosInstance from "../interceptors/Interceptors";

export const Login = (sEmail, SPassword) => {
  return oAxiosInstance
    .post(CONSTANTS.API_URL + "login", {
      email: sEmail,
      password: SPassword,
    })
    .then((oResult) => oResult);
};

export const Logout = () => {
  return oAxiosInstance
    .get(CONSTANTS.API_URL + "logout")
    .then((oResult) => oResult);
};
