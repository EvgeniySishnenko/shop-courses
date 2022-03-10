export type TRegistrationParams = {
  email: string;
  password: string;
  name: string;
  confirm: string;
};

export type TLoginParams = Omit<TRegistrationParams, "confirm" | "name">;
