import { ChangeEvent, FC, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAppDispatch } from "@core/hooks/redux";
import { login, registration } from "@modules/auth/reducer/actions";
import { useInput } from "./hooks/useInput";

export const Form: FC = () => {
  const { value, onChange } = useInput();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      login({ email: "esishnenko@mail.ru", password: "1111111111111111" })
    );
    // dispatch(
    //   registration({
    //     email: "esishnenko@mail.ru",
    //     password: "1111111111111111",
    //     confirm: "1111111111111111",
    //     name: "esishnenko",
    //   })
    // );
  };

  return (
    <Stack component="form" spacing={2} noValidate autoComplete="off">
      <TextField
        value={value?.email || ""}
        onChange={onChange}
        fullWidth
        label="Email"
        type="email"
        name="email"
        variant="standard"
      />
      <TextField
        value={value?.password || ""}
        onChange={onChange}
        fullWidth
        label="Пароль"
        type="password"
        name="password"
        variant="standard"
      />
      <Button type="button" onClick={handleSubmit} variant="contained">
        Отправить
      </Button>
    </Stack>
  );
};
