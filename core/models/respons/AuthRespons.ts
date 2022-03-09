import { IUser } from "@packages/Profile/models/interfaces";

export interface AuthRespons {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
