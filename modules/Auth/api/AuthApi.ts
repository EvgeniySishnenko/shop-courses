import { AxiosResponse } from "axios";
import {
  AuthResetPwdResponse,
  AuthResetResponse,
  AuthResponse,
  AuthStatusTokenForResetPwdResponse,
} from "@core/models/respons/AuthResponse";
import api from "@core/http";
import {
  TCheckTokenResetPwdParams,
  TLoginParams,
  TRegistrationParams,
  TResetParams,
  TResetPwdParams,
} from "../models/types";

export default class AuthApi {
  static async login(
    params: TLoginParams
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("auth/login", params);
  }

  static async registration(
    params: TRegistrationParams
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("auth/register", params);
  }

  static async logout(): Promise<void> {
    return api.post("auth/logout");
  }

  static async reset(
    params: TResetParams
  ): Promise<AxiosResponse<AuthResetResponse>> {
    return api.post<AuthResetResponse>("auth/reset", params);
  }

  static async resetPwd(
    params: TResetPwdParams
  ): Promise<AxiosResponse<AuthResetPwdResponse>> {
    return api.post<AuthResetPwdResponse>("auth/password", params);
  }
}
