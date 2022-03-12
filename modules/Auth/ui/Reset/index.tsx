import { FC } from "react";
import { Form } from "@shared/Form";
import { Typography } from "@mui/material";
import Layout from "@modules/ui/Layout";
import formContent from "@modules/Auth/consts/reset-form-const";
import { ETypeForm } from "@shared/Form/models/enums";

const Reset: FC = () => {
  return (
    <Layout title="Регистрация">
      <Typography variant="h4" component="div" gutterBottom>
        Сброс пароля
      </Typography>

      <Form formContent={formContent} typeForm={ETypeForm.RESET} />
    </Layout>
  );
};

export default Reset;
