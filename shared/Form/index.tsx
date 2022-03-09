import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const Form: FC = () => {
  const [value, setValue] = useState<any>(); // todo any

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ [target.name]: target.value });
  };
  return (
    <Stack component="form" spacing={2} noValidate autoComplete="off">
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        label="Email"
        type="email"
        variant="standard"
      />
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        label="Пароль"
        type="password"
        variant="standard"
      />
    </Stack>
  );
};
