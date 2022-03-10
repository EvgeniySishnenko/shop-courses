import { IUser } from "@modules/Profile/models/interfaces";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
