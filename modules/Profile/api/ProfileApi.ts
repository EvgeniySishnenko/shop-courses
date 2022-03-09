import { AxiosResponse } from "axios";
import { AuthRespons } from "@core/models/respons/AuthRespons";
import api from "@core/http";
import { IUser } from "../models/interfaces";

export default class AuthApi {
  static async fetchUser(): Promise<AxiosResponse<IUser>> {
    return api.get<IUser>("/profile");
  }
}
