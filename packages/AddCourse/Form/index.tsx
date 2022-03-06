import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const Form = () => {
  return (
    <Stack component="form" spacing={2} noValidate autoComplete="off">
      <TextField fullWidth id="fullWidth" label="Standard" variant="standard" />{" "}
      <TextField fullWidth id="fullWidth" label="Standard" variant="standard" />{" "}
      <TextField fullWidth id="fullWidth" label="Standard" variant="standard" />{" "}
    </Stack>
  );
};
