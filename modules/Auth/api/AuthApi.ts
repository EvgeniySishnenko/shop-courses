import { AxiosResponse } from "axios";
import { AuthRespons } from "@core/models/respons/AuthRespons";
import api from "@core/http";

export default class AuthApi {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthRespons>> {
    return api.post<AuthRespons>("auth/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthRespons>> {
    return api.post<AuthRespons>("auth/register", { name, email, password });
  }

  static async logout(): Promise<void> {
    return api.post("auth/logout");
  }
}
