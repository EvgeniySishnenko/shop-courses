import { FC } from "react";
import { Form } from "@shared/Form";
import { Grid, Typography } from "@mui/material";
import Layout from "@modules/ui/Layout";
import formContent from "@modules/Auth/consts/registration-form-const";
import Link from "next/link";
import { ETypeForm } from "@shared/Form/models/enums";

const Registration: FC = () => {
  return (
    <Layout title="Регистрация">
      <Typography variant="h4" component="div" gutterBottom>
        Регистрация
      </Typography>
      <Grid container>
        <Typography component="div" gutterBottom>
          Есть аккаунт?
        </Typography>
        <Typography style={{ marginLeft: "4px" }} component="div" gutterBottom>
          <Link href="/auth/login">
            <a>Авторизоваться</a>
          </Link>
        </Typography>
      </Grid>

      <Form formContent={formContent} typeForm={ETypeForm.REGISTRAITION} />
    </Layout>
  );
};

export default Registration;
