import { AxiosResponse } from "axios";
import { AuthResponse } from "@core/models/respons/AuthResponse";
import api from "@core/http";
import { TLoginParams, TRegistrationParams } from "../models/types";

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
}
