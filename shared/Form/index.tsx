import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { IForm } from "./models/interfaces";
import { ETypeForm } from "./models/enums";
import { schema } from "@modules/Auth/schema";

export const Form: FC<IForm> = ({ formContent, typeForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(schema(typeForm)),
  });

  function onSubmit<T>(data: T) {
    reset();
  }

  return (
    <Stack
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      spacing={2}
      noValidate
      autoComplete="off"
    >
      {formContent?.map(({ name, type, label }) => (
        <TextField
          {...register(name)}
          fullWidth
          label={label}
          type={type}
          variant="standard"
          key={name}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      ))}

      {typeForm === ETypeForm.LOGIN && (
        <Grid container>
          <Typography component="div" gutterBottom>
            Забыли пароль?
          </Typography>
          <Typography
            style={{ marginLeft: "4px" }}
            component="div"
            gutterBottom
          >
            <Link href="/auth/reset">
              <a>Сбросить</a>
            </Link>
          </Typography>
        </Grid>
      )}
      <Button disabled={!isValid} type="submit" variant="contained">
        Отправить
      </Button>
    </Stack>
  );
};
