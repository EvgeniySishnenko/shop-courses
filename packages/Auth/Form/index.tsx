import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const Form = () => {
  return (
    <Stack component="form" spacing={2} noValidate autoComplete="off">
      <TextField fullWidth label="Email" type="email" variant="standard" />
      <TextField fullWidth label="Пароль" type="password" variant="standard" />
    </Stack>
  );
};
