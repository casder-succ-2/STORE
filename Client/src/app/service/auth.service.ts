import axios from "axios";
import { ILogin, IRecoverPass, IResetPass } from "../types/types";
import localStorageService from "./localStorage.service";

const httpAuth = axios.create({
  baseURL: "http://localhost:8080/api/auth/",
});

const authService = {
  singUp: async (payload: ILogin) => {
    const { data } = await httpAuth.post("singUp", payload);
    return data;
  },

  singIn: async (payload: ILogin) => {
    const { data } = await httpAuth.post("signInWithPassword", payload);
    return data;
  },

  forgotPassword: async (payload: IRecoverPass) => {
    const { data } = await httpAuth.post("forgotPassword", payload);
    return data;
  },

  resetPassword: async (payload: IResetPass) => {
    const { data } = await httpAuth.post("resetPassword", payload);
    return data;
  },

  refreshTokens: async () => {
    const { data } = await httpAuth.post("token", {
      refreshToken: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;