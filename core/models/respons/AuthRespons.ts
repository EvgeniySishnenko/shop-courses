import { IUser } from "@modules/Profile/models/interfaces";

export interface AuthRespons {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
