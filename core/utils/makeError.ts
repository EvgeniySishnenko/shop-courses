import { AxiosError } from "axios";

export const makeError = (payload: AxiosError) => {
  console.log(payload);

  if (payload?.response?.data.message == "Ошибка валидации") {
    return { type: "formError", inputError: payload.response.data.errors };
  }
  return payload;
};
